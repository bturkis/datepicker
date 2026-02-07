# Props & Gebeurtenissen

## Props

| Prop            | Type                                   | Standaard | Beschrijving                       |
| --------------- | -------------------------------------- | --------- | ---------------------------------- |
| `modelValue`    | `string`                               | `''`      | Geselecteerde waarde (ISO-formaat) |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'`  | Selectormodus                      |
| `displayFormat` | `string`                               | --        | Weergaveformaat                    |
| `lang`          | `string`                               | `'tr'`    | Taalcode                           |
| `min`           | `string`                               | --        | Minimumdatum                       |
| `max`           | `string`                               | --        | Maximumdatum                       |
| `range`         | `boolean`                              | `false`   | Bereikselectie activeren           |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`    | Tijdformaat                        |

## CSS-variabelen

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
