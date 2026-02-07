# 로케일

@bturkis/datepicker는 **15개 내장 언어**를 포함합니다. 월/요일 이름은 `Intl.DateTimeFormat` API로 생성됩니다.

## 사용법

```vue
<DatePicker v-model="date" lang="ja" />
```

`lang` 프로퍼티는 **리액티브**입니다 -- 변경하면 모든 레이블이 즉시 업데이트됩니다.

## 커스텀 언어

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
