# التدويل

يتضمن Stitch DatePicker **15 لغة مدمجة**. أسماء الأشهر والأيام تُولد عبر واجهة `Intl.DateTimeFormat`.

## الاستخدام

```vue
<DatePicker v-model="date" lang="ja" />
```

خاصية `lang` **تفاعلية** -- تغييرها يحدث جميع التسميات فوراً.

## لغة مخصصة

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
