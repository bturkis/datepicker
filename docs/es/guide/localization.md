# Localizacion

@bturkis/datepicker incluye **15 idiomas integrados**. Los nombres de meses y dias se generan mediante la API `Intl.DateTimeFormat` del navegador.

## Idiomas Soportados

| Codigo | Bandera | Idioma     | Ejemplo           |
| ------ | ------- | ---------- | ----------------- |
| `tr`   | 🇹🇷      | Turkce     | Tarih secin       |
| `en`   | 🇬🇧      | English    | Select date       |
| `de`   | 🇩🇪      | Deutsch    | Datum wahlen      |
| `fr`   | 🇫🇷      | Francais   | Choisir une date  |
| `es`   | 🇪🇸      | Espanol    | Seleccionar fecha |
| `it`   | 🇮🇹      | Italiano   | Seleziona data    |
| `pt`   | 🇧🇷      | Portugues  | Selecionar data   |
| `ru`   | 🇷🇺      | Russkiy    | Выберите дату     |
| `ar`   | 🇸🇦      | العربية    | اختر التاريخ      |
| `ja`   | 🇯🇵      | 日本語     | 日付を選択        |
| `zh`   | 🇨🇳      | 中文       | 选择日期          |
| `ko`   | 🇰🇷      | 한국어     | 날짜 선택         |
| `nl`   | 🇳🇱      | Nederlands | Datum kiezen      |
| `pl`   | 🇵🇱      | Polski     | Wybierz date      |
| `uk`   | 🇺🇦      | Українська | Оберіть дату      |

## Uso

```vue
<DatePicker v-model="date" lang="ja" />
```

El prop `lang` es **reactivo** -- cambiarlo actualiza todas las etiquetas al instante.

## Idioma Personalizado

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
