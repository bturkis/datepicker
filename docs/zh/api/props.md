# Props与事件

## Props

| Prop            | 类型                                   | 默认值   | 描述              |
| --------------- | -------------------------------------- | -------- | ----------------- |
| `modelValue`    | `string`                               | `''`     | 选中值（ISO格式） |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'` | 选择器模式        |
| `displayFormat` | `string`                               | --       | 显示格式          |
| `lang`          | `string`                               | `'tr'`   | 语言代码          |
| `min`           | `string`                               | --       | 最小日期          |
| `max`           | `string`                               | --       | 最大日期          |
| `range`         | `boolean`                              | `false`  | 启用范围选择      |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`   | 时间格式          |

## CSS变量

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
