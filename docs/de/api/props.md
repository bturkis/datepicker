# Props und Events

## Props

| Prop            | Typ                                    | Standard        | Beschreibung                      |
| --------------- | -------------------------------------- | --------------- | --------------------------------- |
| `modelValue`    | `string`                               | `''`            | Ausgewahlter Wert (ISO-Format)    |
| `type`          | `'date' \| 'datetime-local' \| 'time'` | `'date'`        | Auswahl-Modus                     |
| `displayFormat` | `string`                               | --              | Anzeigeformat (z.B. `DD.MM.YYYY`) |
| `placeholder`   | `string`                               | Sprach-Standard | Platzhaltertext                   |
| `disabled`      | `boolean`                              | `false`         | Auswahl deaktivieren              |
| `required`      | `boolean`                              | `false`         | Als erforderlich markieren        |
| `label`         | `string`                               | --              | Beschriftung uber dem Ausloser    |
| `lang`          | `string`                               | `'tr'`          | Sprachcode                        |
| `min`           | `string`                               | --              | Fruhestes Datum (`YYYY-MM-DD`)    |
| `max`           | `string`                               | --              | Spatestes Datum (`YYYY-MM-DD`)    |
| `range`         | `boolean`                              | `false`         | Datumsbereich aktivieren          |
| `hourFormat`    | `'24' \| '12'`                         | `'24'`          | Zeitformat                        |
| `minuteStep`    | `number`                               | `1`             | Minuten-Schrittweite              |
| `error`         | `string`                               | --              | Fehlermeldung                     |
| `hint`          | `string`                               | --              | Hinweistext                       |

## Events

| Event               | Payload  | Beschreibung               |
| ------------------- | -------- | -------------------------- |
| `update:modelValue` | `string` | Wird bei Auswahl ausgelost |

## Format-Token

| Token  | Ausgabe                  | Beispiel  |
| ------ | ------------------------ | --------- |
| `YYYY` | 4-stelliges Jahr         | `2026`    |
| `MM`   | 2-stelliger Monat        | `02`      |
| `DD`   | 2-stelliger Tag          | `14`      |
| `MMMM` | Vollstandiger Monatsname | `Februar` |
| `HH`   | 2-stellige Stunde        | `09`      |
| `mm`   | 2-stellige Minute        | `30`      |

## CSS-Variablen

Uberschreiben Sie diese Variablen zur Anpassung:

```css
:root {
  --sdp-primary: #8b5cf6;
  --sdp-text: #f8fafc;
  --sdp-bg: #1e1e2e;
  --sdp-popup-bg: #16161f;
  --sdp-border: #2a2a3d;
}
```

### Helles Theme

```css
[data-theme="light"],
.light {
  --sdp-text: #1e293b;
  --sdp-bg: #ffffff;
  --sdp-popup-bg: #f8fafc;
  --sdp-border: #e2e8f0;
}
```
