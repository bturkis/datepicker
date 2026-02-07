# Changelog

All notable changes to this project will be documented in this file.

## [1.3.2] -- 2026-02-07

### 🐛 Bug Fixes

- **Nuxt Module Fix** -- CSS path now correctly resolves from `dist/bt-datepicker.css` instead of `src/style.css`
- **npm Package** -- Full `src/` directory included in published package for Nuxt component compilation

---

## [1.3.1] -- 2026-02-07

### ✨ New Features

- **Localized AM/PM Display** -- Time and DateTime 12h modes now show locale-specific AM/PM labels (e.g. `2:30 ÖS` for Turkish)
- **Tooltip Width Control** -- New CSS vars `--bt-tooltip-width`, `--bt-tooltip-min-width`, `--bt-tooltip-max-width` for full width customization
- **`mark-tooltip` Slot** -- Scoped slot for fully custom tooltip content with `{ marks, day }` props (`day` is an ISO date string like `2026-02-14`)
- **Footer Slots** -- `#footer-prepend` and `#footer-append` slots for adding content before/after the Today and Clear buttons
- **Rich Custom Tooltip Demo** -- Premium demo with gradient header, glowing dots, description text, and category badges

### 🎨 Improvements

- Tooltip font size increased to `0.75rem`, padding to `6px 10px`
- Tooltip `white-space` changed from `pre-line` to `normal` for better slot content flow
- Default `max-width: 220px` prevents uncontrolled tooltip expansion
- 8 CSS custom properties now available for full tooltip theming
- Tooltip z-index raised to `9999` for full visibility over all layers

### 🐛 Bug Fixes

- Fixed AM/PM placeholder not respecting locale -- now uses localized text instead of hardcoded English
- Fixed `mark-tooltip` slot receiving full `CalendarDay` object instead of ISO date string -- now passes `day.key`
- Fixed tooltip clipping caused by `overflow-y: auto` on `.bt-popup-content` -- changed to `overflow: visible`

---

## [1.3.0] -- 2026-02-07

### New Features

- **Nuxt 3 / Nuxt 4 Module** -- `@bturkis/datepicker/nuxt` auto-registers the component and injects CSS
- **SSR Support** -- All browser API calls guarded for server-side rendering
- **Light / Dark Theme** -- CSS variable system with `data-theme`, `.light`/`.dark` classes, and `prefers-color-scheme` auto-detection
- **New CSS Variables** -- `--bt-hover-bg`, `--bt-hover-border`, `--bt-focus-shadow`, `--bt-shadow` for full theme control

### Changes

- Replaced all hardcoded `rgba()` hover values with CSS variables
- CI workflow now runs Vitest tests before publishing

---

## [1.2.0] — 2026-02-07

### ✨ New Features

- **Standalone Time Picker** — New `type="time"` mode for time-only selection
- **12h AM/PM Format** — `hour-format="12"` prop with AM/PM toggle buttons
- **DateTime Picker** — `type="datetime-local"` combines date and time in one picker
- **15 Language Support** — Built-in locales: TR, EN, DE, FR, ES, IT, PT, RU, AR, JA, ZH, KO, NL, PL, UK
- **Custom Locale Registration** — `registerLocale()` API for adding custom languages
- **Mobile Bottom Sheet** — Auto-detects mobile and renders as a touch-friendly bottom sheet
- **Minute Stepping** — `minute-step` prop for custom minute increments
- **VitePress Documentation** — Comprehensive docs site with interactive demos

### 🏗️ Architecture

- Extracted `CalendarPanel` and `TimePanel` as internal sub-components
- New `useTimePicker` composable for time logic
- Locale system built on `Intl.DateTimeFormat` for native month/weekday translations
- Calendar data generation refactored to use `Intl` APIs

### 🐛 Bug Fixes

- Fixed duplicate "Now" button in time-only mode
- Fixed calendar showing in time-only mode
- Fixed clock icon not appearing for time-only trigger

---

## [1.1.3] — 2026-02-06

### 🐛 Bug Fixes

- Fixed date range hover highlight rendering

---

## [1.1.0] — 2026-02-05

### ✨ New Features

- Date range selection with visual highlighting
- Custom format prop with token support (`YYYY`, `MM`, `DD`, etc.)
- Min/Max date constraints
- CSS custom properties for full customization

---

## [1.0.0] — 2026-02-04

### 🎉 Initial Release

- Single date picker with glassmorphism design
- Dark mode by default
- Turkish locale
- Vue 3 + TypeScript
- Zero runtime dependencies
