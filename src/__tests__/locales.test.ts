import { describe, it, expect } from "vitest";
import {
  getLocale,
  registerLocale,
  getWeekDays,
  getMonthNames,
} from "../locales/index";
import type { StitchLocale } from "../locales/index";

describe("Locale System", () => {
  describe("getLocale", () => {
    it("returns Turkish locale by default", () => {
      const locale = getLocale("tr");
      expect(locale.code).toBe("tr");
      expect(locale.placeholder).toBe("Tarih seçin");
      expect(locale.todayLabel).toBe("Bugün");
    });

    it("returns English locale", () => {
      const locale = getLocale("en");
      expect(locale.code).toBe("en");
      expect(locale.placeholder).toBe("Select date");
      expect(locale.todayLabel).toBe("Today");
    });

    it("returns Japanese locale", () => {
      const locale = getLocale("ja");
      expect(locale.code).toBe("ja");
      expect(locale.placeholder).toBe("日付を選択");
    });

    it("falls back to Turkish for unknown locale", () => {
      const locale = getLocale("xx");
      expect(locale.code).toBe("tr");
    });
  });

  describe("all built-in locales have required fields", () => {
    const codes = [
      "tr",
      "en",
      "de",
      "fr",
      "es",
      "it",
      "pt",
      "ru",
      "ar",
      "ja",
      "zh",
      "ko",
      "nl",
      "pl",
      "uk",
    ];
    const requiredFields: (keyof StitchLocale)[] = [
      "code",
      "placeholder",
      "rangePlaceholder",
      "todayLabel",
      "clearLabel",
      "timeLabel",
      "nowLabel",
      "timePlaceholder",
      "datetimePlaceholder",
      "am",
      "pm",
    ];

    for (const code of codes) {
      it(`locale "${code}" has all required fields`, () => {
        const locale = getLocale(code);
        for (const field of requiredFields) {
          expect(locale[field], `${code}.${field}`).toBeTruthy();
        }
      });
    }
  });

  describe("registerLocale", () => {
    it("registers and retrieves a custom locale", () => {
      const custom: StitchLocale = {
        code: "sv",
        placeholder: "Välj datum",
        rangePlaceholder: "Välj intervall",
        todayLabel: "Idag",
        clearLabel: "Rensa",
        timeLabel: "Tid",
        nowLabel: "Nu",
        timePlaceholder: "Välj tid",
        datetimePlaceholder: "Välj datum och tid",
        am: "FM",
        pm: "EM",
      };
      registerLocale(custom);
      const result = getLocale("sv");
      expect(result.code).toBe("sv");
      expect(result.placeholder).toBe("Välj datum");
    });
  });

  describe("getWeekDays", () => {
    it("returns 7 days for English", () => {
      const days = getWeekDays("en");
      expect(days).toHaveLength(7);
      // First day should be Monday
      expect(days[0].toLowerCase()).toContain("mon");
    });

    it("returns 7 days for Japanese", () => {
      const days = getWeekDays("ja");
      expect(days).toHaveLength(7);
      expect(days[0]).toContain("月");
    });

    it("returns 7 days for Turkish", () => {
      const days = getWeekDays("tr");
      expect(days).toHaveLength(7);
    });
  });

  describe("getMonthNames", () => {
    it("returns 12 months for English", () => {
      const months = getMonthNames("en");
      expect(months).toHaveLength(12);
      expect(months[0].toLowerCase()).toContain("january");
    });

    it("returns 12 months for Japanese", () => {
      const months = getMonthNames("ja");
      expect(months).toHaveLength(12);
      expect(months[0]).toContain("1");
    });

    it("returns 12 months for German", () => {
      const months = getMonthNames("de");
      expect(months).toHaveLength(12);
      expect(months[0].toLowerCase()).toContain("januar");
    });
  });
});
