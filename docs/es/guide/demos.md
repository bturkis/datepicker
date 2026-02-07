# Demos Interactivos

<script setup>
import { ref } from 'vue'
const isDark = ref(true)
function toggleTheme() { isDark.value = !isDark.value; document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light') }
const singleDate = ref('')
const customDate = ref('')
const rangeStart = ref('')
const rangeEnd = ref('')
const time24 = ref('')
const datetime = ref('')
const constrainedDate = ref('')
const langDate = ref('')
const currentLang = ref('es')
const languages = [
  { code: 'tr', flag: '🇹🇷', name: 'Turkce' }, { code: 'en', flag: '🇬🇧', name: 'English' }, { code: 'de', flag: '🇩🇪', name: 'Deutsch' }, { code: 'fr', flag: '🇫🇷', name: 'Francais' }, { code: 'es', flag: '🇪🇸', name: 'Espanol' }, { code: 'it', flag: '🇮🇹', name: 'Italiano' }, { code: 'ja', flag: '🇯🇵', name: '日本語' }, { code: 'zh', flag: '🇨🇳', name: '中文' }, { code: 'ko', flag: '🇰🇷', name: '한국어' }, { code: 'ru', flag: '🇷🇺', name: 'Русский' }, { code: 'ar', flag: '🇸🇦', name: 'العربية' }, { code: 'pt', flag: '🇧🇷', name: 'Portugues' }, { code: 'nl', flag: '🇳🇱', name: 'Nederlands' }, { code: 'pl', flag: '🇵🇱', name: 'Polski' }, { code: 'uk', flag: '🇺🇦', name: 'Українська' },
]
</script>

## Cambio de Tema

<div class="demo-block">
  <button class="lang-btn" @click="toggleTheme" style="margin-bottom: 12px; padding: 8px 16px;">{{ isDark ? 'Cambiar a Claro' : 'Cambiar a Oscuro' }}</button>
  <StitchDatePicker v-model="singleDate" placeholder="Probar ambos temas" lang="es" />
</div>

## Fecha Simple

<div class="demo-block">
  <StitchDatePicker v-model="singleDate" placeholder="Seleccionar fecha" lang="es" />
  <div v-if="singleDate" class="demo-output">{{ singleDate }}</div>
</div>

## Rango de Fechas

<div class="demo-block">
  <StitchDatePicker v-model:range-start="rangeStart" v-model:range-end="rangeEnd" range placeholder="Seleccionar rango" lang="es" />
  <div v-if="rangeStart || rangeEnd" class="demo-output">{{ rangeStart || '—' }} → {{ rangeEnd || '—' }}</div>
</div>

## Hora

<div class="demo-block">
  <StitchDatePicker v-model="time24" type="time" placeholder="Seleccionar hora" lang="es" />
  <div v-if="time24" class="demo-output">{{ time24 }}</div>
</div>

## Fecha y Hora

<div class="demo-block">
  <StitchDatePicker v-model="datetime" type="datetime-local" placeholder="Fecha y hora" lang="es" />
  <div v-if="datetime" class="demo-output">{{ datetime }}</div>
</div>

## Multilenguaje

<div class="demo-block">
  <div class="demo-row" style="flex-wrap: wrap; margin-bottom: 16px;">
    <button v-for="l in languages" :key="l.code" class="lang-btn" :class="{ 'lang-btn--active': currentLang === l.code }" @click="currentLang = l.code">{{ l.flag }} {{ l.name }}</button>
  </div>
  <StitchDatePicker v-model="langDate" :lang="currentLang" />
  <div v-if="langDate" class="demo-output">{{ langDate }}</div>
</div>
