<template>
  <div class="bt-time" :class="{ 'bt-time--standalone': standalone }">
    <div v-if="!standalone" class="bt-time-label">{{ locale.timeLabel }}</div>

    <div class="bt-time-controls">
      <!-- Hour Column -->
      <div class="bt-time-col">
        <button type="button" class="bt-time-btn" @click="adjustHour(1)">
          <IconChevronUp :size="14" />
        </button>
        <span class="bt-time-value">{{ padTime(displayHour) }}</span>
        <button type="button" class="bt-time-btn" @click="adjustHour(-1)">
          <IconChevronDown :size="14" />
        </button>
      </div>

      <span class="bt-time-sep">:</span>

      <!-- Minute Column -->
      <div class="bt-time-col">
        <button type="button" class="bt-time-btn" @click="adjustMinute(1)">
          <IconChevronUp :size="14" />
        </button>
        <span class="bt-time-value">{{ padTime(minute) }}</span>
        <button type="button" class="bt-time-btn" @click="adjustMinute(-1)">
          <IconChevronDown :size="14" />
        </button>
      </div>

      <!-- AM/PM Toggle -->
      <div v-if="hourFormat === '12'" class="bt-time-col bt-time-ampm">
        <button
          type="button"
          class="bt-ampm-btn"
          :class="{ 'bt-ampm-btn--active': !isPM }"
          @click="setAM"
        >
          {{ locale.am }}
        </button>
        <button
          type="button"
          class="bt-ampm-btn"
          :class="{ 'bt-ampm-btn--active': isPM }"
          @click="setPM"
        >
          {{ locale.pm }}
        </button>
      </div>
    </div>

    <!-- Footer handled by parent DatePicker -->
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { padTime } from "../composables/useDatePickerCalendar";
import { useTimePicker } from "../composables/useTimePicker";
import type { BtLocale } from "../locales/index";
import { IconChevronDown, IconChevronUp } from "../icons";

const props = withDefaults(
  defineProps<{
    hour: number;
    minute: number;
    hourFormat?: "12" | "24";
    minuteStep?: number;
    locale: BtLocale;
    standalone?: boolean;
  }>(),
  {
    hourFormat: "24",
    minuteStep: 1,
    standalone: false,
  },
);

const emit = defineEmits<{
  "update:hour": [value: number];
  "update:minute": [value: number];
}>();

const {
  hour: internalHour,
  minute: internalMinute,
  isPM,
  displayHour,
  adjustHour: _adjustHour,
  adjustMinute: _adjustMinute,
  setTime,
  setNow: _setNow,
} = useTimePicker({
  hourFormat: props.hourFormat,
  minuteStep: props.minuteStep,
  initialHour: props.hour,
  initialMinute: props.minute,
});

// Sync from parent
watch(
  () => [props.hour, props.minute],
  ([h, m]) => setTime(h, m),
);

// Emit to parent
watch(internalHour, (h) => emit("update:hour", h));
watch(internalMinute, (m) => emit("update:minute", m));

function adjustHour(delta: number) {
  _adjustHour(delta);
}

function adjustMinute(delta: number) {
  _adjustMinute(delta);
}

function setAM() {
  if (internalHour.value >= 12) {
    internalHour.value -= 12;
    isPM.value = false;
    emit("update:hour", internalHour.value);
  }
}

function setPM() {
  if (internalHour.value < 12) {
    internalHour.value += 12;
    isPM.value = true;
    emit("update:hour", internalHour.value);
  }
}

function setNow() {
  _setNow();
}
</script>
