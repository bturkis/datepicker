# الخصائص والأحداث

## الخصائص

| الخاصية         | النوع                                  | الافتراضي | الوصف                |
| --------------- | -------------------------------------- | --------- | -------------------- |
| `modelValue`    | `string`                               | `''`      | القيمة المحددة (ISO) |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'`  | وضع المحدد           |
| `displayFormat` | `string`                               | --        | تنسيق العرض          |
| `lang`          | `string`                               | `'tr'`    | رمز اللغة            |
| `min`           | `string`                               | --        | التاريخ الأدنى       |
| `max`           | `string`                               | --        | التاريخ الأقصى       |
| `range`         | `boolean`                              | `false`   | تفعيل اختيار النطاق  |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`    | تنسيق الوقت          |

## متغيرات CSS

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
