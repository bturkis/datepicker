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
  --bt-primary: #8b5cf6;
  --bt-text: #f8fafc;
  --bt-bg: #1e1e2e;
}
[data-theme="light"] {
  --bt-text: #1e293b;
  --bt-bg: #ffffff;
}
```
