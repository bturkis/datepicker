# 国际化

Stitch DatePicker包含**15种内置语言**。月份和星期名称通过浏览器的`Intl.DateTimeFormat` API生成。

## 使用方法

```vue
<DatePicker v-model="date" lang="ja" />
```

`lang`属性是**响应式的**——更改后所有标签立即更新。

## 自定义语言

```ts
import { registerLocale } from "@bturkis/datepicker";
registerLocale({ code: "sv", placeholder: "Valj datum", ... });
```
