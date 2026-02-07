<template>
  <div class="sdp-time" :class="{ 'sdp-time--standalone': standalone }">
    <div v-if="!standalone" class="sdp-time-label">{{ locale.timeLabel }}</div>

    <div class="sdp-time-controls">
      <!-- Hour Column -->
      <div class="sdp-time-col">
        <button type="button" class="sdp-time-btn" @click="adjustHour(1)">
          <IconChevronUp :size="14" />
        </button>
        <span class="sdp-time-value">{{ padTime(displayHour) }}</span>
        <button type="button" class="sdp-time-btn" @click="adjustHour(-1)">
          <IconChevronDown :size="14" />
        </button>
      </div>

      <span class="sdp-time-sep">:</span>

      <!-- Minute Column -->
      <div class="sdp-time-col">
        <button type="button" class="sdp-time-btn" @click="adjustMinute(1)">
          <IconChevronUp :size="14" />
        </button>
        <span class="sdp-time-value">{{ padTime(minute) }}</span>
        <button type="button" class="sdp-time-btn" @click="adjustMinute(-1)">
          <IconChevronDown :size="14" />
        </button>
      </div>

      <!-- AM/PM Toggle -->
      <div v-if="hourFormat === '12'" class="sdp-time-col sdp-time-ampm">
        <button
          type="button"
          class="sdp-ampm-btn"
          :class="{ 'sdp-ampm-btn--active': !isPM }"
          @click="setAM"
        >
          {{ locale.am }}
        </button>
        <button
          type="button"
          class="sdp-ampm-btn"
          :class="{ 'sdp-ampm-btn--active': isPM }"
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
import type { StitchLocale } from "../locales/index";
import { IconChevronDown, IconChevronUp } from "../icons";

const props = withDefaults(
  defineProps<{
    hour: number;
    minute: number;
    hourFormat?: "12" | "24";
    minuteStep?: number;
    locale: StitchLocale;
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
