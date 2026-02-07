# Свойства и события

## Свойства

| Свойство        | Тип                                    | По умолчанию | Описание                 |
| --------------- | -------------------------------------- | ------------ | ------------------------ |
| `modelValue`    | `string`                               | `''`         | Выбранное значение (ISO) |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'`     | Режим                    |
| `displayFormat` | `string`                               | --           | Формат отображения       |
| `lang`          | `string`                               | `'tr'`       | Код языка                |
| `min`           | `string`                               | --           | Минимальная дата         |
| `max`           | `string`                               | --           | Максимальная дата        |
| `range`         | `boolean`                              | `false`      | Выбор диапазона          |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`       | Формат времени           |

## CSS-переменные

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
