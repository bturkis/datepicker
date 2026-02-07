<template>
  <div
    ref="containerRef"
    :class="[
      'stitch-datepicker',
      { 'stitch-datepicker--error': error, 'stitch-datepicker--open': isOpen },
    ]"
  >
    <label v-if="label" :for="pickerId" class="stitch-datepicker__label">
      {{ label }}
    </label>

    <!-- Trigger -->
    <button
      :id="pickerId"
      ref="triggerRef"
      type="button"
      class="stitch-datepicker__trigger"
      :disabled="disabled"
      @click="toggle"
    >
      <IconCalendar :size="16" class="stitch-datepicker__icon" />
      <span
        class="stitch-datepicker__value"
        :class="{ 'stitch-datepicker__value--empty': !modelValue }"
      >
        {{ displayValue }}
      </span>
      <IconChevronDown :size="14" class="stitch-datepicker__chevron" />
    </button>

    <!-- Calendar Popup -->
    <Teleport to="body">
      <Transition name="stitch-calendar-pop">
        <div
          v-if="isOpen"
          ref="popupRef"
          class="stitch-datepicker__popup"
          :style="popupStyle"
          @keydown.escape="close"
        >
          <!-- Calendar Header -->
          <div class="sdp-header">
            <button type="button" class="sdp-nav-btn" @click="prevMonth">
              <IconChevronLeft :size="16" />
            </button>
            <button type="button" class="sdp-title" @click="toggleYearPicker">
              {{ monthNames[viewMonth] }} {{ viewYear }}
            </button>
            <button type="button" class="sdp-nav-btn" @click="nextMonth">
              <IconChevronRight :size="16" />
            </button>
          </div>

          <!-- Year Picker -->
          <div v-if="showYearPicker" class="sdp-year-picker">
            <button
              v-for="y in yearRange"
              :key="y"
              type="button"
              class="sdp-year-btn"
              :class="{ 'sdp-year-btn--active': y === viewYear }"
              @click="selectYear(y)"
            >
              {{ y }}
            </button>
          </div>

          <!-- Calendar Grid -->
          <template v-else>
            <div class="sdp-weekdays">
              <span v-for="d in weekDays" :key="d" class="sdp-weekday">{{
                d
              }}</span>
            </div>
            <div class="sdp-days">
              <button
                v-for="day in calendarDays"
                :key="day.key"
                type="button"
                class="sdp-day"
                :class="getDayClasses(day)"
                :disabled="day.isDisabled"
                @click="onDayClick(day)"
                @mouseenter="onDayHover(day)"
              >
                {{ day.date }}
              </button>
            </div>
          </template>

          <!-- Time Picker -->
          <div v-if="showTimePicker" class="sdp-time">
            <div class="sdp-time-label">Saat</div>
            <div class="sdp-time-controls">
              <div class="sdp-time-col">
                <button
                  type="button"
                  class="sdp-time-btn"
                  @click="adjustHour(1)"
                >
                  <IconChevronUp :size="14" />
                </button>
                <span class="sdp-time-value">{{ padTime(selectedHour) }}</span>
                <button
                  type="button"
                  class="sdp-time-btn"
                  @click="adjustHour(-1)"
                >
                  <IconChevronDown :size="14" />
                </button>
              </div>
              <span class="sdp-time-sep">:</span>
              <div class="sdp-time-col">
                <button
                  type="button"
                  class="sdp-time-btn"
                  @click="adjustMinute(1)"
                >
                  <IconChevronUp :size="14" />
                </button>
                <span class="sdp-time-value">{{
                  padTime(selectedMinute)
                }}</span>
                <button
                  type="button"
                  class="sdp-time-btn"
                  @click="adjustMinute(-1)"
                >
                  <IconChevronDown :size="14" />
                </button>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="sdp-footer">
            <button
              v-if="type !== 'time'"
              type="button"
              class="sdp-today-btn"
              @click="goToday"
            >
              {{ todayLabel }}
            </button>
            <button
              v-if="modelValue"
              type="button"
              class="sdp-clear-btn"
              @click="clearValue"
            >
              {{ clearLabel }}
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>

    <p v-if="error" class="stitch-datepicker__error">{{ error }}</p>
    <p v-if="hint" class="stitch-datepicker__hint">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from "vue";
import {
  type CalendarDay,
  monthNames,
  weekDays,
  formatISO,
  padTime,
  formatDateToken,
  formatDisplayDate,
  formatShortDate,
  useDatePickerCalendar,
} from "./composables/useDatePickerCalendar";
import {
  IconCalendar,
  IconChevronDown,
  IconChevronUp,
  IconChevronLeft,
  IconChevronRight,
} from "./icons";

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
    placeholder: "Tarih seçin",
    rangePlaceholder: "Tarih aralığı seçin",
    todayLabel: "Bugün",
    clearLabel: "Temizle",
    locale: "tr-TR",
  },
);

const pickerId = computed(
  () => `stitch-dp-${Math.random().toString(36).slice(2, 9)}`,
);

// Calendar composable
const minRef = computed(() => props.min);
const maxRef = computed(() => props.max);
const {
  viewYear,
  viewMonth,
  showYearPicker,
  yearRange,
  calendarDays,
  prevMonth,
  nextMonth,
  toggleYearPicker,
  selectYear,
  setView,
} = useDatePickerCalendar({ min: minRef, max: maxRef });

// State
const isOpen = ref(false);
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

const showTimePicker = computed(
  () => props.type === "datetime-local" || props.type === "time",
);

function parseRange(): { start: string; end: string } | null {
  if (!props.range || !props.modelValue) return null;
  const parts = props.modelValue.split("|");
  if (parts.length === 2 && parts[0] && parts[1]) {
    return { start: parts[0], end: parts[1] };
  }
  return null;
}

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

const displayValue = computed(() => {
  if (props.range) {
    const r = parseRange();
    if (!r) return props.rangePlaceholder;
    if (props.displayFormat) {
      return `${formatDateToken(r.start, props.displayFormat, props.locale)} – ${formatDateToken(r.end, props.displayFormat, props.locale)}`;
    }
    return `${formatShortDate(r.start, props.locale)} – ${formatShortDate(r.end, props.locale)}`;
  }
  if (!props.modelValue) return props.placeholder;
  try {
    if (props.displayFormat) {
      return formatDateToken(
        props.modelValue,
        props.displayFormat,
        props.locale,
      );
    }
    if (props.type === "time") return props.modelValue;
    const dateStr =
      props.type === "datetime-local"
        ? props.modelValue.split("T")[0]
        : props.modelValue;
    const formatted = formatDisplayDate(dateStr, props.locale);
    if (props.type === "datetime-local") {
      return `${formatted} ${padTime(selectedHour.value)}:${padTime(selectedMinute.value)}`;
    }
    return formatted;
  } catch {
    return props.modelValue;
  }
});

function getDayClasses(day: CalendarDay) {
  const key = day.key;
  const cls: Record<string, boolean> = {
    "sdp-day--other": !day.currentMonth,
    "sdp-day--today": day.isToday,
    "sdp-day--disabled": day.isDisabled,
  };

  if (props.range) {
    const start = rangeStart.value;
    const end = rangeEnd.value || rangeHover.value;
    if (start && end) {
      const [lo, hi] = start <= end ? [start, end] : [end, start];
      cls["sdp-day--range-start"] = key === lo;
      cls["sdp-day--range-end"] = key === hi;
      cls["sdp-day--in-range"] = key > lo && key < hi;
      cls["sdp-day--selected"] = key === lo || key === hi;
    } else if (start) {
      cls["sdp-day--selected"] = key === start;
    }
  } else {
    const selectedStr = props.modelValue?.split("T")[0];
    cls["sdp-day--selected"] = key === selectedStr;
  }

  return cls;
}

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

// Popup positioning
const popupStyle = ref<Record<string, string>>({});

function updatePosition() {
  if (!triggerRef.value) return;
  const rect = triggerRef.value.getBoundingClientRect();
  const spaceBelow = window.innerHeight - rect.bottom;
  const spaceAbove = rect.top;
  const openAbove = spaceBelow < 200 && spaceAbove > spaceBelow;

  const isMobile = window.innerWidth <= 640;
  const topValue = openAbove ? `${rect.top - 380}px` : `${rect.bottom + 4}px`;
  const leftValue = isMobile ? "8px" : `${rect.left}px`;
  const widthValue = isMobile ? "auto" : `${Math.max(rect.width, 300)}px`;

  popupStyle.value = {
    position: "fixed",
    top: topValue,
    left: leftValue,
    width: widthValue,
    zIndex: "9999",
    ...(isMobile ? { right: "8px" } : {}),
  };
}

function toggle() {
  if (props.disabled) return;
  isOpen.value ? close() : open();
}

function open() {
  isOpen.value = true;
  showYearPicker.value = false;
  if (props.range) {
    const r = parseRange();
    if (r) {
      const d = new Date(r.start + "T00:00:00");
      setView(d.getFullYear(), d.getMonth());
    } else {
      const now = new Date();
      setView(now.getFullYear(), now.getMonth());
    }
  } else if (props.modelValue && props.type !== "time") {
    const dateStr = props.modelValue.split("T")[0];
    const d = new Date(dateStr + "T00:00:00");
    setView(d.getFullYear(), d.getMonth());
  } else {
    const now = new Date();
    setView(now.getFullYear(), now.getMonth());
  }
  nextTick(() => {
    requestAnimationFrame(() => updatePosition());
  });
}

function close() {
  isOpen.value = false;
  showYearPicker.value = false;
  rangeHover.value = null;
}

function adjustHour(delta: number) {
  selectedHour.value = (selectedHour.value + delta + 24) % 24;
  emitTimeUpdate();
}

function adjustMinute(delta: number) {
  selectedMinute.value = (selectedMinute.value + delta + 60) % 60;
  emitTimeUpdate();
}

function emitTimeUpdate() {
  const time = `${padTime(selectedHour.value)}:${padTime(selectedMinute.value)}`;
  if (props.type === "time") {
    emit("update:modelValue", time);
  } else if (props.type === "datetime-local" && props.modelValue) {
    const dateStr = props.modelValue.split("T")[0];
    emit("update:modelValue", `${dateStr}T${time}`);
  }
}

function goToday() {
  const today = new Date();
  setView(today.getFullYear(), today.getMonth());
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

function clearValue() {
  rangeStart.value = null;
  rangeEnd.value = null;
  rangeHover.value = null;
  emit("update:modelValue", "");
  close();
}

function onClickOutside(e: MouseEvent) {
  if (!isOpen.value) return;
  const target = e.target as Node;
  if (containerRef.value?.contains(target) || popupRef.value?.contains(target))
    return;
  close();
}

function onScrollOrResize() {
  if (isOpen.value) updatePosition();
}

onMounted(() => {
  document.addEventListener("mousedown", onClickOutside);
  window.addEventListener("scroll", onScrollOrResize, true);
  window.addEventListener("resize", onScrollOrResize);
});

onUnmounted(() => {
  document.removeEventListener("mousedown", onClickOutside);
  window.removeEventListener("scroll", onScrollOrResize, true);
  window.removeEventListener("resize", onScrollOrResize);
});
</script>
