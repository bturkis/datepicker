# Proplar ve Eventler

## Proplar

| Prop               | Tip                                    | Varsayilan      | Aciklama                                             |
| ------------------ | -------------------------------------- | --------------- | ---------------------------------------------------- |
| `modelValue`       | `string`                               | `''`            | Secilen deger (ISO tarih, saat veya tarih-saat)      |
| `type`             | `'date' \| 'datetime-local' \| 'time'` | `'date'`        | Secici modu                                          |
| `displayFormat`    | `string`                               | --              | Gosterim formati (ornegin `DD/MM/YYYY`)              |
| `placeholder`      | `string`                               | Dil varsayilani | Giris placeholder metni                              |
| `disabled`         | `boolean`                              | `false`         | Seciciyi devre disi birak                            |
| `required`         | `boolean`                              | `false`         | Zorunlu olarak isaretle                              |
| `label`            | `string`                               | --              | Tetikleyici ustundeki etiket metni                   |
| `lang`             | `string`                               | `'tr'`          | Dil kodu. Bkz. [Dil Destegi](/tr/guide/localization) |
| `locale`           | `string`                               | --              | Ay/gun formatlama icin Intl locale dizesi            |
| `min`              | `string`                               | --              | Minimum secilebilir tarih (`YYYY-MM-DD`)             |
| `max`              | `string`                               | --              | Maksimum secilebilir tarih (`YYYY-MM-DD`)            |
| `range`            | `boolean`                              | `false`         | Tarih araligi secimini etkinlestir                   |
| `rangePlaceholder` | `string`                               | Dil varsayilani | Bos aralik durumu icin placeholder                   |
| `hourFormat`       | `'24' \| '12'`                         | `'24'`          | Saat gosterim formati                                |
| `minuteStep`       | `number`                               | `1`             | Dakika artis adimi                                   |
| `error`            | `string`                               | --              | Hata mesaji                                          |
| `hint`             | `string`                               | --              | Ipucu metni                                          |

## Eventler

| Event               | Payload  | Aciklama                      |
| ------------------- | -------- | ----------------------------- |
| `update:modelValue` | `string` | Deger secildiginde tetiklenir |

## Format Tokenlari

`displayFormat` prop'unda su tokenlari kullanin:

| Token  | Cikti               | Ornek   |
| ------ | ------------------- | ------- |
| `YYYY` | 4 haneli yil        | `2026`  |
| `YY`   | 2 haneli yil        | `26`    |
| `MMMM` | Tam ay adi          | `Subat` |
| `MMM`  | Kisa ay adi         | `Sub`   |
| `MM`   | 2 haneli ay         | `02`    |
| `DD`   | 2 haneli gun        | `14`    |
| `HH`   | 2 haneli saat (24s) | `09`    |
| `mm`   | 2 haneli dakika     | `30`    |

::: tip
Ay ve hafta gunu adlari `lang` prop'una uyar -- `Intl.DateTimeFormat` ile olusturulur.
:::

## CSS Degiskenleri {#css-degiskenleri}

Bilesen tema icin CSS ozel ozelliklerini kullanir.

### Koyu Tema (Varsayilan)

```css
:root {
  --sdp-primary: #8b5cf6;
  --sdp-primary-light: #a78bfa;
  --sdp-text: #f8fafc;
  --sdp-text-secondary: #94a3b8;
  --sdp-bg: #1e1e2e;
  --sdp-popup-bg: #16161f;
  --sdp-border: #2a2a3d;
  --sdp-hover-bg: rgba(139, 92, 246, 0.1);
  --sdp-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
}
```

### Acik Tema

```css
[data-theme="light"],
.light {
  --sdp-text: #1e293b;
  --sdp-bg: #ffffff;
  --sdp-popup-bg: #f8fafc;
  --sdp-border: #e2e8f0;
  --sdp-hover-bg: rgba(139, 92, 246, 0.06);
  --sdp-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
}
```

### Tema Etkinlestirme Yontemleri

| Yontem            | Nasil                                                             |
| ----------------- | ----------------------------------------------------------------- |
| Otomatik (sistem) | Yapilandirma gerekmez -- `prefers-color-scheme` kullanir          |
| Data ozelligi     | `<html data-theme="light">` veya `<html data-theme="dark">`       |
| CSS sinifi        | `<html class="light">` veya `<html class="dark">`                 |
| Ozel degisken     | Herhangi bir ust elemanda `--sdp-*` degiskenlerini gecersiz kilin |

## Disari Aktarilan Yardimcilar

```ts
import {
  DatePicker,
  useDatePickerCalendar,
  formatISO,
  padTime,
  formatDateToken,
  formatDisplayDate,
  useTimePicker,
  getLocale,
  registerLocale,
  getWeekDays,
  getMonthNames,
} from "@bturkis/datepicker";
```
