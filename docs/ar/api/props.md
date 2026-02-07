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
  --sdp-primary: #8b5cf6;
  --sdp-text: #f8fafc;
  --sdp-bg: #1e1e2e;
}
[data-theme="light"] {
  --sdp-text: #1e293b;
  --sdp-bg: #ffffff;
}
```
