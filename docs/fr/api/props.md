# Props et Evenements

## Props

| Prop            | Type                                   | Defaut        | Description                       |
| --------------- | -------------------------------------- | ------------- | --------------------------------- |
| `modelValue`    | `string`                               | `''`          | Valeur selectionnee (format ISO)  |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'`      | Mode du selecteur                 |
| `displayFormat` | `string`                               | --            | Format d'affichage (`DD/MM/YYYY`) |
| `placeholder`   | `string`                               | Defaut locale | Texte du placeholder              |
| `disabled`      | `boolean`                              | `false`       | Desactiver le selecteur           |
| `required`      | `boolean`                              | `false`       | Marquer comme requis              |
| `label`         | `string`                               | --            | Texte d'etiquette                 |
| `lang`          | `string`                               | `'tr'`        | Code de langue                    |
| `min`           | `string`                               | --            | Date minimum (`YYYY-MM-DD`)       |
| `max`           | `string`                               | --            | Date maximum (`YYYY-MM-DD`)       |
| `range`         | `boolean`                              | `false`       | Activer la selection de plage     |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`        | Format horaire                    |
| `minuteStep`    | `number`                               | `1`           | Pas des minutes                   |
| `error`         | `string`                               | --            | Message d'erreur                  |
| `hint`          | `string`                               | --            | Texte d'indication                |

## Evenements

| Evenement           | Payload  | Description               |
| ------------------- | -------- | ------------------------- |
| `update:modelValue` | `string` | Emis lors de la selection |

## Variables CSS

```css
:root {
  --sdp-primary: #8b5cf6;
  --sdp-text: #f8fafc;
  --sdp-bg: #1e1e2e;
  --sdp-border: #2a2a3d;
}

[data-theme="light"],
.light {
  --sdp-text: #1e293b;
  --sdp-bg: #ffffff;
  --sdp-border: #e2e8f0;
}
```
