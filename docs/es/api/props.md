# Props y Eventos

## Props

| Prop            | Tipo                                   | Defecto        | Descripcion                      |
| --------------- | -------------------------------------- | -------------- | -------------------------------- |
| `modelValue`    | `string`                               | `''`           | Valor seleccionado (formato ISO) |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'`       | Modo del selector                |
| `displayFormat` | `string`                               | --             | Formato de visualizacion         |
| `placeholder`   | `string`                               | Default locale | Texto del placeholder            |
| `disabled`      | `boolean`                              | `false`        | Desactivar el selector           |
| `label`         | `string`                               | --             | Texto de etiqueta                |
| `lang`          | `string`                               | `'tr'`         | Codigo de idioma                 |
| `min`           | `string`                               | --             | Fecha minima (`YYYY-MM-DD`)      |
| `max`           | `string`                               | --             | Fecha maxima (`YYYY-MM-DD`)      |
| `range`         | `boolean`                              | `false`        | Activar seleccion de rango       |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`         | Formato horario                  |
| `minuteStep`    | `number`                               | `1`            | Paso de minutos                  |

## Eventos

| Evento              | Payload  | Descripcion            |
| ------------------- | -------- | ---------------------- |
| `update:modelValue` | `string` | Emitido al seleccionar |

## Variables CSS

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
