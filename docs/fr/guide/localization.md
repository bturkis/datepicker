# Localisation

@bturkis/datepicker est livre avec **15 langues integrees**. Les noms de mois et jours sont generes via l'API `Intl.DateTimeFormat` du navigateur.

## Langues Supportees

| Code | Drapeau | Langue     | Exemple           |
| ---- | ------- | ---------- | ----------------- |
| `tr` | 🇹🇷      | Turkce     | Tarih secin       |
| `en` | 🇬🇧      | English    | Select date       |
| `de` | 🇩🇪      | Deutsch    | Datum wahlen      |
| `fr` | 🇫🇷      | Francais   | Choisir une date  |
| `es` | 🇪🇸      | Espanol    | Seleccionar fecha |
| `it` | 🇮🇹      | Italiano   | Seleziona data    |
| `pt` | 🇧🇷      | Portugues  | Selecionar data   |
| `ru` | 🇷🇺      | Russkiy    | Выберите дату     |
| `ar` | 🇸🇦      | العربية    | اختر التاريخ      |
| `ja` | 🇯🇵      | 日本語     | 日付を選択        |
| `zh` | 🇨🇳      | 中文       | 选择日期          |
| `ko` | 🇰🇷      | 한국어     | 날짜 선택         |
| `nl` | 🇳🇱      | Nederlands | Datum kiezen      |
| `pl` | 🇵🇱      | Polski     | Wybierz date      |
| `uk` | 🇺🇦      | Українська | Оберіть дату      |

## Utilisation

```vue
<DatePicker v-model="date" lang="ja" />
```

Le prop `lang` est **reactif** -- le changer met a jour toutes les etiquettes instantanement.

## Langue Personnalisee

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
