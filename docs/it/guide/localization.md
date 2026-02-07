# Localizzazione

Stitch DatePicker include **15 lingue integrate**. I nomi dei mesi e dei giorni sono generati tramite l'API `Intl.DateTimeFormat` del browser.

## Lingue Supportate

| Codice | Bandiera | Lingua     | Esempio           |
| ------ | -------- | ---------- | ----------------- |
| `tr`   | 🇹🇷       | Turkce     | Tarih secin       |
| `en`   | 🇬🇧       | English    | Select date       |
| `de`   | 🇩🇪       | Deutsch    | Datum wahlen      |
| `fr`   | 🇫🇷       | Francais   | Choisir une date  |
| `es`   | 🇪🇸       | Espanol    | Seleccionar fecha |
| `it`   | 🇮🇹       | Italiano   | Seleziona data    |
| `pt`   | 🇧🇷       | Portugues  | Selecionar data   |
| `ru`   | 🇷🇺       | Russkiy    | Выберите дату     |
| `ar`   | 🇸🇦       | العربية    | اختر التاريخ      |
| `ja`   | 🇯🇵       | 日本語     | 日付を選択        |
| `zh`   | 🇨🇳       | 中文       | 选择日期          |
| `ko`   | 🇰🇷       | 한국어     | 날짜 선택         |
| `nl`   | 🇳🇱       | Nederlands | Datum kiezen      |
| `pl`   | 🇵🇱       | Polski     | Wybierz date      |
| `uk`   | 🇺🇦       | Українська | Оберіть дату      |

## Uso

```vue
<DatePicker v-model="date" lang="ja" />
```

Il prop `lang` e **reattivo** -- cambiarlo aggiorna tutte le etichette istantaneamente.

## Lingua Personalizzata

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
