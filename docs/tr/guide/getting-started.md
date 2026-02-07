---
outline: deep
---

# Baslangic

## Kurulum

```bash
npm install @bturkis/datepicker
# veya
pnpm add @bturkis/datepicker
# veya
yarn add @bturkis/datepicker
# veya
bun add @bturkis/datepicker
```

## Kurulum Yontemleri

### Vue 3 -- Global Kayit

```ts
// main.ts
import { createApp } from "vue";
import StitchDatePicker from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const app = createApp(App);
app.use(StitchDatePicker);
app.mount("#app");
```

### Vue 3 -- Yerel Import

```vue
<script setup lang="ts">
import { ref } from "vue";
import { DatePicker } from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const date = ref("");
</script>

<template>
  <DatePicker v-model="date" label="Tarih Secin" />
</template>
```

### Nuxt 3 / Nuxt 4

`nuxt.config.ts` dosyaniza modulu ekleyin:

```ts
export default defineNuxtConfig({
  modules: ["@bturkis/datepicker/nuxt"],
});
```

Modul her seyi otomatik olarak yapar:

- Bilesen CSS'ini enjekte eder
- `<StitchDatePicker>` ve `<DatePicker>` bilesenlerini **client-only** olarak kaydeder
- Nuxt 3 ve Nuxt 4 ile calisir

Sayfa veya bilesenlerinizde ek import gerekmez:

```vue
<template>
  <DatePicker v-model="date" label="Tarih Secin" lang="tr" />
</template>
```

::: tip SSR Notu
Bilesen dahili olarak `<Teleport>` ve tarayici DOM API'lerini kullanir. Nuxt modulu bunu otomatik olarak `mode: "client"` ile kaydeder. Modulsuz kullaniyorsaniz `<ClientOnly>` ile sarin:

```vue
<ClientOnly>
  <DatePicker v-model="date" />
</ClientOnly>
```

:::

## Tema

Bilesen varsayilan olarak **koyu tema** ile gelir. Acik tema sistem tercihine gore otomatik etkinlesir veya manuel kontrol edebilirsiniz.

### Otomatik (Sistem Tercihi)

Yapilandirma gerekmez. CSS `@media (prefers-color-scheme: light)` kurallarini icerir.

### Manuel Degisim

```html
<!-- Koyu tema (varsayilan) -->
<html data-theme="dark">
  <!-- Acik tema -->
  <html data-theme="light">
    <!-- Veya sinif kullanin -->
    <html class="light"></html>
  </html>
</html>
```

Tum CSS degiskenleri icin [Tema Rehberi](/tr/api/props#css-degiskenleri) sayfasina bakin.

## Temel Demo

<script setup>
import { ref } from 'vue'
const date = ref('')
</script>

<div class="demo-block">
  <StitchDatePicker v-model="date" label="Deneyin" placeholder="Tarih secin" lang="tr" />
  <p v-if="date" style="margin-top: 8px; font-size: 0.875rem; opacity: 0.7;">
    Deger: <code>{{ date }}</code>
  </p>
</div>
