# Props와 이벤트

## Props

| Prop            | 타입                                   | 기본값   | 설명                 |
| --------------- | -------------------------------------- | -------- | -------------------- |
| `modelValue`    | `string`                               | `''`     | 선택된 값 (ISO 형식) |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'` | 선택기 모드          |
| `displayFormat` | `string`                               | --       | 표시 형식            |
| `lang`          | `string`                               | `'tr'`   | 언어 코드            |
| `min`           | `string`                               | --       | 최소 날짜            |
| `max`           | `string`                               | --       | 최대 날짜            |
| `range`         | `boolean`                              | `false`  | 범위 선택 활성화     |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`   | 시간 형식            |

## CSS 변수

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
