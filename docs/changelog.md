# Changelog

All notable changes to this project will be documented in this file.

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
