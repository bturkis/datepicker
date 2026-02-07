# Localizacao

Stitch DatePicker inclui **15 idiomas integrados**. Nomes de meses e dias sao gerados pela API `Intl.DateTimeFormat` do navegador.

## Idiomas Suportados

| Codigo | Bandeira | Idioma     | Exemplo           |
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

O prop `lang` e **reativo** -- altera-lo atualiza todos os rotulos instantaneamente.

## Idioma Personalizado

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
