# Demos Interativos

<script setup>
import { ref } from 'vue'
const isDark = ref(true)
function toggleTheme() { isDark.value = !isDark.value; document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light') }
const singleDate = ref('')
const rangeStart = ref('')
const rangeEnd = ref('')
const time24 = ref('')
const datetime = ref('')
const langDate = ref('')
const currentLang = ref('pt')
const languages = [
  { code: 'tr', flag: '🇹🇷', name: 'Turkce' }, { code: 'en', flag: '🇬🇧', name: 'English' }, { code: 'de', flag: '🇩🇪', name: 'Deutsch' }, { code: 'fr', flag: '🇫🇷', name: 'Francais' }, { code: 'es', flag: '🇪🇸', name: 'Espanol' }, { code: 'it', flag: '🇮🇹', name: 'Italiano' }, { code: 'ja', flag: '🇯🇵', name: '日本語' }, { code: 'zh', flag: '🇨🇳', name: '中文' }, { code: 'ko', flag: '🇰🇷', name: '한국어' }, { code: 'ru', flag: '🇷🇺', name: 'Русский' }, { code: 'ar', flag: '🇸🇦', name: 'العربية' }, { code: 'pt', flag: '🇧🇷', name: 'Portugues' }, { code: 'nl', flag: '🇳🇱', name: 'Nederlands' }, { code: 'pl', flag: '🇵🇱', name: 'Polski' }, { code: 'uk', flag: '🇺🇦', name: 'Українська' },
]
</script>

## Troca de Tema

<div class="demo-block">
  <button class="lang-btn" @click="toggleTheme" style="margin-bottom: 12px; padding: 8px 16px;">{{ isDark ? 'Mudar para Claro' : 'Mudar para Escuro' }}</button>
  <StitchDatePicker v-model="singleDate" placeholder="Testar ambos temas" lang="pt" />
</div>

## Data Simples

<div class="demo-block">
  <StitchDatePicker v-model="singleDate" placeholder="Selecionar data" lang="pt" />
  <div v-if="singleDate" class="demo-output">{{ singleDate }}</div>
</div>

## Intervalo de Datas

<div class="demo-block">
  <StitchDatePicker v-model:range-start="rangeStart" v-model:range-end="rangeEnd" range placeholder="Selecionar intervalo" lang="pt" />
  <div v-if="rangeStart || rangeEnd" class="demo-output">{{ rangeStart || '—' }} → {{ rangeEnd || '—' }}</div>
</div>

## Hora

<div class="demo-block">
  <StitchDatePicker v-model="time24" type="time" placeholder="Selecionar hora" lang="pt" />
  <div v-if="time24" class="demo-output">{{ time24 }}</div>
</div>

## Multilingue

<div class="demo-block">
  <div class="demo-row" style="flex-wrap: wrap; margin-bottom: 16px;">
    <button v-for="l in languages" :key="l.code" class="lang-btn" :class="{ 'lang-btn--active': currentLang === l.code }" @click="currentLang = l.code">{{ l.flag }} {{ l.name }}</button>
  </div>
  <StitchDatePicker v-model="langDate" :lang="currentLang" />
  <div v-if="langDate" class="demo-output">{{ langDate }}</div>
</div>
