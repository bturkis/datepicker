<template>
  <div class="sdp-calendar">
    <!-- Calendar Header -->
    <div class="sdp-header">
      <button type="button" class="sdp-nav-btn" @click="prevMonth">
        <IconChevronLeft :size="16" />
      </button>
      <button type="button" class="sdp-title" @click="toggleYearPicker">
        {{ currentMonthName }} {{ viewYear }}
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
        <span v-for="d in localWeekDays" :key="d" class="sdp-weekday">
          {{ d }}
        </span>
      </div>
      <div
        class="sdp-days"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <button
          v-for="day in calendarDays"
          :key="day.key"
          type="button"
          class="sdp-day"
          :class="getDayClasses(day)"
          :disabled="day.isDisabled"
          @click="$emit('day-click', day)"
          @mouseenter="$emit('day-hover', day)"
        >
          {{ day.date }}
        </button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
  type CalendarDay,
  useDatePickerCalendar,
} from "../composables/useDatePickerCalendar";
import { getWeekDays, getMonthNames } from "../locales/index";
import { IconChevronLeft, IconChevronRight } from "../icons";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    min?: string;
    max?: string;
    lang?: string;
    range?: boolean;
    rangeStart?: string | null;
    rangeEnd?: string | null;
    rangeHover?: string | null;
  }>(),
  {
    modelValue: "",
    min: undefined,
    max: undefined,
    lang: "tr",
    range: false,
    rangeStart: null,
    rangeEnd: null,
    rangeHover: null,
  },
);

const emit = defineEmits<{
  "day-click": [day: CalendarDay];
  "day-hover": [day: CalendarDay];
}>();

const minRef = computed(() => props.min);
const maxRef = computed(() => props.max);

const {
  viewYear,
  viewMonth,
  showYearPicker,
  yearRange,
  calendarDays,
  prevMonth: _prevMonth,
  nextMonth: _nextMonth,
  toggleYearPicker,
  selectYear,
  setView,
} = useDatePickerCalendar({ min: minRef, max: maxRef });

// Intl-based locale data
const localWeekDays = computed(() => getWeekDays(props.lang));
const localMonthNames = computed(() => getMonthNames(props.lang));
const currentMonthName = computed(() => localMonthNames.value[viewMonth.value]);

// Touch swipe support
const touchStartX = ref(0);

function onTouchStart(e: TouchEvent) {
  touchStartX.value = e.touches[0].clientX;
}

function onTouchEnd(e: TouchEvent) {
  const deltaX = e.changedTouches[0].clientX - touchStartX.value;
  if (Math.abs(deltaX) > 50) {
    if (deltaX > 0) _prevMonth();
    else _nextMonth();
  }
}

function prevMonth() {
  _prevMonth();
}

function nextMonth() {
  _nextMonth();
}

function getDayClasses(day: CalendarDay) {
  const key = day.key;
  const cls: Record<string, boolean> = {
    "sdp-day--other": !day.currentMonth,
    "sdp-day--today": day.isToday,
    "sdp-day--disabled": day.isDisabled,
  };

  if (props.range) {
    const start = props.rangeStart;
    const end = props.rangeEnd || props.rangeHover;
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

// Expose setView for parent
defineExpose({ setView, viewYear, viewMonth });
</script>
