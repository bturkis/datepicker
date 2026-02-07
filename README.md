# @bturkis/datepicker

> **📖 [Full Documentation & Live Demos](https://bturkis.github.io/datepicker/)** — Available in 15 languages

Premium glassmorphism DatePicker component for Vue 3, Nuxt 3, and Nuxt 4. Supports single date, date range, datetime, and time modes with built-in light/dark theming and SSR support.

## Features

- Glassmorphism design with purple gradient accents
- Single date, date range, datetime, and time-only modes
- Light / dark theme via CSS variables (auto-detects system preference)
- SSR-safe -- works with Nuxt 3, Nuxt 4, and any SSR setup
- 15 built-in languages (Turkish, English, German, French, Spanish, and more)
- Mobile bottom sheet with responsive breakpoints
- Custom display format tokens (`DD/MM/YYYY`, `MMMM`, etc.)
- 12h/24h hour format with minute stepping
- Min/max date constraints
- Zero runtime dependencies -- only `vue` as peer dependency
- Lightweight: ~17KB JS + ~7KB CSS (gzipped: ~6.5KB total)

---

## Installation

```bash
npm install @bturkis/datepicker
```

## Quick Start

### Vue 3 -- Global Registration

```ts
// main.ts
import { createApp } from "vue";
import StitchDatePicker from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const app = createApp(App);
app.use(StitchDatePicker);
app.mount("#app");
```

### Vue 3 -- Local Import

```vue
<script setup lang="ts">
import { ref } from "vue";
import { DatePicker } from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const date = ref("");
</script>

<template>
  <DatePicker v-model="date" label="Select Date" />
</template>
```

### Nuxt 3 / Nuxt 4

Add the module to `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["@bturkis/datepicker/nuxt"],
});
```

The module auto-registers `<StitchDatePicker>` and `<DatePicker>` as client-only components, and injects the CSS. No additional imports needed:

```vue
<template>
  <DatePicker v-model="date" label="Select Date" lang="en" />
</template>
```

> The component uses `<Teleport>` and DOM APIs internally. In Nuxt, the module registers it as `mode: "client"` automatically.

---

## Theming

The component ships with a dark theme by default. Light theme activates automatically based on system preference, or you can force it:

### Auto (System Preference)

No configuration needed. The CSS includes `@media (prefers-color-scheme: light)` rules.

### Manual Toggle

```html
<!-- Dark (default) -->
<html data-theme="dark">
  <!-- Light -->
  <html data-theme="light">
    <!-- Or use classes -->
    <html class="light"></html>
  </html>
</html>
```

### CSS Variables

Override any variable in your CSS:

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

  /* Interactive */
  --sdp-hover-bg: rgba(139, 92, 246, 0.1);
  --sdp-hover-border: rgba(139, 92, 246, 0.2);
  --sdp-focus-shadow: rgba(139, 92, 246, 0.15);
  --sdp-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);

  /* Radii */
  --sdp-radius-sm: 0.375rem;
  --sdp-radius-md: 0.5rem;
  --sdp-radius-lg: 0.75rem;
  --sdp-radius-xl: 1rem;
}
```

---

## Usage Examples

### Single Date

```vue
<DatePicker
  v-model="date"
  label="Wedding Date"
  placeholder="Pick a date"
  required
/>
```

Model value: `"2026-02-14"` (ISO `YYYY-MM-DD`)

### Date Range

```vue
<DatePicker
  v-model="dateRange"
  label="Date Range"
  range
  range-placeholder="Start - End"
/>
```

Model value: `"2026-02-01|2026-02-15"` (pipe-delimited ISO dates)

### DateTime

```vue
<DatePicker v-model="dateTime" label="Event Time" type="datetime-local" />
```

Model value: `"2026-02-14T19:30"` (ISO datetime)

### Time Only

```vue
<DatePicker v-model="time" label="Start Time" type="time" hour-format="12" />
```

Model value: `"19:30"` (HH:mm format)

### Custom Display Format

```vue
<DatePicker v-model="date" display-format="DD/MM/YYYY" />
<DatePicker v-model="date" display-format="DD MMMM YYYY" lang="en" />
```

### Multi-Language

```vue
<DatePicker v-model="date" lang="de" />
<DatePicker v-model="date" lang="ja" />
```

Built-in: `tr`, `en`, `de`, `fr`, `es`, `it`, `pt`, `nl`, `ru`, `ar`, `ja`, `ko`, `zh`, `pl`, `uk`

---

## Props

| Prop               | Type                                   | Default  | Description                        |
| ------------------ | -------------------------------------- | -------- | ---------------------------------- |
| `modelValue`       | `string`                               | `""`     | Selected value (ISO format)        |
| `label`            | `string`                               | --       | Label text                         |
| `type`             | `"date" \| "datetime-local" \| "time"` | `"date"` | Picker mode                        |
| `displayFormat`    | `string`                               | --       | Custom format (`DD/MM/YYYY`, etc.) |
| `lang`             | `string`                               | `"tr"`   | UI language code                   |
| `locale`           | `string`                               | --       | Intl locale for month names        |
| `range`            | `boolean`                              | `false`  | Enable range selection             |
| `min`              | `string`                               | --       | Min date (`YYYY-MM-DD`)            |
| `max`              | `string`                               | --       | Max date (`YYYY-MM-DD`)            |
| `hourFormat`       | `"12" \| "24"`                         | `"24"`   | Hour display format                |
| `minuteStep`       | `number`                               | `1`      | Minute step (1, 5, 15, 30)         |
| `error`            | `string`                               | --       | Error message                      |
| `hint`             | `string`                               | --       | Hint text                          |
| `disabled`         | `boolean`                              | `false`  | Disable picker                     |
| `required`         | `boolean`                              | `false`  | Mark required                      |
| `placeholder`      | `string`                               | --       | Empty state text                   |
| `rangePlaceholder` | `string`                               | --       | Range empty state text             |

## Events

| Event               | Payload  | Description          |
| ------------------- | -------- | -------------------- |
| `update:modelValue` | `string` | Emitted on selection |

## Format Tokens

| Token  | Output         | Example    |
| ------ | -------------- | ---------- |
| `YYYY` | 4-digit year   | `2026`     |
| `YY`   | 2-digit year   | `26`       |
| `MMMM` | Full month     | `February` |
| `MMM`  | Short month    | `Feb`      |
| `MM`   | 2-digit month  | `02`       |
| `DD`   | 2-digit day    | `07`       |
| `HH`   | 2-digit hour   | `09`       |
| `mm`   | 2-digit minute | `05`       |

---

## Composable

```ts
import {
  useDatePickerCalendar,
  formatISO,
  padTime,
  formatDateToken,
  formatDisplayDate,
  getLocale,
  registerLocale,
} from "@bturkis/datepicker";
```

---

## Documentation

Full interactive docs: [https://bturkis.github.io/datepicker/](https://bturkis.github.io/datepicker/)

## License

MIT
