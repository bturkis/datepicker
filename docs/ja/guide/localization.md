# ローカライゼーション

@bturkis/datepickerは**15の組み込み言語**を搭載。月名と曜日名はブラウザの`Intl.DateTimeFormat` APIで生成されます。

## 使用方法

```vue
<DatePicker v-model="date" lang="ja" />
```

`lang`プロップは**リアクティブ**です -- 変更するとすべてのラベルが即座に更新されます。

## カスタム言語

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
