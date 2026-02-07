<template>
  <div
    ref="containerRef"
    :class="[
      'bt-datepicker',
      { 'bt-datepicker--error': error, 'bt-datepicker--open': isOpen },
    ]"
  >
    <label v-if="label" :for="pickerId" class="bt-datepicker__label">
      {{ label }}
    </label>

    <!-- Trigger -->
    <button
      :id="pickerId"
      ref="triggerRef"
      type="button"
      class="bt-datepicker__trigger"
      :disabled="disabled"
      @click="toggle"
    >
      <IconCalendar
        v-if="type !== 'time'"
        :size="16"
        class="bt-datepicker__icon"
      />
      <IconClock v-else :size="16" class="bt-datepicker__icon" />
      <span
        class="bt-datepicker__value"
        :class="{ 'bt-datepicker__value--empty': !modelValue }"
      >
        {{ displayValue }}
      </span>
      <IconChevronDown :size="14" class="bt-datepicker__chevron" />
    </button>

    <!-- Popup -->
    <Teleport to="body">
      <Transition name="bt-calendar-pop">
        <div
          v-if="isOpen"
          ref="popupRef"
          class="bt-datepicker__popup"
          :class="{
            'bt-datepicker__popup--time-only': type === 'time',
            'bt-datepicker__popup--mobile': isMobile,
          }"
          :style="popupStyle"
          @keydown.escape="close"
        >
          <!-- Mobile backdrop -->
          <div v-if="isMobile" class="bt-backdrop" @click="close" />

          <div class="bt-popup-content">
            <!-- Mobile drag handle -->
            <div v-if="isMobile" class="bt-drag-handle">
              <div class="bt-drag-bar" />
            </div>

            <!-- Calendar Panel (date / datetime) -->
            <CalendarPanel
              v-if="type !== 'time'"
              ref="calendarRef"
              :model-value="modelValue"
              :min="min"
              :max="max"
              :lang="lang"
              :range="range"
              :range-start="rangeStart"
              :range-end="rangeEnd"
              :range-hover="rangeHover"
              @day-click="onDayClick"
              @day-hover="onDayHover"
            />

            <!-- Time Panel -->
            <TimePanel
              v-if="showTimePicker"
              :hour="selectedHour"
              :minute="selectedMinute"
              :hour-format="hourFormat"
              :minute-step="minuteStep"
              :locale="currentLocale"
              :standalone="type === 'time'"
              @update:hour="onHourUpdate"
              @update:minute="onMinuteUpdate"
            />

            <!-- Footer -->
            <div class="bt-footer">
              <button
                v-if="type !== 'time'"
                type="button"
                class="bt-today-btn"
                @click="goToday"
              >
                {{ currentLocale.todayLabel }}
              </button>
              <button
                v-if="type === 'time'"
                type="button"
                class="bt-today-btn"
                @click="setNow"
              >
                {{ currentLocale.nowLabel }}
              </button>
              <button
                v-if="modelValue"
                type="button"
                class="bt-clear-btn"
                @click="clearValue"
              >
                {{ currentLocale.clearLabel }}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <p v-if="error" class="bt-datepicker__error">{{ error }}</p>
    <p v-if="hint" class="bt-datepicker__hint">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from "vue";

const isBrowser = typeof window !== "undefined";
import {
  type CalendarDay,
  formatISO,
  padTime,
  formatDateToken,
  formatDisplayDate,
  formatShortDate,
} from "./composables/useDatePickerCalendar";
import { getLocale, localeToIntl } from "./locales/index";
import type { BtLocale } from "./locales/index";
import CalendarPanel from "./components/CalendarPanel.vue";
import TimePanel from "./components/TimePanel.vue";
import { IconCalendar, IconClock, IconChevronDown } from "./icons";

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    label?: string;
    type?: "date" | "datetime-local" | "time";
    displayFormat?: string;
    min?: string;
    max?: string;
    error?: string;
    hint?: string;
    disabled?: boolean;
    required?: boolean;
    range?: boolean;
    placeholder?: string;
    rangePlaceholder?: string;
    todayLabel?: string;
    clearLabel?: string;
    locale?: string;
    /** Language code for UI labels (tr, en, de, fr, etc.) */
    lang?: string;
    /** Hour display format: 24h or 12h (AM/PM) */
    hourFormat?: "12" | "24";
    /** Minute step increment (1, 5, 15, 30) */
    minuteStep?: number;
  }>(),
  {
    modelValue: "",
    label: undefined,
    type: "date",
    displayFormat: undefined,
    min: undefined,
    max: undefined,
    error: undefined,
    hint: undefined,
    disabled: false,
    required: false,
    range: false,
    placeholder: undefined,
    rangePlaceholder: undefined,
    todayLabel: undefined,
    clearLabel: undefined,
    locale: undefined,
    lang: "tr",
    hourFormat: "24",
    minuteStep: 1,
  },
);

// ── Locale ────────────────────────────────────────────────────────
const currentLocale = computed<BtLocale>(() => getLocale(props.lang));
const intlLocale = computed(() => props.locale || localeToIntl(props.lang));

// Resolved labels (prop overrides > locale defaults)
const resolvedPlaceholder = computed(() => {
  if (props.placeholder) return props.placeholder;
  if (props.type === "time") return currentLocale.value.timePlaceholder;
  if (props.type === "datetime-local")
    return currentLocale.value.datetimePlaceholder;
  return currentLocale.value.placeholder;
});
const resolvedRangePlaceholder = computed(
  () => props.rangePlaceholder || currentLocale.value.rangePlaceholder,
);

// ── ID ────────────────────────────────────────────────────────────
const pickerId = computed(
  () => `bt-dp-${Math.random().toString(36).slice(2, 9)}`,
);

// ── State ─────────────────────────────────────────────────────────
const isOpen = ref(false);
const isMobile = ref(false);
const selectedHour = ref(0);
const selectedMinute = ref(0);

// Range state
const rangeStart = ref<string | null>(null);
const rangeEnd = ref<string | null>(null);
const rangeHover = ref<string | null>(null);

// Refs
const containerRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLElement | null>(null);
const popupRef = ref<HTMLElement | null>(null);
const calendarRef = ref<InstanceType<typeof CalendarPanel> | null>(null);

const showTimePicker = computed(
  () => props.type === "datetime-local" || props.type === "time",
);

// ── Mobile detection ──────────────────────────────────────────────
function checkMobile() {
  if (!isBrowser) return;
  isMobile.value = window.innerWidth <= 640;
}

// ── Range parsing ─────────────────────────────────────────────────
function parseRange(): { start: string; end: string } | null {
  if (!props.range || !props.modelValue) return null;
  const parts = props.modelValue.split("|");
  if (parts.length === 2 && parts[0] && parts[1]) {
    return { start: parts[0], end: parts[1] };
  }
  return null;
}

// ── Watch model value ─────────────────────────────────────────────
watch(
  () => props.modelValue,
  (val) => {
    if (!val) return;
    if (props.range) {
      const r = parseRange();
      if (r) {
        rangeStart.value = r.start;
        rangeEnd.value = r.end;
      }
      return;
    }
    if (props.type === "datetime-local" && val.includes("T")) {
      const [, time] = val.split("T");
      const parts = time.split(":");
      selectedHour.value = parseInt(parts[0]) || 0;
      selectedMinute.value = parseInt(parts[1]) || 0;
    } else if (props.type === "time") {
      const parts = val.split(":");
      selectedHour.value = parseInt(parts[0]) || 0;
      selectedMinute.value = parseInt(parts[1]) || 0;
    }
  },
  { immediate: true },
);

// ── Display value ─────────────────────────────────────────────────
const displayValue = computed(() => {
  if (props.range) {
    const r = parseRange();
    if (!r) return resolvedRangePlaceholder.value;
    if (props.displayFormat) {
      return `${formatDateToken(r.start, props.displayFormat, intlLocale.value)} – ${formatDateToken(r.end, props.displayFormat, intlLocale.value)}`;
    }
    return `${formatShortDate(r.start, intlLocale.value)} – ${formatShortDate(r.end, intlLocale.value)}`;
  }
  if (!props.modelValue) return resolvedPlaceholder.value;
  try {
    if (props.displayFormat) {
      return formatDateToken(
        props.modelValue,
        props.displayFormat,
        intlLocale.value,
      );
    }
    if (props.type === "time") return props.modelValue;
    const dateStr =
      props.type === "datetime-local"
        ? props.modelValue.split("T")[0]
        : props.modelValue;
    const formatted = formatDisplayDate(dateStr, intlLocale.value);
    if (props.type === "datetime-local") {
      return `${formatted} ${padTime(selectedHour.value)}:${padTime(selectedMinute.value)}`;
    }
    return formatted;
  } catch {
    return props.modelValue;
  }
});

// ── Day events ────────────────────────────────────────────────────
function onDayHover(day: CalendarDay) {
  if (!props.range || !rangeStart.value || rangeEnd.value) return;
  rangeHover.value = day.key;
}

function onDayClick(day: CalendarDay) {
  if (day.isDisabled) return;
  if (props.range) {
    selectRangeDate(day);
  } else {
    selectSingleDate(day);
  }
}

function selectSingleDate(day: CalendarDay) {
  const dateStr = formatISO(day.fullDate);
  if (props.type === "datetime-local") {
    emit(
      "update:modelValue",
      `${dateStr}T${padTime(selectedHour.value)}:${padTime(selectedMinute.value)}`,
    );
  } else {
    emit("update:modelValue", dateStr);
  }
  if (!showTimePicker.value) close();
}

function selectRangeDate(day: CalendarDay) {
  const dateStr = formatISO(day.fullDate);
  if (!rangeStart.value || rangeEnd.value) {
    rangeStart.value = dateStr;
    rangeEnd.value = null;
    rangeHover.value = null;
  } else {
    const start = rangeStart.value;
    const [lo, hi] = start <= dateStr ? [start, dateStr] : [dateStr, start];
    rangeStart.value = lo;
    rangeEnd.value = hi;
    rangeHover.value = null;
    emit("update:modelValue", `${lo}|${hi}`);
    close();
  }
}

// ── Time events ───────────────────────────────────────────────────
function onHourUpdate(h: number) {
  selectedHour.value = h;
  emitTimeUpdate();
}

function onMinuteUpdate(m: number) {
  selectedMinute.value = m;
  emitTimeUpdate();
}

function emitTimeUpdate() {
  const time = `${padTime(selectedHour.value)}:${padTime(selectedMinute.value)}`;
  if (props.type === "time") {
    emit("update:modelValue", time);
  } else if (props.type === "datetime-local" && props.modelValue) {
    const dateStr = props.modelValue.split("T")[0];
    if (dateStr && dateStr !== props.modelValue) {
      emit("update:modelValue", `${dateStr}T${time}`);
    }
  }
}

// ── Popup positioning ─────────────────────────────────────────────
const popupStyle = ref<Record<string, string>>({});

function updatePosition() {
  if (!isBrowser) return;
  if (isMobile.value) {
    popupStyle.value = {
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0",
      zIndex: "9999",
    };
    return;
  }

  if (!triggerRef.value) return;
  const rect = triggerRef.value.getBoundingClientRect();
  const spaceBelow = window.innerHeight - rect.bottom;
  const spaceAbove = rect.top;
  const openAbove = spaceBelow < 200 && spaceAbove > spaceBelow;
  const popupHeight = props.type === "time" ? 200 : 380;

  const topValue = openAbove
    ? `${rect.top - popupHeight}px`
    : `${rect.bottom + 4}px`;
  const leftValue = `${rect.left}px`;
  const widthValue = `${Math.max(rect.width, 300)}px`;

  popupStyle.value = {
    position: "fixed",
    top: topValue,
    left: leftValue,
    width: widthValue,
    zIndex: "9999",
  };
}

// ── Open / Close ──────────────────────────────────────────────────
function toggle() {
  if (props.disabled) return;
  isOpen.value ? close() : open();
}

function open() {
  checkMobile();
  isOpen.value = true;

  if (props.type !== "time") {
    if (props.range) {
      const r = parseRange();
      if (r) {
        const d = new Date(r.start + "T00:00:00");
        nextTick(() =>
          calendarRef.value?.setView(d.getFullYear(), d.getMonth()),
        );
      }
    } else if (props.modelValue) {
      const dateStr = props.modelValue.split("T")[0];
      const d = new Date(dateStr + "T00:00:00");
      nextTick(() => calendarRef.value?.setView(d.getFullYear(), d.getMonth()));
    }
  }

  nextTick(() => {
    requestAnimationFrame(() => updatePosition());
  });

  if (isBrowser && isMobile.value) {
    document.body.style.overflow = "hidden";
  }
}

function close() {
  isOpen.value = false;
  rangeHover.value = null;
  if (isBrowser && isMobile.value) {
    document.body.style.overflow = "";
  }
}

// ── Actions ───────────────────────────────────────────────────────
function goToday() {
  const today = new Date();
  calendarRef.value?.setView(today.getFullYear(), today.getMonth());
  if (!props.range) {
    const dateStr = formatISO(today);
    if (props.type === "datetime-local") {
      emit(
        "update:modelValue",
        `${dateStr}T${padTime(selectedHour.value)}:${padTime(selectedMinute.value)}`,
      );
    } else {
      emit("update:modelValue", dateStr);
    }
    if (!showTimePicker.value) close();
  }
}

function setNow() {
  const now = new Date();
  selectedHour.value = now.getHours();
  selectedMinute.value = now.getMinutes();
  emitTimeUpdate();
}

function clearValue() {
  rangeStart.value = null;
  rangeEnd.value = null;
  rangeHover.value = null;
  emit("update:modelValue", "");
  close();
}

// ── Outside click / resize ────────────────────────────────────────
function onClickOutside(e: MouseEvent) {
  if (!isOpen.value) return;
  const target = e.target as Node;
  if (containerRef.value?.contains(target) || popupRef.value?.contains(target))
    return;
  close();
}

function onScrollOrResize() {
  checkMobile();
  if (isOpen.value) updatePosition();
}

onMounted(() => {
  if (!isBrowser) return;
  checkMobile();
  document.addEventListener("mousedown", onClickOutside);
  window.addEventListener("scroll", onScrollOrResize, true);
  window.addEventListener("resize", onScrollOrResize);
});

onUnmounted(() => {
  if (!isBrowser) return;
  document.removeEventListener("mousedown", onClickOutside);
  window.removeEventListener("scroll", onScrollOrResize, true);
  window.removeEventListener("resize", onScrollOrResize);
  document.body.style.overflow = "";
});
</script>
