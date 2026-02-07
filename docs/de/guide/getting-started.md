---
outline: deep
---

# Erste Schritte

## Installation

```bash
npm install @bturkis/datepicker
# or
pnpm add @bturkis/datepicker
# or
yarn add @bturkis/datepicker
# or
bun add @bturkis/datepicker
```

## Einrichtung

### Vue 3 -- Globale Registrierung

```ts
import { createApp } from "vue";
import BtDatePicker from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const app = createApp(App);
app.use(BtDatePicker);
app.mount("#app");
```

### Vue 3 -- Lokaler Import

```vue
<script setup lang="ts">
import { ref } from "vue";
import { DatePicker } from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const date = ref("");
</script>

<template>
  <DatePicker v-model="date" label="Datum wahlen" lang="de" />
</template>
```

### Nuxt 3 / Nuxt 4

Fugen Sie das Modul zu `nuxt.config.ts` hinzu:

```ts
export default defineNuxtConfig({
  modules: ["@bturkis/datepicker/nuxt"],
});
```

Das Modul erledigt alles automatisch:

- Injiziert das Komponenten-CSS
- Registriert `<BtDatePicker>` und `<DatePicker>` als **client-only** Komponenten
- Funktioniert mit Nuxt 3 und Nuxt 4

Keine zusatzlichen Imports in Ihren Seiten erforderlich:

```vue
<template>
  <DatePicker v-model="date" label="Datum wahlen" lang="de" />
</template>
```

## Theming

Die Komponente wird standardmassig mit einem **dunklen Theme** geliefert. Das helle Theme wird automatisch basierend auf der Systemeinstellung aktiviert.

### Manuelles Umschalten

```html
<html data-theme="light">
  <html data-theme="dark">
    <html class="light"></html>
  </html>
</html>
```

Alle CSS-Variablen finden Sie im [API-Referenz](/de/api/props).
