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
  --bt-primary: #8b5cf6;
  --bt-text: #f8fafc;
  --bt-bg: #1e1e2e;
}
[data-theme="light"] {
  --bt-text: #1e293b;
  --bt-bg: #ffffff;
}
```
