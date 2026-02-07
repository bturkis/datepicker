# Lokalizacja

@bturkis/datepicker zawiera **15 wbudowanych jezykow**. Nazwy miesiecy i dni generowane sa przez API `Intl.DateTimeFormat`.

## Uzycie

```vue
<DatePicker v-model="date" lang="ja" />
```

Prop `lang` jest **reaktywny** -- zmiana natychmiast aktualizuje wszystkie etykiety.

## Wlasny Jezyk

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
