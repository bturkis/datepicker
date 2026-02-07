---
outline: deep
---

# Aan de Slag

## Installatie

```bash
npm install @bturkis/datepicker
```

### Vue 3

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

De module regelt alles automatisch: CSS-injectie, componentregistratie in **client-only**.

## Thema

```html
<html data-theme="light"></html>
```
