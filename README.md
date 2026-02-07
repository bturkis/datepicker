# @bturkis/datepicker

Premium glassmorphism DatePicker component for Vue 3. Supports single date, date range, datetime, and time modes with a dark-mode-first design.

<p align="center">
  <img src="https://raw.githubusercontent.com/bturkis/datepicker/main/docs/hero.png" alt="Stitch Vue DatePicker — Hero" width="700" />
</p>

## ✨ Features

- 🎨 **Glassmorphism Design** — Dark-mode-first with purple gradient accents
- 📅 **Single Date** — Standard date picker with calendar popup
- 📆 **Date Range** — Select start/end dates with visual range highlight and hover preview
- 🕐 **DateTime & Time** — Built-in hour/minute spinners
- 🇹🇷 **Turkish Locale** — Built-in Turkish month/weekday names (`Intl.DateTimeFormat`)
- 📱 **Responsive** — Mobile-first breakpoints (768px / 640px / 400px)
- 🎯 **Zero Dependencies** — Only `vue` as peer dependency (no icon libraries needed)
- 🎛 **CSS Variables** — Full theming via `--sdp-*` custom properties
- ⚡ **Lightweight** — 17KB JS + 7KB CSS (gzipped: ~6.5KB total)

---

## 📸 Screenshots

### Single Date Picker

<p align="center">
  <img src="https://raw.githubusercontent.com/bturkis/datepicker/main/docs/single-date.png" alt="Single Date Picker" width="600" />
</p>

Calendar popup with month/year navigation, Turkish weekdays, "today" highlight, and smooth open/close transitions.

### Date Range Selection

<p align="center">
  <img src="https://raw.githubusercontent.com/bturkis/datepicker/main/docs/range-preview.png" alt="Date Range with Hover Preview" width="600" />
</p>

Range mode: first click sets start (selected with gradient), hover shows preview highlight across days, second click confirms end date.

### Final Result

<p align="center">
  <img src="https://raw.githubusercontent.com/bturkis/datepicker/main/docs/final-state.png" alt="Final State — All Modes" width="600" />
</p>

All modes in action — single date displaying "14 Şubat 2026", range showing "5 Şub 2026 – 2 Mar 2026" with pipe-delimited ISO value.

---

## 📦 Installation

```bash
npm install @bturkis/datepicker
# or
pnpm add @bturkis/datepicker
# or
yarn add @bturkis/datepicker
```

## 🚀 Quick Start

### Global Registration (Plugin)

```ts
// main.ts
import { createApp } from "vue";
import StitchDatePicker from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const app = createApp(App);
app.use(StitchDatePicker); // Registers <StitchDatePicker> globally
app.mount("#app");
```

### Local Import

```vue
<script setup lang="ts">
import { ref } from "vue";
import { DatePicker } from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const date = ref("");
</script>

<template>
  <DatePicker v-model="date" label="Tarih Seçin" />
</template>
```

### Nuxt 3

```vue
<script setup lang="ts">
import { DatePicker } from "@bturkis/datepicker";

const date = ref("");
</script>

<template>
  <DatePicker v-model="date" label="Tarih Seçin" />
</template>
```

Add the CSS to `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  css: ["@bturkis/datepicker/style.css"],
});
```

---

## 📖 Usage Examples

### Single Date

```vue
<DatePicker
  v-model="date"
  label="Düğün Tarihi"
  placeholder="Tarih seçin"
  required
/>
```

**Model value:** `"2026-02-14"` (ISO format `YYYY-MM-DD`)

### Date Range

```vue
<DatePicker
  v-model="dateRange"
  label="Tarih Aralığı"
  range
  range-placeholder="Başlangıç – Bitiş"
/>
```

**Model value:** `"2026-02-01|2026-02-15"` (pipe-delimited ISO dates)

**How it works:**

1. First click → selects start date
2. Hover → shows range preview with highlighted days
3. Second click → selects end date (auto-ordered), popup closes

### DateTime

```vue
<DatePicker v-model="dateTime" label="Etkinlik Zamanı" type="datetime-local" />
```

**Model value:** `"2026-02-14T19:30"` (ISO datetime)

### Time Only

```vue
<DatePicker v-model="time" label="Başlangıç Saati" type="time" />
```

**Model value:** `"19:30"` (HH:mm format)

### Min/Max Constraints

```vue
<DatePicker
  v-model="date"
  min="2026-01-01"
  max="2026-12-31"
  label="2026 içinde seçin"
/>
```

### Custom Display Format

Use the `displayFormat` prop to customize how dates/times are shown in the trigger button:

```vue
<!-- European format -->
<DatePicker v-model="date" display-format="DD/MM/YYYY" />

<!-- US format -->
<DatePicker v-model="date" display-format="MM-DD-YYYY" locale="en-US" />

<!-- Full month name -->
<DatePicker v-model="date" display-format="DD MMMM YYYY" />

<!-- Short month -->
<DatePicker v-model="date" display-format="DD MMM YYYY" />

<!-- DateTime with format -->
<DatePicker
  v-model="dt"
  type="datetime-local"
  display-format="DD/MM/YYYY HH:mm"
/>

<!-- Time only -->
<DatePicker v-model="time" type="time" display-format="HH:mm" />

<!-- Range with custom format -->
<DatePicker v-model="range" range display-format="DD.MM.YYYY" />
<!-- Output: "05.02.2026 – 20.02.2026" -->
```

#### Format Tokens

| Token  | Output         | Example |
| ------ | -------------- | ------- |
| `YYYY` | 4-digit year   | `2026`  |
| `YY`   | 2-digit year   | `26`    |
| `MMMM` | Full month     | `Şubat` |
| `MMM`  | Short month    | `Şub`   |
| `MM`   | 2-digit month  | `02`    |
| `M`    | Month (1-12)   | `2`     |
| `DD`   | 2-digit day    | `07`    |
| `D`    | Day (1-31)     | `7`     |
| `HH`   | 2-digit hour   | `09`    |
| `H`    | Hour (0-23)    | `9`     |
| `mm`   | 2-digit minute | `05`    |
| `m`    | Minute (0-59)  | `5`     |

> **Note:** Month names (`MMMM`, `MMM`) are locale-aware. Use the `locale` prop to change the language (default: `tr-TR`).

### Min/Max Constraints

```vue
<DatePicker
  v-model="date"
  min="2026-01-01"
  max="2026-12-31"
  label="2026 içinde seçin"
/>
```

## 🎛 Props

| Prop               | Type                                   | Default                 | Description                                                  |
| ------------------ | -------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| `modelValue`       | `string`                               | `""`                    | Selected date value (ISO format)                             |
| `label`            | `string`                               | —                       | Label text above trigger                                     |
| `type`             | `"date" \| "datetime-local" \| "time"` | `"date"`                | Picker mode                                                  |
| `displayFormat`    | `string`                               | —                       | Custom display format (e.g. `DD/MM/YYYY`, `HH:mm`)           |
| `locale`           | `string`                               | `"tr-TR"`               | Locale for month names in `MMMM`/`MMM` tokens and Intl dates |
| `range`            | `boolean`                              | `false`                 | Enable date range selection                                  |
| `min`              | `string`                               | —                       | Minimum selectable date (`YYYY-MM-DD`)                       |
| `max`              | `string`                               | —                       | Maximum selectable date (`YYYY-MM-DD`)                       |
| `error`            | `string`                               | —                       | Error message (red border + text)                            |
| `hint`             | `string`                               | —                       | Hint text below trigger                                      |
| `disabled`         | `boolean`                              | `false`                 | Disable the picker                                           |
| `required`         | `boolean`                              | `false`                 | Mark as required                                             |
| `placeholder`      | `string`                               | `"Tarih seçin"`         | Placeholder for empty state                                  |
| `rangePlaceholder` | `string`                               | `"Tarih aralığı seçin"` | Placeholder for empty range                                  |
| `todayLabel`       | `string`                               | `"Bugün"`               | "Today" button text                                          |
| `clearLabel`       | `string`                               | `"Temizle"`             | "Clear" button text                                          |

## 📤 Events

| Event               | Payload  | Description               |
| ------------------- | -------- | ------------------------- |
| `update:modelValue` | `string` | Emitted on date selection |

## 📏 Value Formats

| Mode             | Format                   | Example                    |
| ---------------- | ------------------------ | -------------------------- |
| `date`           | `YYYY-MM-DD`             | `"2026-02-14"`             |
| `date` + `range` | `YYYY-MM-DD\|YYYY-MM-DD` | `"2026-02-01\|2026-02-15"` |
| `datetime-local` | `YYYY-MM-DDTHH:mm`       | `"2026-02-14T19:30"`       |
| `time`           | `HH:mm`                  | `"19:30"`                  |

---

## 🎨 Theming

All colors are configurable via CSS custom properties. Override them in your CSS:

```css
:root {
  /* Core colors */
  --sdp-primary: #8b5cf6;
  --sdp-primary-light: #a78bfa;
  --sdp-secondary: #ec4899;
  --sdp-error: #ef4444;

  /* Text */
  --sdp-text: #f8fafc;
  --sdp-text-secondary: #94a3b8;
  --sdp-text-muted: #64748b;

  /* Backgrounds */
  --sdp-bg: #1e1e2e;
  --sdp-popup-bg: #16161f;
  --sdp-border: #2a2a3d;
  --sdp-border-hover: #3d3d55;

  /* Radii */
  --sdp-radius-sm: 0.375rem;
  --sdp-radius-md: 0.5rem;
  --sdp-radius-lg: 0.75rem;
  --sdp-radius-xl: 1rem;
}
```

### Light Mode Example

```css
.light-theme {
  --sdp-text: #1e293b;
  --sdp-text-secondary: #475569;
  --sdp-text-muted: #94a3b8;
  --sdp-bg: #ffffff;
  --sdp-popup-bg: #f8fafc;
  --sdp-border: #e2e8f0;
  --sdp-border-hover: #cbd5e1;
}
```

---

## 🧩 Composable

The calendar logic is exported as a composable for custom implementations:

```ts
import {
  useDatePickerCalendar,
  monthNames,
  weekDays,
  formatISO,
  padTime,
  formatDateToken,
  formatDisplayDate,
  formatShortDate,
} from "@bturkis/datepicker";

// Format any date with tokens
formatDateToken("2026-02-14", "DD/MM/YYYY"); // "14/02/2026"
formatDateToken("2026-02-14", "DD MMMM YYYY", "en-US"); // "14 February 2026"

const { calendarDays, viewYear, viewMonth, prevMonth, nextMonth } =
  useDatePickerCalendar({ min: minRef, max: maxRef });
```

---

## 🌐 Demo

Open `demo/index.html` or see the [live demo](https://bturkis.github.io/datepicker/).

---

## 📝 License

MIT © [bturkis](https://github.com/bturkis)
