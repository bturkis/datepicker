# Локалізація

@bturkis/datepicker містить **15 вбудованих мов**. Назви місяців та днів генеруються через API `Intl.DateTimeFormat`.

## Використання

```vue
<DatePicker v-model="date" lang="ja" />
```

Властивість `lang` є **реактивною** -- зміна миттєво оновлює всі мітки.

## Власна мова

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
