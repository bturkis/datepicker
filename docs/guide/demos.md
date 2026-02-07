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

// Disabled Dates
const disabledDate = ref('')
const disabledList = ['2026-02-14', '2026-02-15', '2026-02-21', '2026-02-22']

// Marked Dates
const markedDate = ref('')
const markedDateSlot = ref('')
const marks = [
  { date: '2026-02-07', color: '#8b5cf6', tooltip: 'Bugün' },
  { date: '2026-02-14', color: '#ec4899', tooltip: 'Sevgililer Günü ❤️' },
  { date: '2026-02-14', color: '#f59e0b', tooltip: 'Hediye al 🎁' },
  { date: '2026-02-23', color: '#10b981', tooltip: 'Toplantı' },
  { date: '2026-02-28', tooltip: 'Son gün' },
]
const richMarks = [
  { date: '2026-02-07', color: '#8b5cf6', tooltip: 'Sprint Review', description: 'Ekip sunumu — 14:00', badge: 'Bugün' },
  { date: '2026-02-14', color: '#ec4899', tooltip: 'Sevgililer Günü ❤️', description: 'Restoran rezervasyonu', badge: 'Özel' },
  { date: '2026-02-14', color: '#f59e0b', tooltip: 'Hediye al 🎁', description: 'Kargo son gün', badge: 'Acil' },
  { date: '2026-02-23', color: '#10b981', tooltip: 'Proje Teslimi', description: 'v2.0 final build', badge: 'İş' },
  { date: '2026-02-28', color: '#6366f1', tooltip: 'Ay Sonu Raporu', description: 'Finans → yönetime', badge: 'Rutin' },
]

// Language
const langDate = ref('')
const footerDate = ref('')
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

## 🚫 Disabled Dates

Disable specific dates using an array of ISO strings or a predicate function.

<div class="demo-block">
  <BtDatePicker
    v-model="disabledDate"
    :disabled-dates="disabledList"
    placeholder="Some dates disabled"
  />
  <div v-if="disabledDate" class="demo-output">{{ disabledDate }}</div>
</div>

Dates `2026-02-14`, `15`, `21`, `22` are disabled:

```vue
<DatePicker
  v-model="date"
  :disabled-dates="['2026-02-14', '2026-02-15', '2026-02-21', '2026-02-22']"
/>

<!-- Or disable weekends with a function -->
<DatePicker
  v-model="date"
  :disabled-dates="(d) => d.getDay() === 0 || d.getDay() === 6"
/>
```

## 📌 Marked Dates

Mark specific dates with colored dot indicators and optional tooltips. A single day can have **multiple marks** — dots are displayed side-by-side.

<div class="demo-block">
  <BtDatePicker
    v-model="markedDate"
    :marked-dates="marks"
    placeholder="Hover marked dates"
  />
  <div v-if="markedDate" class="demo-output">{{ markedDate }}</div>
</div>

```vue
<DatePicker
  v-model="date"
  :marked-dates="[
    { date: '2026-02-14', color: '#ec4899', tooltip: 'Sevgililer Günü ❤️' },
    { date: '2026-02-14', color: '#f59e0b', tooltip: 'Hediye al 🎁' },
    { date: '2026-02-23', color: '#10b981', tooltip: 'Toplantı' },
    { date: '2026-02-28', tooltip: 'Son gün' },
  ]"
/>
```

::: tip Multi-Mark
The same date can have multiple marks. Dots display side-by-side and tooltips are combined with line breaks.
:::

## 🎯 Custom Tooltip

Use the `#mark-tooltip` scoped slot for **complete control** over tooltip content — any HTML, layout, or component you want.

<div class="demo-block">
  <BtDatePicker
    v-model="markedDateSlot"
    :marked-dates="richMarks"
    placeholder="✨ Hover marked dates for rich tooltips"
    style="--bt-tooltip-max-width: 320px; --bt-tooltip-padding: 0; --bt-tooltip-radius: 12px; --bt-tooltip-bg: linear-gradient(135deg, #1a1a2e, #16213e);"
  >
    <template #mark-tooltip="{ marks: dayMarks, day }">
      <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 8px 14px; border-radius: 12px 12px 0 0; color: white; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.5px;">
        📅 {{ day }}
      </div>
      <div style="padding: 10px 14px;">
        <div v-for="(m, i) in dayMarks" :key="i" style="display: flex; align-items: flex-start; gap: 10px; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
          <span :style="{
            background: m.color || '#8b5cf6',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            display: 'inline-block',
            flexShrink: 0,
            marginTop: '2px',
            boxShadow: '0 0 8px ' + (m.color || '#8b5cf6') + ', 0 0 16px ' + (m.color || '#8b5cf6') + '44'
          }" />
          <div style="flex: 1;">
            <div style="font-weight: 700; font-size: 0.8rem; color: #f1f5f9;">{{ m.tooltip }}</div>
            <div v-if="m.description" style="font-size: 0.7rem; color: #94a3b8; margin-top: 2px;">{{ m.description }}</div>
          </div>
          <span v-if="m.badge" :style="{ background: m.color || '#8b5cf6', color: 'white', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '6px', fontWeight: 700, whiteSpace: 'nowrap' }">{{ m.badge }}</span>
        </div>
      </div>
    </template>
  </BtDatePicker>
  <div v-if="markedDateSlot" class="demo-output">{{ markedDateSlot }}</div>
</div>

```vue
<DatePicker
  v-model="date"
  :marked-dates="marks"
  style="
    --bt-tooltip-max-width: 320px;
    --bt-tooltip-padding: 0;
    --bt-tooltip-radius: 12px;
  "
>
  <template #mark-tooltip="{ marks, day }">
    <!-- Gradient Header -->
    <div style="background: linear-gradient(135deg, #667eea, #764ba2);
      padding: 8px 14px; border-radius: 12px 12px 0 0;
      color: white; font-weight: 700;">
      📅 {{ day }}
    </div>

    <!-- Entries -->
    <div style="padding: 10px 14px;">
      <div v-for="m in marks" :key="m.date"
        style="display: flex; gap: 10px; padding: 6px 0;">
        <span :style="{
          background: m.color,
          width: '12px', height: '12px',
          borderRadius: '50%',
          boxShadow: '0 0 8px ' + m.color
        }" />
        <div>
          <div style="font-weight: 700;">{{ m.tooltip }}</div>
          <div style="font-size: 0.7rem; color: #94a3b8;">
            {{ m.description }}
          </div>
        </div>
        <span :style="{
          background: m.color,
          color: 'white',
          fontSize: '0.6rem',
          padding: '2px 6px',
          borderRadius: '6px'
        }">{{ m.badge }}</span>
      </div>
    </div>
  </template>
</DatePicker>
```

::: tip Full Freedom
The slot gives you complete control — use any HTML, component, image, or layout. Combine with `--bt-tooltip-max-width` and `--bt-tooltip-padding: 0` for edge-to-edge header designs.
:::

### Tooltip CSS Customization

Tooltip appearance can be fully controlled with CSS custom properties, including **width**:

```css
.my-datepicker {
  /* Colors */
  --bt-tooltip-bg: #1e293b;
  --bt-tooltip-color: #f8fafc;

  /* Typography */
  --bt-tooltip-font-size: 0.875rem;

  /* Spacing */
  --bt-tooltip-padding: 10px 16px;
  --bt-tooltip-radius: 10px;

  /* Width Control */
  --bt-tooltip-width: auto; /* exact width */
  --bt-tooltip-min-width: 120px; /* minimum width */
  --bt-tooltip-max-width: 300px; /* maximum width */
}
```

## 🦶 Footer Slots

Customize the footer area around the "Bugün" (Today) and "Temizle" (Clear) buttons:

<div class="demo-block">
  <BtDatePicker
    v-model="footerDate"
    placeholder="Footer slot demo"
  >
    <template #footer-prepend>
      <span style="font-size: 0.7rem; opacity: 0.6; margin-right: auto;">⚡ Hızlı seçim</span>
    </template>
    <template #footer-append>
      <button type="button" class="bt-today-btn" style="font-size: 0.65rem; opacity: 0.8;" @click="footerDate = '2026-01-01'">
        📆 Yılbaşı
      </button>
    </template>
  </BtDatePicker>
  <div v-if="footerDate" class="demo-output">{{ footerDate }}</div>
</div>

```vue
<DatePicker v-model="date">
  <template #footer-prepend>
    <span style="font-size: 0.7rem; opacity: 0.6;">⚡ Quick select</span>
  </template>
  <template #footer-append>
    <button type="button" class="bt-today-btn" @click="date = '2026-01-01'">
      📆 New Year
    </button>
  </template>
</DatePicker>
```

::: tip
`#footer-prepend` renders **before** the Today button. `#footer-append` renders **after** the Clear button. Use them to add quick shortcuts, labels, or custom actions.
:::

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
