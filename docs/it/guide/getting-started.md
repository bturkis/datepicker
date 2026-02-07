---
outline: deep
---

# Primi Passi

## Installazione

```bash
npm install @bturkis/datepicker
```

## Configurazione

### Vue 3 -- Registrazione Globale

```ts
import { createApp } from "vue";
import StitchDatePicker from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";
const app = createApp(App);
app.use(StitchDatePicker);
app.mount("#app");
```

### Nuxt 3 / Nuxt 4

```ts
export default defineNuxtConfig({
  modules: ["@bturkis/datepicker/nuxt"],
});
```

Il modulo gestisce tutto automaticamente: iniezione CSS, registrazione del componente in **client-only**.

## Tema

Il componente viene con **tema scuro** di default. Il tema chiaro si attiva automaticamente o manualmente:

```html
<html data-theme="light"></html>
```
