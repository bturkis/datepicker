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
export type { BtLocale } from "./locales/index";

/** @deprecated Use BtLocale instead */
export type { BtLocale as StitchLocale } from "./locales/index";

/**
 * Vue plugin installer.
 * Usage: app.use(BtDatePicker)
 * Registers <BtDatePicker> and <DatePicker> globally.
 */
const BtDatePicker: Plugin = {
  install(app: App) {
    app.component("BtDatePicker", DatePicker);
    app.component("DatePicker", DatePicker);
    // Backward compatibility
    app.component("StitchDatePicker", DatePicker);
  },
};

/** @deprecated Use BtDatePicker instead */
export const StitchDatePicker = BtDatePicker;

export default BtDatePicker;
