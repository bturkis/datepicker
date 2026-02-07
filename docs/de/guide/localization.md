# Lokalisierung

Stitch DatePicker wird mit **15 integrierten Sprachen** geliefert. Kalendermonatsnamen und Wochentagsbeschriftungen werden uber die `Intl.DateTimeFormat` API des Browsers generiert.

## Unterstutzte Sprachen

| Code | Flagge | Sprache    | Platzhalter-Beispiel |
| ---- | ------ | ---------- | -------------------- |
| `tr` | 🇹🇷     | Turkce     | Tarih secin          |
| `en` | 🇬🇧     | English    | Select date          |
| `de` | 🇩🇪     | Deutsch    | Datum wahlen         |
| `fr` | 🇫🇷     | Francais   | Choisir une date     |
| `es` | 🇪🇸     | Espanol    | Seleccionar fecha    |
| `it` | 🇮🇹     | Italiano   | Seleziona data       |
| `pt` | 🇧🇷     | Portugues  | Selecionar data      |
| `ru` | 🇷🇺     | Russkiy    | Выберите дату        |
| `ar` | 🇸🇦     | العربية    | اختر التاريخ         |
| `ja` | 🇯🇵     | 日本語     | 日付を選択           |
| `zh` | 🇨🇳     | 中文       | 选择日期             |
| `ko` | 🇰🇷     | 한국어     | 날짜 선택            |
| `nl` | 🇳🇱     | Nederlands | Datum kiezen         |
| `pl` | 🇵🇱     | Polski     | Wybierz date         |
| `uk` | 🇺🇦     | Українська | Оберіть дату         |

## Verwendung

```vue
<DatePicker v-model="date" lang="ja" />
```

Das `lang`-Prop ist **reaktiv** -- eine Anderung aktualisiert alle Beschriftungen sofort.

## Benutzerdefinierte Sprache

Sie konnen zur Laufzeit eine eigene Sprache registrieren:

```ts
import { registerLocale } from "@bturkis/datepicker";
import type { StitchLocale } from "@bturkis/datepicker";

const myLocale: StitchLocale = {
  code: "sv",
  placeholder: "Valj datum",
  rangePlaceholder: "Valj intervall",
  todayLabel: "Idag",
  clearLabel: "Rensa",
  timeLabel: "Tid",
  nowLabel: "Nu",
  timePlaceholder: "Valj tid",
  datetimePlaceholder: "Valj datum och tid",
  am: "FM",
  pm: "EM",
};

registerLocale(myLocale);
```

## Funktionsweise

UI-Beschriftungen stammen aus dem Locale-Objekt. Kalenderdaten werden durch `Intl.DateTimeFormat` generiert -- kein Versand von Monatsnamen-Worterbuchern erforderlich.
