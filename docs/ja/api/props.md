# プロップとイベント

## プロップ

| プロップ        | 型                                     | デフォルト | 説明              |
| --------------- | -------------------------------------- | ---------- | ----------------- |
| `modelValue`    | `string`                               | `''`       | 選択値（ISO形式） |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'`   | セレクターモード  |
| `displayFormat` | `string`                               | --         | 表示フォーマット  |
| `lang`          | `string`                               | `'tr'`     | 言語コード        |
| `min`           | `string`                               | --         | 最小日付          |
| `max`           | `string`                               | --         | 最大日付          |
| `range`         | `boolean`                              | `false`    | 範囲選択を有効化  |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`     | 時間フォーマット  |

## CSS変数

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
