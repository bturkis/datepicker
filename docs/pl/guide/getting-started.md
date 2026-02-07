---
outline: deep
---

# Pierwsze Kroki

## Instalacja

```bash
npm install @bturkis/datepicker
# or
pnpm add @bturkis/datepicker
# or
yarn add @bturkis/datepicker
# or
bun add @bturkis/datepicker
```

### Vue 3

```ts
import { createApp } from "vue";
import BtDatePicker from "@bturkis/datepicker";
import "@bturkis/datepicker/style.css";
const app = createApp(App);
app.use(BtDatePicker);
app.mount("#app");
```

### Nuxt 3 / Nuxt 4

```ts
export default defineNuxtConfig({
  modules: ["@bturkis/datepicker/nuxt"],
});
```

Modul zarzadza wszystkim automatycznie: wstrzykiwanie CSS, rejestracja komponentu w trybie **client-only**.

## Motyw

```html
<html data-theme="light"></html>
```
