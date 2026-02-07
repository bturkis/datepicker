# Props i Zdarzenia

## Props

| Prop         | Typ                                    | Domyslnie | Opis                  |
| ------------ | -------------------------------------- | --------- | --------------------- |
| `modelValue` | `string`                               | `''`      | Wybrana wartosc (ISO) |
| `type`       | `'date' \| 'datetime-local' \| 'time'` | `'date'`  | Tryb selektora        |
| `lang`       | `string`                               | `'tr'`    | Kod jezyka            |
| `min`        | `string`                               | --        | Minimalna data        |
| `max`        | `string`                               | --        | Maksymalna data       |
| `range`      | `boolean`                              | `false`   | Wybor zakresu         |
| `hourFormat` | `'24' \| '12'`                         | `'24'`    | Format czasu          |

## Zmienne CSS

```css
:root {
  --sdp-primary: #8b5cf6;
  --sdp-text: #f8fafc;
  --sdp-bg: #1e1e2e;
}
[data-theme="light"] {
  --sdp-text: #1e293b;
  --sdp-bg: #ffffff;
}
```
