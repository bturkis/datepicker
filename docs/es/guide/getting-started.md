---
outline: deep
---

# Inicio Rapido

## Instalacion

```bash
npm install @bturkis/datepicker
```

## Configuracion

### Vue 3 -- Registro Global

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

El modulo gestiona todo automaticamente: inyeccion CSS, registro del componente en **client-only**, compatible con Nuxt 3 y Nuxt 4.

## Tema

El componente viene con **tema oscuro** por defecto. El tema claro se activa segun la preferencia del sistema o manualmente:

```html
<html data-theme="light"></html>
```
