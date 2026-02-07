# Props and Events

## Props

| Prop               | Type                                   | Default        | Description                                                             |
| ------------------ | -------------------------------------- | -------------- | ----------------------------------------------------------------------- |
| `modelValue`       | `string`                               | `''`           | Selected value (ISO date, time, or datetime string)                     |
| `type`             | `'date' \| 'datetime-local' \| 'time'` | `'date'`       | Picker mode                                                             |
| `displayFormat`    | `string`                               | --             | Display format (e.g. `DD/MM/YYYY`). Falls back to `Intl.DateTimeFormat` |
| `placeholder`      | `string`                               | Locale default | Input placeholder text                                                  |
| `disabled`         | `boolean`                              | `false`        | Disable the picker                                                      |
| `required`         | `boolean`                              | `false`        | Mark as required                                                        |
| `label`            | `string`                               | --             | Label text above the trigger                                            |
| `lang`             | `string`                               | `'tr'`         | Language code. See [Localization](/guide/localization)                  |
| `locale`           | `string`                               | --             | Intl locale string for month/weekday formatting                         |
| `min`              | `string`                               | --             | Minimum selectable date (`YYYY-MM-DD`)                                  |
| `max`              | `string`                               | --             | Maximum selectable date (`YYYY-MM-DD`)                                  |
| `range`            | `boolean`                              | `false`        | Enable date range selection                                             |
| `rangeStart`       | `string`                               | --             | Start date for range (`v-model:range-start`)                            |
| `rangeEnd`         | `string`                               | --             | End date for range (`v-model:range-end`)                                |
| `rangePlaceholder` | `string`                               | Locale default | Placeholder for empty range state                                       |
| `hourFormat`       | `'24' \| '12'`                         | `'24'`         | Time display format                                                     |
| `minuteStep`       | `number`                               | `1`            | Minute increment step                                                   |
| `error`            | `string`                               | --             | Error message (red border + text)                                       |
| `hint`             | `string`                               | --             | Hint text below the trigger                                             |
| `disabledDates`    | `string[] \| (date: Date) => boolean`  | --             | Disable specific dates (array of ISO strings or predicate function)     |
| `markedDates`      | `MarkedDate[]`                         | `[]`           | Mark dates with colored dots and optional tooltips                      |

## Events

| Event               | Payload  | Description                               |
| ------------------- | -------- | ----------------------------------------- |
| `update:modelValue` | `string` | Emitted when a value is selected          |
| `update:rangeStart` | `string` | Emitted when range start date is selected |
| `update:rangeEnd`   | `string` | Emitted when range end date is selected   |

## Format Tokens

Use these tokens in the `displayFormat` prop:

| Token  | Output             | Example    |
| ------ | ------------------ | ---------- |
| `YYYY` | 4-digit year       | `2026`     |
| `YY`   | 2-digit year       | `26`       |
| `MMMM` | Full month name    | `February` |
| `MMM`  | Short month name   | `Feb`      |
| `MM`   | 2-digit month      | `02`       |
| `M`    | Month (1-12)       | `2`        |
| `DD`   | 2-digit day        | `14`       |
| `D`    | Day (1-31)         | `7`        |
| `HH`   | 2-digit hour (24h) | `09`       |
| `H`    | Hour (0-23)        | `9`        |
| `mm`   | 2-digit minute     | `30`       |
| `m`    | Minute (0-59)      | `5`        |

::: tip
Month and weekday names respect the `lang` prop -- they're generated via `Intl.DateTimeFormat`.
:::

## CSS Variables

The component uses CSS custom properties for theming. Override them anywhere in your CSS.

### Dark Theme (Default)

```css
:root {
  --bt-primary: #8b5cf6;
  --bt-primary-light: #a78bfa;
  --bt-secondary: #ec4899;
  --bt-error: #ef4444;
  --bt-text: #f8fafc;
  --bt-text-secondary: #94a3b8;
  --bt-text-muted: #64748b;
  --bt-bg: #1e1e2e;
  --bt-popup-bg: #16161f;
  --bt-border: #2a2a3d;
  --bt-border-hover: #3d3d55;
  --bt-hover-bg: rgba(139, 92, 246, 0.1);
  --bt-hover-border: rgba(139, 92, 246, 0.2);
  --bt-focus-shadow: rgba(139, 92, 246, 0.15);
  --bt-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  --bt-popup-blur: blur(20px) saturate(180%);
  --bt-popup-glass-bg: rgba(22, 22, 31, 0.85);
  --bt-popup-glass-border: rgba(255, 255, 255, 0.08);
  --bt-popup-inner-glow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  --bt-radius-sm: 0.375rem;
  --bt-radius-md: 0.5rem;
  --bt-radius-lg: 0.75rem;
  --bt-radius-xl: 1rem;
}
```

### Light Theme

The light theme activates automatically via `@media (prefers-color-scheme: light)`, or manually with `data-theme="light"` or the `.light` class:

```css
[data-theme="light"],
.light {
  --bt-text: #1e293b;
  --bt-text-secondary: #475569;
  --bt-text-muted: #94a3b8;
  --bt-bg: #ffffff;
  --bt-popup-bg: #f8fafc;
  --bt-border: #e2e8f0;
  --bt-border-hover: #cbd5e1;
  --bt-hover-bg: rgba(139, 92, 246, 0.06);
  --bt-hover-border: rgba(139, 92, 246, 0.15);
  --bt-focus-shadow: rgba(139, 92, 246, 0.12);
  --bt-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
  --bt-popup-blur: blur(20px) saturate(180%);
  --bt-popup-glass-bg: rgba(255, 255, 255, 0.78);
  --bt-popup-glass-border: rgba(255, 255, 255, 0.5);
  --bt-popup-inner-glow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
}
```

### Theme Activation Methods

| Method          | How                                                       |
| --------------- | --------------------------------------------------------- |
| Auto (system)   | No config needed -- uses `prefers-color-scheme`           |
| Data attribute  | `<html data-theme="light">` or `<html data-theme="dark">` |
| CSS class       | `<html class="light">` or `<html class="dark">`           |
| Custom override | Override `--bt-*` variables in any parent element         |

## Exported Utilities

```ts
import {
  DatePicker,
  useDatePickerCalendar,
  formatISO,
  padTime,
  formatDateToken,
  formatDisplayDate,
  formatShortDate,
  useTimePicker,
  getLocale,
  registerLocale,
  getWeekDays,
  getMonthNames,
} from "@bturkis/datepicker";

import type {
  CalendarDay,
  UseTimePickerOptions,
  BtLocale,
} from "@bturkis/datepicker";
```
