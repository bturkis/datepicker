# Props ed Eventi

## Props

| Prop            | Tipo                                   | Default        | Descrizione                      |
| --------------- | -------------------------------------- | -------------- | -------------------------------- |
| `modelValue`    | `string`                               | `''`           | Valore selezionato (formato ISO) |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'`       | Modalita del selettore           |
| `displayFormat` | `string`                               | --             | Formato di visualizzazione       |
| `placeholder`   | `string`                               | Default locale | Testo placeholder                |
| `disabled`      | `boolean`                              | `false`        | Disattivare il selettore         |
| `label`         | `string`                               | --             | Testo etichetta                  |
| `lang`          | `string`                               | `'tr'`         | Codice lingua                    |
| `min`           | `string`                               | --             | Data minima (`YYYY-MM-DD`)       |
| `max`           | `string`                               | --             | Data massima (`YYYY-MM-DD`)      |
| `range`         | `boolean`                              | `false`        | Attivare selezione intervallo    |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`         | Formato orario                   |
| `minuteStep`    | `number`                               | `1`            | Passo dei minuti                 |

## Eventi

| Evento              | Payload  | Descrizione           |
| ------------------- | -------- | --------------------- |
| `update:modelValue` | `string` | Emesso alla selezione |

## Variabili CSS

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
