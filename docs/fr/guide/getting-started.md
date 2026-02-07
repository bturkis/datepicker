---
outline: deep
---

# Demarrage

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

## Configuration

### Vue 3 -- Enregistrement Global

```ts
import { createApp } from "vue";
import BtDatePicker from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const app = createApp(App);
app.use(BtDatePicker);
app.mount("#app");
```

### Vue 3 -- Import Local

```vue
<script setup lang="ts">
import { ref } from "vue";
import { DatePicker } from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";
const date = ref("");
</script>

<template>
  <DatePicker v-model="date" label="Choisir une date" lang="fr" />
</template>
```

### Nuxt 3 / Nuxt 4

Ajoutez le module a `nuxt.config.ts` :

```ts
export default defineNuxtConfig({
  modules: ["@bturkis/datepicker/nuxt"],
});
```

Le module gere tout automatiquement: injection CSS, enregistrement du composant en **client-only**, compatible Nuxt 3 et Nuxt 4.

## Theme

Le composant est en **theme sombre** par defaut. Le theme clair s'active automatiquement selon la preference systeme ou manuellement :

```html
<html data-theme="light"></html>
```
