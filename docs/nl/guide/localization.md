# Lokalisatie

@bturkis/datepicker bevat **15 ingebouwde talen**. Maand- en dagnamen worden gegenereerd via de `Intl.DateTimeFormat` API van de browser.

## Gebruik

```vue
<DatePicker v-model="date" lang="ja" />
```

Het `lang` prop is **reactief** -- wijziging werkt alle labels direct bij.

## Aangepaste Taal

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
