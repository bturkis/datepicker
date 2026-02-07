# Props e Eventos

## Props

| Prop            | Tipo                                   | Padrao   | Descricao                       |
| --------------- | -------------------------------------- | -------- | ------------------------------- |
| `modelValue`    | `string`                               | `''`     | Valor selecionado (formato ISO) |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'` | Modo do seletor                 |
| `displayFormat` | `string`                               | --       | Formato de exibicao             |
| `lang`          | `string`                               | `'tr'`   | Codigo do idioma                |
| `min`           | `string`                               | --       | Data minima (`YYYY-MM-DD`)      |
| `max`           | `string`                               | --       | Data maxima (`YYYY-MM-DD`)      |
| `range`         | `boolean`                              | `false`  | Ativar selecao de intervalo     |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`   | Formato horario                 |

## Eventos

| Evento              | Payload  | Descricao             |
| ------------------- | -------- | --------------------- |
| `update:modelValue` | `string` | Emitido ao selecionar |

## Variaveis CSS

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
