# Props та події

## Props

| Prop         | Тип                                    | За замовчуванням | Опис                   |
| ------------ | -------------------------------------- | ---------------- | ---------------------- |
| `modelValue` | `string`                               | `''`             | Вибране значення (ISO) |
| `type`       | `'date' \| 'datetime-local' \| 'time'` | `'date'`         | Режим вибору           |
| `lang`       | `string`                               | `'tr'`           | Код мови               |
| `min`        | `string`                               | --               | Мінімальна дата        |
| `max`        | `string`                               | --               | Максимальна дата       |
| `range`      | `boolean`                              | `false`          | Вибір діапазону        |
| `hourFormat` | `'24' \| '12'`                         | `'24'`           | Формат часу            |

## CSS-змінні

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
