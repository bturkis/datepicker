# Локализация

Stitch DatePicker включает **15 встроенных языков**. Названия месяцев и дней генерируются через API `Intl.DateTimeFormat`.

## Использование

```vue
<DatePicker v-model="date" lang="ja" />
```

Свойство `lang` **реактивно** -- его изменение мгновенно обновляет все метки.

## Пользовательский язык

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
