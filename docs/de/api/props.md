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
  --bt-primary: #8b5cf6;
  --bt-text: #f8fafc;
  --bt-bg: #1e1e2e;
  --bt-popup-bg: #16161f;
  --bt-border: #2a2a3d;
}
```

### Helles Theme

```css
[data-theme="light"],
.light {
  --bt-text: #1e293b;
  --bt-bg: #ffffff;
  --bt-popup-bg: #f8fafc;
  --bt-border: #e2e8f0;
}
```
