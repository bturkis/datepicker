# Dil Destegi

@bturkis/datepicker **15 yerlesik dil** ile gelir. Takvim ay adlari ve hafta gunu etiketleri tarayicinin `Intl.DateTimeFormat` API'si ile olusturulur.

## Desteklenen Diller

| Kod  | Bayrak | Dil        | Placeholder Ornegi |
| ---- | ------ | ---------- | ------------------ |
| `tr` | 🇹🇷     | Turkce     | Tarih secin        |
| `en` | 🇬🇧     | English    | Select date        |
| `de` | 🇩🇪     | Deutsch    | Datum wahlen       |
| `fr` | 🇫🇷     | Francais   | Choisir une date   |
| `es` | 🇪🇸     | Espanol    | Seleccionar fecha  |
| `it` | 🇮🇹     | Italiano   | Seleziona data     |
| `pt` | 🇧🇷     | Portugues  | Selecionar data    |
| `ru` | 🇷🇺     | Russkiy    | Выберите дату      |
| `ar` | 🇸🇦     | العربية    | اختر التاريخ       |
| `ja` | 🇯🇵     | 日本語     | 日付を選択         |
| `zh` | 🇨🇳     | 中文       | 选择日期           |
| `ko` | 🇰🇷     | 한국어     | 날짜 선택          |
| `nl` | 🇳🇱     | Nederlands | Datum kiezen       |
| `pl` | 🇵🇱     | Polski     | Wybierz date       |
| `uk` | 🇺🇦     | Українська | Оберіть дату       |

## Kullanim

```vue
<!-- lang prop'u ile dil ayarlayin -->
<DatePicker v-model="date" lang="ja" />
```

`lang` prop'u **reaktiftir** -- degistirmek tum etiketleri aninda gunceller.

## Ozel Dil Ekleme

Calistirma zamaninda kendi dilinizi kaydedebilirsiniz:

```ts
import { registerLocale } from "@bturkis/datepicker";
import type { BtLocale } from "@bturkis/datepicker";

const myLocale: BtLocale = {
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

Sonra kullanin:

```vue
<DatePicker v-model="date" lang="sv" />
```

## Nasil Calisir

UI etiketleri (dugmeler, placeholder'lar) dil nesnesinden gelir. Takvim verileri (ay adlari, hafta gunu kisaltmalari) dil kodunu kullanarak `Intl.DateTimeFormat` tarafindan olusturulur -- ay adi sozlukleri gondermenize gerek yoktur.

```ts
// Dahili: getWeekDays('ja') →
// Intl.DateTimeFormat('ja-JP', { weekday: 'short' }) kullanir
// → ['月', '火', '水', '木', '金', '土', '日']
```
