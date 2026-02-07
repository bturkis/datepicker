---
outline: deep
---

# Getting Started

## Installation

```bash
npm install @bturkis/datepicker
# or
pnpm add @bturkis/datepicker
# or
yarn add @bturkis/datepicker
```

## Setup

### Vue 3 -- Global Registration

```ts
// main.ts
import { createApp } from "vue";
import StitchDatePicker from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const app = createApp(App);
app.use(StitchDatePicker); // Registers <StitchDatePicker> globally
app.mount("#app");
```

### Vue 3 -- Local Import

```vue
<script setup lang="ts">
import { ref } from "vue";
import { DatePicker } from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";

const date = ref("");
</script>

<template>
  <DatePicker v-model="date" label="Select Date" />
</template>
```

### Nuxt 3 / Nuxt 4

Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["@bturkis/datepicker/nuxt"],
});
```

The module handles everything automatically:

- Injects the component CSS
- Registers `<StitchDatePicker>` and `<DatePicker>` as **client-only** components
- Works with both Nuxt 3 and Nuxt 4

No additional imports needed in your pages or components:

```vue
<template>
  <DatePicker v-model="date" label="Select Date" lang="en" />
</template>
```

::: tip SSR Note
The component uses `<Teleport>` and browser DOM APIs internally. The Nuxt module registers it with `mode: "client"` automatically. If you use the component without the module, wrap it in `<ClientOnly>`:

```vue
<ClientOnly>
  <DatePicker v-model="date" />
</ClientOnly>
```

:::

## Theming

The component ships with a **dark theme** by default. Light theme activates based on system preference, or you can control it manually.

### Auto (System Preference)

No configuration needed. The CSS uses `@media (prefers-color-scheme: light)`.

### Manual Toggle

```html
<!-- Force dark -->
<html data-theme="dark">
  <!-- Force light -->
  <html data-theme="light">
    <!-- Or use classes -->
    <html class="light"></html>
  </html>
</html>
```

See the [Theming Guide](/api/props#css-variables) for all available CSS variables.

## Basic Demo

<script setup>
import { ref } from 'vue'
const date = ref('')
</script>

<div class="demo-block">
  <StitchDatePicker v-model="date" label="Try it" placeholder="Pick a date" />
  <p v-if="date" style="margin-top: 8px; font-size: 0.875rem; opacity: 0.7;">
    Value: <code>{{ date }}</code>
  </p>
</div>
