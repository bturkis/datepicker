# Canli Demolar

Asagidaki tum ornekler **canlidir** -- etkilesim icin dugmelere tiklayin.

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)
function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

const singleDate = ref('')
const customDate = ref('')
const rangeStart = ref('')
const rangeEnd = ref('')
const time24 = ref('')
const time12 = ref('')
const datetime = ref('')
const datetime12 = ref('')
const constrainedDate = ref('')
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

## Tema Degistirici

Acik ve koyu temalar arasinda gecis yapin. Bilesen CSS degiskenleri ile otomatik uyum saglar.

<div class="demo-block">
  <button class="lang-btn" @click="toggleTheme" style="margin-bottom: 12px; padding: 8px 16px;">
    {{ isDark ? 'Acik Temaya Gec' : 'Koyu Temaya Gec' }}
  </button>
  <StitchDatePicker v-model="singleDate" placeholder="Her iki temayi deneyin" lang="tr" />
</div>

## Tekli Tarih

Varsayilan tarih secici, ISO format ciktisi.

<div class="demo-block">
  <StitchDatePicker v-model="singleDate" placeholder="Tarih secin" lang="tr" />
  <div v-if="singleDate" class="demo-output">{{ singleDate }}</div>
</div>

```vue
<DatePicker v-model="date" placeholder="Tarih secin" lang="tr" />
```

## Ozel Format

Gosterim ciktisini kontrol etmek icin `display-format` prop'unu kullanin.

<div class="demo-block">
  <StitchDatePicker v-model="customDate" display-format="DD/MM/YYYY" placeholder="GG/AA/YYYY" lang="tr" />
  <div v-if="customDate" class="demo-output">Model: {{ customDate }}</div>
</div>

```vue
<DatePicker v-model="date" display-format="DD/MM/YYYY" lang="tr" />
```

## Tarih Araligi

`range` prop'u ile aralik secimini etkinlestirin.

<div class="demo-block">
  <StitchDatePicker v-model:range-start="rangeStart" v-model:range-end="rangeEnd" range placeholder="Aralik secin" lang="tr" />
  <div v-if="rangeStart || rangeEnd" class="demo-output">{{ rangeStart || '—' }} → {{ rangeEnd || '—' }}</div>
</div>

```vue
<DatePicker
  v-model:range-start="start"
  v-model:range-end="end"
  range
  lang="tr"
/>
```

## Saat -- 24 Saat

`type="time"` ile bagimsiz saat secici.

<div class="demo-block">
  <StitchDatePicker v-model="time24" type="time" placeholder="Saat secin" lang="tr" />
  <div v-if="time24" class="demo-output">{{ time24 }}</div>
</div>

```vue
<DatePicker v-model="time" type="time" lang="tr" />
```

## Saat -- 12 Saat AM/PM

AM/PM degistirici icin `hour-format="12"` ekleyin.

<div class="demo-block">
  <StitchDatePicker v-model="time12" type="time" hour-format="12" placeholder="Saat secin (AM/PM)" lang="tr" />
  <div v-if="time12" class="demo-output">{{ time12 }}</div>
</div>

```vue
<DatePicker v-model="time" type="time" hour-format="12" lang="tr" />
```

## Tarih ve Saat

`type="datetime-local"` ile tarih ve saati birlestirin.

<div class="demo-block">
  <StitchDatePicker v-model="datetime" type="datetime-local" placeholder="Tarih ve saat secin" lang="tr" />
  <div v-if="datetime" class="demo-output">{{ datetime }}</div>
</div>

```vue
<DatePicker v-model="dt" type="datetime-local" lang="tr" />
```

## Min / Max Kisitlamalar

`min` ve `max` prop'lari ile secilebilir tarihleri sinirlayin.

<div class="demo-block">
  <StitchDatePicker v-model="constrainedDate" min="2026-02-01" max="2026-02-28" placeholder="Sadece Subat 2026" lang="tr" />
  <div v-if="constrainedDate" class="demo-output">{{ constrainedDate }}</div>
</div>

```vue
<DatePicker v-model="date" min="2026-02-01" max="2026-02-28" lang="tr" />
```

## Coklu Dil

15 yerlesik dil arasinda gecis yapin.

<div class="demo-block">
  <div class="demo-block__title">Dil Secin</div>
  <div class="demo-row" style="flex-wrap: wrap; margin-bottom: 16px;">
    <button v-for="l in languages" :key="l.code" class="lang-btn" :class="{ 'lang-btn--active': currentLang === l.code }" @click="currentLang = l.code">
      {{ l.flag }} {{ l.name }}
    </button>
  </div>
  <StitchDatePicker v-model="langDate" :lang="currentLang" :placeholder="currentLang.toUpperCase() + ' dilinde secin'" />
  <div v-if="langDate" class="demo-output">{{ langDate }}</div>
</div>

```vue
<DatePicker v-model="date" :lang="lang" />
```
