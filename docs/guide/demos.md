# Interactive Demos

All examples below are **live** -- click the trigger buttons to interact.

<script setup>
import { ref, onMounted } from 'vue'

// Theme
const isDark = ref(true)
function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

// Single date
const singleDate = ref('')
const customDate = ref('')

// Range
const rangeStart = ref('')
const rangeEnd = ref('')

// Time
const time24 = ref('')
const time12 = ref('')

// DateTime
const datetime = ref('')
const datetime12 = ref('')

// Min/Max
const constrainedDate = ref('')

// Language
const langDate = ref('')
const currentLang = ref('tr')
const languages = [
  { code: 'tr', flag: '🇹🇷', name: 'Turkce' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'fr', flag: '🇫🇷', name: 'Francais' },
  { code: 'es', flag: '🇪🇸', name: 'Espanol' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
  { code: 'zh', flag: '🇨🇳', name: '中文' },
  { code: 'ko', flag: '🇰🇷', name: '한국어' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  { code: 'ar', flag: '🇸🇦', name: 'العربية' },
  { code: 'pt', flag: '🇧🇷', name: 'Portugues' },
  { code: 'nl', flag: '🇳🇱', name: 'Nederlands' },
  { code: 'pl', flag: '🇵🇱', name: 'Polski' },
  { code: 'uk', flag: '🇺🇦', name: 'Українська' },
]
</script>

## Theme Switcher

Toggle between light and dark themes. The component auto-adapts via CSS variables.

<div class="demo-block">
  <button class="lang-btn" @click="toggleTheme" style="margin-bottom: 12px; padding: 8px 16px;">
    {{ isDark ? 'Switch to Light' : 'Switch to Dark' }}
  </button>
  <BtDatePicker v-model="singleDate" placeholder="Try both themes" />
</div>

```html
<!-- Force light theme -->
<html data-theme="light">
  <!-- Force dark theme -->
  <html data-theme="dark">
    <!-- Or use classes -->
    <html class="light"></html>
  </html>
</html>
```

## 📅 Single Date

Default date picker with ISO format output.

<div class="demo-block">
  <BtDatePicker v-model="singleDate" placeholder="Pick a date" />
  <div v-if="singleDate" class="demo-output">{{ singleDate }}</div>
</div>

```vue
<DatePicker v-model="date" placeholder="Pick a date" />
```

## 📅 Custom Format

Use the `format` prop to control display output.

<div class="demo-block">
  <BtDatePicker
    v-model="customDate"
    format="DD/MM/YYYY"
    placeholder="DD/MM/YYYY"
  />
  <div v-if="customDate" class="demo-output">
    Model: {{ customDate }}
  </div>
</div>

```vue
<DatePicker v-model="date" format="DD/MM/YYYY" />
```

::: info Available format tokens
`YYYY` (year), `MM` (month), `DD` (day), `HH` (hour), `mm` (minute), `MMMM` (full month name), `MMM` (short month name), `dddd` (weekday), `ddd` (short weekday)
:::

## 📅 Date Range

Enable range selection with the `range` prop.

<div class="demo-block">
  <BtDatePicker
    v-model:range-start="rangeStart"
    v-model:range-end="rangeEnd"
    range
    placeholder="Select range"
  />
  <div v-if="rangeStart || rangeEnd" class="demo-output">
    {{ rangeStart || '—' }} → {{ rangeEnd || '—' }}
  </div>
</div>

```vue
<DatePicker v-model:range-start="start" v-model:range-end="end" range />
```

## ⏰ Time Only — 24h

Set `type="time"` for a standalone time picker.

<div class="demo-block">
  <BtDatePicker
    v-model="time24"
    type="time"
    placeholder="Select time"
  />
  <div v-if="time24" class="demo-output">{{ time24 }}</div>
</div>

```vue
<DatePicker v-model="time" type="time" />
```

## 🕐 Time Only — 12h AM/PM

Add `hour-format="12"` for AM/PM toggle.

<div class="demo-block">
  <BtDatePicker
    v-model="time12"
    type="time"
    hour-format="12"
    placeholder="Select time (AM/PM)"
  />
  <div v-if="time12" class="demo-output">{{ time12 }}</div>
</div>

```vue
<DatePicker v-model="time" type="time" hour-format="12" />
```

## 📅⏰ DateTime

Combine date and time with `type="datetime-local"`.

<div class="demo-block">
  <BtDatePicker
    v-model="datetime"
    type="datetime-local"
    placeholder="Pick date & time"
  />
  <div v-if="datetime" class="demo-output">{{ datetime }}</div>
</div>

```vue
<DatePicker v-model="dt" type="datetime-local" />
```

## 📅⏰ DateTime — 12h

DateTime with 12-hour format.

<div class="demo-block">
  <BtDatePicker
    v-model="datetime12"
    type="datetime-local"
    hour-format="12"
    placeholder="Pick date & time (12h)"
  />
  <div v-if="datetime12" class="demo-output">{{ datetime12 }}</div>
</div>

```vue
<DatePicker v-model="dt" type="datetime-local" hour-format="12" />
```

## 🔒 Min / Max Constraints

Limit selectable dates with `min` and `max` props.

<div class="demo-block">
  <BtDatePicker
    v-model="constrainedDate"
    min="2026-02-01"
    max="2026-02-28"
    placeholder="Feb 2026 only"
  />
  <div v-if="constrainedDate" class="demo-output">{{ constrainedDate }}</div>
</div>

```vue
<DatePicker v-model="date" min="2026-02-01" max="2026-02-28" />
```

## 🌍 Multi-Language

Switch between 15 built-in languages. The calendar, placeholders, and button labels update instantly.

<div class="demo-block">
  <div class="demo-block__title">Select Language</div>
  <div class="demo-row" style="flex-wrap: wrap; margin-bottom: 16px;">
    <button
      v-for="l in languages"
      :key="l.code"
      class="lang-btn"
      :class="{ 'lang-btn--active': currentLang === l.code }"
      @click="currentLang = l.code"
    >
      {{ l.flag }} {{ l.name }}
    </button>
  </div>
  <BtDatePicker
    v-model="langDate"
    :lang="currentLang"
    :placeholder="'Select in ' + currentLang.toUpperCase()"
  />
  <div v-if="langDate" class="demo-output">{{ langDate }}</div>
</div>

```vue
<script setup>
const lang = ref("tr");
const date = ref("");
</script>

<template>
  <DatePicker v-model="date" :lang="lang" />
</template>
```
