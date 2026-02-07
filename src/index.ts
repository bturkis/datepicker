import type { App, Plugin } from "vue";
import DatePicker from "./DatePicker.vue";
import "./style.css";

export { DatePicker };
export {
  formatISO,
  padTime,
  formatDateToken,
  formatDisplayDate,
  formatShortDate,
  useDatePickerCalendar,
} from "./composables/useDatePickerCalendar";
export { useTimePicker } from "./composables/useTimePicker";
export {
  getLocale,
  registerLocale,
  getWeekDays,
  getMonthNames,
} from "./locales/index";

export type { CalendarDay } from "./composables/useDatePickerCalendar";
export type { UseTimePickerOptions } from "./composables/useTimePicker";
export type { StitchLocale } from "./locales/index";

/**
 * Vue plugin installer.
 * Usage: app.use(StitchDatePicker)
 * Registers <StitchDatePicker> globally.
 */
const StitchDatePicker: Plugin = {
  install(app: App) {
    app.component("StitchDatePicker", DatePicker);
  },
};

export default StitchDatePicker;
