---
outline: deep
---

# 시작하기

## 설치

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

모듈이 자동으로 처리: CSS 주입, **client-only** 컴포넌트 등록.

## 테마

```html
<html data-theme="light"></html>
```
