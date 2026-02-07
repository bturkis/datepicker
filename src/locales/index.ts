/**
 * bturkis DatePicker — Locale System
 * Provides UI label translations for 15 languages.
 * Calendar data (month names, weekday names) uses Intl.DateTimeFormat.
 */

export interface BtLocale {
  /** Language code (e.g. 'tr', 'en') */
  code: string;
  /** Placeholder text for date input */
  placeholder: string;
  /** Placeholder text for range input */
  rangePlaceholder: string;
  /** "Today" button label */
  todayLabel: string;
  /** "Clear" button label */
  clearLabel: string;
  /** "Time" section label */
  timeLabel: string;
  /** "Now" button label (for time picker) */
  nowLabel: string;
  /** Placeholder for time-only mode */
  timePlaceholder: string;
  /** Placeholder for datetime mode */
  datetimePlaceholder: string;
  /** AM label for 12h format */
  am: string;
  /** PM label for 12h format */
  pm: string;
}

// ── Built-in locales ──────────────────────────────────────────────

import { tr } from "./tr";
import { en } from "./en";
import { de } from "./de";
import { fr } from "./fr";
import { es } from "./es";
import { it } from "./it";
import { pt } from "./pt";
import { ru } from "./ru";
import { ar } from "./ar";
import { ja } from "./ja";
import { zh } from "./zh";
import { ko } from "./ko";
import { nl } from "./nl";
import { pl } from "./pl";
import { uk } from "./uk";

const locales: Record<string, BtLocale> = {
  tr,
  en,
  de,
  fr,
  es,
  it,
  pt,
  ru,
  ar,
  ja,
  zh,
  ko,
  nl,
  pl,
  uk,
};

/**
 * Get locale by language code. Falls back to Turkish.
 */
export function getLocale(lang: string): BtLocale {
  return locales[lang] || locales.tr;
}

/**
 * Register a custom locale.
 */
export function registerLocale(locale: BtLocale): void {
  locales[locale.code] = locale;
}

/**
 * Get weekday names for a locale using Intl.
 * Returns short names starting from Monday.
 */
export function getWeekDays(locale: string): string[] {
  const intlLocale = localeToIntl(locale);
  const days: string[] = [];
  // Jan 5, 2026 is a Monday
  for (let i = 0; i < 7; i++) {
    const d = new Date(2026, 0, 5 + i);
    days.push(
      new Intl.DateTimeFormat(intlLocale, { weekday: "short" }).format(d),
    );
  }
  return days;
}

/**
 * Get month names for a locale using Intl.
 */
export function getMonthNames(locale: string): string[] {
  const intlLocale = localeToIntl(locale);
  const months: string[] = [];
  for (let i = 0; i < 12; i++) {
    const d = new Date(2026, i, 1);
    months.push(
      new Intl.DateTimeFormat(intlLocale, { month: "long" }).format(d),
    );
  }
  return months;
}

/**
 * Map short lang code to Intl locale string.
 */
function localeToIntl(lang: string): string {
  const map: Record<string, string> = {
    tr: "tr-TR",
    en: "en-US",
    de: "de-DE",
    fr: "fr-FR",
    es: "es-ES",
    it: "it-IT",
    pt: "pt-BR",
    ru: "ru-RU",
    ar: "ar-SA",
    ja: "ja-JP",
    zh: "zh-CN",
    ko: "ko-KR",
    nl: "nl-NL",
    pl: "pl-PL",
    uk: "uk-UA",
  };
  return map[lang] || lang;
}

export { localeToIntl };

/** @deprecated Use BtLocale instead */
export type StitchLocale = BtLocale;
