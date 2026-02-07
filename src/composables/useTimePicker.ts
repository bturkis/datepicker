/**
 * Composable: useTimePicker
 * Manages hour/minute state, AM/PM toggle, and minute stepping.
 */
import { ref, computed } from "vue";
import { padTime } from "./useDatePickerCalendar";

export interface UseTimePickerOptions {
  hourFormat?: "12" | "24";
  minuteStep?: number;
  initialHour?: number;
  initialMinute?: number;
}

export function useTimePicker(options: UseTimePickerOptions = {}) {
  const hourFormat = options.hourFormat || "24";
  const minuteStep = options.minuteStep || 1;

  const hour = ref(options.initialHour ?? 0);
  const minute = ref(options.initialMinute ?? 0);
  const isPM = ref(false);

  /** Displayed hour value (12h or 24h) */
  const displayHour = computed(() => {
    if (hourFormat === "24") return hour.value;
    const h = hour.value % 12;
    return h === 0 ? 12 : h;
  });

  /** Actual 24h hour */
  const hour24 = computed(() => hour.value);

  /** Formatted time string "HH:mm" */
  const timeString = computed(
    () => `${padTime(hour.value)}:${padTime(minute.value)}`,
  );

  function setTime(h: number, m: number) {
    hour.value = ((h % 24) + 24) % 24;
    minute.value = ((m % 60) + 60) % 60;
    isPM.value = hour.value >= 12;
  }

  function adjustHour(delta: number) {
    hour.value = (hour.value + delta + 24) % 24;
    isPM.value = hour.value >= 12;
  }

  function adjustMinute(delta: number) {
    const step = Math.max(1, minuteStep);
    let newMin = minute.value + delta * step;
    if (newMin >= 60) {
      newMin = newMin % 60;
      adjustHour(1);
    } else if (newMin < 0) {
      newMin = 60 + (newMin % 60);
      if (newMin === 60) newMin = 0;
      adjustHour(-1);
    }
    minute.value = newMin;
  }

  function toggleAMPM() {
    if (hour.value < 12) {
      hour.value += 12;
    } else {
      hour.value -= 12;
    }
    isPM.value = hour.value >= 12;
  }

  function setNow() {
    const now = new Date();
    setTime(now.getHours(), now.getMinutes());
  }

  /** Generate hour options for scroll picker */
  const hourOptions = computed(() => {
    if (hourFormat === "12") {
      return Array.from({ length: 12 }, (_, i) => (i === 0 ? 12 : i));
    }
    return Array.from({ length: 24 }, (_, i) => i);
  });

  /** Generate minute options for scroll picker */
  const minuteOptions = computed(() => {
    const step = Math.max(1, minuteStep);
    const opts: number[] = [];
    for (let i = 0; i < 60; i += step) opts.push(i);
    return opts;
  });

  return {
    hour,
    minute,
    isPM,
    displayHour,
    hour24,
    timeString,
    setTime,
    adjustHour,
    adjustMinute,
    toggleAMPM,
    setNow,
    hourOptions,
    minuteOptions,
  };
}
