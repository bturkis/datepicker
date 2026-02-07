import { describe, it, expect } from "vitest";
import {
  formatISO,
  padTime,
  formatDateToken,
  formatDisplayDate,
  formatShortDate,
} from "../composables/useDatePickerCalendar";

describe("Utility Functions", () => {
  describe("formatISO", () => {
    it("formats date as YYYY-MM-DD", () => {
      const d = new Date(2026, 1, 7); // Feb 7
      expect(formatISO(d)).toBe("2026-02-07");
    });

    it("zero-pads single digit months and days", () => {
      const d = new Date(2026, 0, 5); // Jan 5
      expect(formatISO(d)).toBe("2026-01-05");
    });

    it("handles December 31", () => {
      const d = new Date(2025, 11, 31);
      expect(formatISO(d)).toBe("2025-12-31");
    });
  });

  describe("padTime", () => {
    it("pads single digit with leading zero", () => {
      expect(padTime(0)).toBe("00");
      expect(padTime(5)).toBe("05");
      expect(padTime(9)).toBe("09");
    });

    it("does not pad double digits", () => {
      expect(padTime(10)).toBe("10");
      expect(padTime(23)).toBe("23");
      expect(padTime(59)).toBe("59");
    });
  });

  describe("formatDateToken", () => {
    it("formats YYYY-MM-DD", () => {
      expect(formatDateToken("2026-02-07", "YYYY-MM-DD")).toBe("2026-02-07");
    });

    it("formats DD/MM/YYYY", () => {
      expect(formatDateToken("2026-02-07", "DD/MM/YYYY")).toBe("07/02/2026");
    });

    it("formats with time HH:mm", () => {
      expect(formatDateToken("2026-02-07T14:30", "DD/MM/YYYY HH:mm")).toBe(
        "07/02/2026 14:30",
      );
    });

    it("formats time-only string", () => {
      expect(formatDateToken("09:30", "HH:mm")).toBe("09:30");
    });

    it("returns original string on invalid input", () => {
      expect(formatDateToken("invalid", "YYYY")).toBe("invalid");
    });

    it("formats MMMM (full month name)", () => {
      const result = formatDateToken("2026-02-07", "MMMM YYYY", "en-US");
      expect(result).toContain("2026");
      expect(result.toLowerCase()).toContain("february");
    });

    it("formats MMM (short month name)", () => {
      const result = formatDateToken("2026-02-07", "MMM YYYY", "en-US");
      expect(result).toContain("2026");
      expect(result.toLowerCase()).toContain("feb");
    });
  });

  describe("formatDisplayDate", () => {
    it("formats date with long month name", () => {
      const result = formatDisplayDate("2026-02-14", "en-US");
      expect(result).toContain("14");
      expect(result).toContain("2026");
    });

    it("returns original on invalid input", () => {
      expect(formatDisplayDate("invalid")).toBe("invalid");
    });
  });

  describe("formatShortDate", () => {
    it("formats date with short month name", () => {
      const result = formatShortDate("2026-02-14", "en-US");
      expect(result).toContain("14");
      expect(result).toContain("2026");
    });

    it("returns original on invalid input", () => {
      expect(formatShortDate("invalid")).toBe("invalid");
    });
  });
});
