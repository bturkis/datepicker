# Interaktive Demos

Alle Beispiele sind **live** -- klicken Sie auf die Schaltflachen.

<script setup>
import { ref } from 'vue'
const isDark = ref(true)
function toggleTheme() { isDark.value = !isDark.value; document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light') }
const singleDate = ref('')
const customDate = ref('')
const rangeStart = ref('')
const rangeEnd = ref('')
const time24 = ref('')
const time12 = ref('')
const datetime = ref('')
const constrainedDate = ref('')
const langDate = ref('')
const currentLang = ref('de')
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

## Theme-Umschalter

<div class="demo-block">
  <button class="lang-btn" @click="toggleTheme" style="margin-bottom: 12px; padding: 8px 16px;">
    {{ isDark ? 'Zu Hell wechseln' : 'Zu Dunkel wechseln' }}
  </button>
  <StitchDatePicker v-model="singleDate" placeholder="Beide Themes testen" lang="de" />
</div>

## Einzeldatum

<div class="demo-block">
  <StitchDatePicker v-model="singleDate" placeholder="Datum wahlen" lang="de" />
  <div v-if="singleDate" class="demo-output">{{ singleDate }}</div>
</div>

```vue
<DatePicker v-model="date" lang="de" />
```

## Benutzerdefiniertes Format

<div class="demo-block">
  <StitchDatePicker v-model="customDate" display-format="DD.MM.YYYY" placeholder="TT.MM.JJJJ" lang="de" />
  <div v-if="customDate" class="demo-output">{{ customDate }}</div>
</div>

## Datumsbereich

<div class="demo-block">
  <StitchDatePicker v-model:range-start="rangeStart" v-model:range-end="rangeEnd" range placeholder="Bereich wahlen" lang="de" />
  <div v-if="rangeStart || rangeEnd" class="demo-output">{{ rangeStart || '—' }} → {{ rangeEnd || '—' }}</div>
</div>

## Uhrzeit -- 24h

<div class="demo-block">
  <StitchDatePicker v-model="time24" type="time" placeholder="Uhrzeit wahlen" lang="de" />
  <div v-if="time24" class="demo-output">{{ time24 }}</div>
</div>

## Datum und Uhrzeit

<div class="demo-block">
  <StitchDatePicker v-model="datetime" type="datetime-local" placeholder="Datum und Uhrzeit" lang="de" />
  <div v-if="datetime" class="demo-output">{{ datetime }}</div>
</div>

## Min / Max Einschrankungen

<div class="demo-block">
  <StitchDatePicker v-model="constrainedDate" min="2026-02-01" max="2026-02-28" placeholder="Nur Februar 2026" lang="de" />
  <div v-if="constrainedDate" class="demo-output">{{ constrainedDate }}</div>
</div>

## Mehrsprachig

<div class="demo-block">
  <div class="demo-row" style="flex-wrap: wrap; margin-bottom: 16px;">
    <button v-for="l in languages" :key="l.code" class="lang-btn" :class="{ 'lang-btn--active': currentLang === l.code }" @click="currentLang = l.code">{{ l.flag }} {{ l.name }}</button>
  </div>
  <StitchDatePicker v-model="langDate" :lang="currentLang" />
  <div v-if="langDate" class="demo-output">{{ langDate }}</div>
</div>
