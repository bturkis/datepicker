import type { App, Plugin } from "vue";
import DatePicker from "./DatePicker.vue";
import "./style.css";

export { DatePicker };
export {
  monthNames,
  weekDays,
  formatISO,
  padTime,
  formatDateToken,
  formatDisplayDate,
  formatShortDate,
  useDatePickerCalendar,
} from "./composables/useDatePickerCalendar";

export type { CalendarDay } from "./composables/useDatePickerCalendar";

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
