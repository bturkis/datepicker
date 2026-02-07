/**
 * Composable: useDatePickerCalendar
 * Calendar grid generation, navigation, and locale helpers.
 */
import { ref, computed, type Ref } from "vue";

// Turkish locale data
export const monthNames = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
export const weekDays = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

export interface CalendarDay {
  key: string;
  date: number;
  fullDate: Date;
  currentMonth: boolean;
  isToday: boolean;
  isDisabled: boolean;
}

export interface MarkedDate {
  date: string;
  color?: string;
  tooltip?: string;
}

export function formatISO(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function padTime(n: number): string {
  return String(n).padStart(2, "0");
}

/**
 * Token-based date/time formatter.
 * Supported tokens:
 *   YYYY — 4-digit year       YY — 2-digit year
 *   MMMM — full month name    MMM — short month name
 *   MM   — 2-digit month      M  — month (1-12)
 *   DD   — 2-digit day        D  — day (1-31)
 *   HH   — 2-digit hour (24h) H  — hour (0-23)
 *   mm   — 2-digit minute     m  — minute (0-59)
 */
export function formatDateToken(
  dateStr: string,
  format: string,
  locale = "tr-TR",
): string {
  try {
    // Parse date or time-only value
    let d: Date;
    let hour = 0;
    let minute = 0;

    if (/^\d{2}:\d{2}$/.test(dateStr)) {
      // time-only "HH:mm"
      const parts = dateStr.split(":");
      hour = parseInt(parts[0]);
      minute = parseInt(parts[1]);
      d = new Date();
    } else if (dateStr.includes("T")) {
      // datetime "YYYY-MM-DDTHH:mm"
      d = new Date(dateStr);
      hour = d.getHours();
      minute = d.getMinutes();
    } else {
      // date-only "YYYY-MM-DD"
      d = new Date(dateStr + "T00:00:00");
    }

    const day = d.getDate();
    const month = d.getMonth(); // 0-based
    const year = d.getFullYear();

    // Month names via Intl
    const fullMonth = new Intl.DateTimeFormat(locale, {
      month: "long",
    }).format(d);
    const shortMonth = new Intl.DateTimeFormat(locale, {
      month: "short",
    }).format(d);

    // Replace tokens (order matters: longest first)
    return format
      .replace(/YYYY/g, String(year))
      .replace(/YY/g, String(year).slice(-2))
      .replace(/MMMM/g, fullMonth)
      .replace(/MMM/g, shortMonth)
      .replace(/MM/g, String(month + 1).padStart(2, "0"))
      .replace(/M(?!a|a)/g, String(month + 1))
      .replace(/DD/g, String(day).padStart(2, "0"))
      .replace(/D(?!e)/g, String(day))
      .replace(/HH/g, String(hour).padStart(2, "0"))
      .replace(/H(?!a)/g, String(hour))
      .replace(/mm/g, String(minute).padStart(2, "0"))
      .replace(/(?<![DMY])m(?!m)/g, String(minute));
  } catch {
    return dateStr;
  }
}

export function formatDisplayDate(dateStr: string, locale = "tr-TR"): string {
  try {
    const d = new Date(dateStr + "T00:00:00");
    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);
  } catch {
    return dateStr;
  }
}

export function formatShortDate(dateStr: string, locale = "tr-TR"): string {
  try {
    const d = new Date(dateStr + "T00:00:00");
    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(d);
  } catch {
    return dateStr;
  }
}

interface UseCalendarOptions {
  min?: Ref<string | undefined>;
  max?: Ref<string | undefined>;
  disabledDates?: Ref<string[] | ((date: Date) => boolean) | undefined>;
}

export function useDatePickerCalendar(options: UseCalendarOptions = {}) {
  const viewYear = ref(new Date().getFullYear());
  const viewMonth = ref(new Date().getMonth());
  const showYearPicker = ref(false);

  const minDate = computed(() =>
    options.min?.value ? new Date(options.min.value + "T00:00:00") : null,
  );
  const maxDate = computed(() =>
    options.max?.value ? new Date(options.max.value + "T00:00:00") : null,
  );

  const yearRange = computed(() => {
    const current = viewYear.value;
    const years: number[] = [];
    for (let i = current - 10; i <= current + 10; i++) years.push(i);
    return years;
  });

  function makeDay(d: Date, currentMonth: boolean, today: Date): CalendarDay {
    let isDisabled = false;
    if (minDate.value && d < minDate.value) isDisabled = true;
    if (maxDate.value && d > maxDate.value) isDisabled = true;

    // Custom disabled dates
    if (!isDisabled && options.disabledDates?.value) {
      const dd = options.disabledDates.value;
      if (typeof dd === "function") {
        isDisabled = dd(d);
      } else if (Array.isArray(dd)) {
        isDisabled = dd.includes(formatISO(d));
      }
    }

    return {
      key: formatISO(d),
      date: d.getDate(),
      fullDate: d,
      currentMonth,
      isToday: d.getTime() === today.getTime(),
      isDisabled,
    };
  }

  const calendarDays = computed<CalendarDay[]>(() => {
    const year = viewYear.value;
    const month = viewMonth.value;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let startDow = firstDay.getDay() - 1;
    if (startDow < 0) startDow = 6;

    const days: CalendarDay[] = [];

    const prevLast = new Date(year, month, 0);
    for (let i = startDow - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, prevLast.getDate() - i);
      days.push(makeDay(d, false, today));
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      const d = new Date(year, month, i);
      days.push(makeDay(d, true, today));
    }

    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      const d = new Date(year, month + 1, i);
      days.push(makeDay(d, false, today));
    }

    return days;
  });

  function prevMonth() {
    if (viewMonth.value === 0) {
      viewMonth.value = 11;
      viewYear.value--;
    } else {
      viewMonth.value--;
    }
  }

  function nextMonth() {
    if (viewMonth.value === 11) {
      viewMonth.value = 0;
      viewYear.value++;
    } else {
      viewMonth.value++;
    }
  }

  function toggleYearPicker() {
    showYearPicker.value = !showYearPicker.value;
  }

  function selectYear(y: number) {
    viewYear.value = y;
    showYearPicker.value = false;
  }

  function setView(year: number, month: number) {
    viewYear.value = year;
    viewMonth.value = month;
  }

  return {
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
  };
}
