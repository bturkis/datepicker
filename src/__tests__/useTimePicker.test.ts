import { describe, it, expect } from "vitest";
import { useTimePicker } from "../composables/useTimePicker";

describe("useTimePicker", () => {
  describe("initialization", () => {
    it("defaults to 00:00 in 24h format", () => {
      const tp = useTimePicker();
      expect(tp.hour.value).toBe(0);
      expect(tp.minute.value).toBe(0);
      expect(tp.isPM.value).toBe(false);
    });

    it("accepts initial hour and minute", () => {
      const tp = useTimePicker({ initialHour: 14, initialMinute: 30 });
      expect(tp.hour.value).toBe(14);
      expect(tp.minute.value).toBe(30);
    });
  });

  describe("displayHour (12h format)", () => {
    it("shows 12 for hour 0 in 12h format", () => {
      const tp = useTimePicker({ hourFormat: "12", initialHour: 0 });
      expect(tp.displayHour.value).toBe(12);
    });

    it("shows 1 for hour 1 in 12h format", () => {
      const tp = useTimePicker({ hourFormat: "12", initialHour: 1 });
      expect(tp.displayHour.value).toBe(1);
    });

    it("shows 12 for hour 12 in 12h format", () => {
      const tp = useTimePicker({ hourFormat: "12", initialHour: 12 });
      expect(tp.displayHour.value).toBe(12);
    });

    it("shows 1 for hour 13 in 12h format", () => {
      const tp = useTimePicker({ hourFormat: "12", initialHour: 13 });
      expect(tp.displayHour.value).toBe(1);
    });

    it("returns raw hour in 24h format", () => {
      const tp = useTimePicker({ hourFormat: "24", initialHour: 14 });
      expect(tp.displayHour.value).toBe(14);
    });
  });

  describe("adjustHour", () => {
    it("increments hour", () => {
      const tp = useTimePicker({ initialHour: 10 });
      tp.adjustHour(1);
      expect(tp.hour.value).toBe(11);
    });

    it("wraps from 23 to 0", () => {
      const tp = useTimePicker({ initialHour: 23 });
      tp.adjustHour(1);
      expect(tp.hour.value).toBe(0);
      expect(tp.isPM.value).toBe(false);
    });

    it("wraps from 0 to 23", () => {
      const tp = useTimePicker({ initialHour: 0 });
      tp.adjustHour(-1);
      expect(tp.hour.value).toBe(23);
      expect(tp.isPM.value).toBe(true);
    });

    it("updates isPM when crossing noon", () => {
      const tp = useTimePicker({ initialHour: 11 });
      expect(tp.isPM.value).toBe(false);
      tp.adjustHour(1);
      expect(tp.hour.value).toBe(12);
      expect(tp.isPM.value).toBe(true);
    });
  });

  describe("adjustMinute", () => {
    it("increments minute", () => {
      const tp = useTimePicker({ initialMinute: 30 });
      tp.adjustMinute(1);
      expect(tp.minute.value).toBe(31);
    });

    it("wraps minute from 59 and increments hour", () => {
      const tp = useTimePicker({ initialHour: 10, initialMinute: 59 });
      tp.adjustMinute(1);
      expect(tp.minute.value).toBe(0);
      expect(tp.hour.value).toBe(11);
    });

    it("wraps minute below 0 and decrements hour", () => {
      const tp = useTimePicker({ initialHour: 10, initialMinute: 0 });
      tp.adjustMinute(-1);
      expect(tp.minute.value).toBe(59);
      expect(tp.hour.value).toBe(9);
    });

    it("respects minuteStep", () => {
      const tp = useTimePicker({ minuteStep: 5, initialMinute: 10 });
      tp.adjustMinute(1);
      expect(tp.minute.value).toBe(15);
    });

    it("wraps with step across 60", () => {
      const tp = useTimePicker({
        minuteStep: 15,
        initialHour: 5,
        initialMinute: 50,
      });
      tp.adjustMinute(1);
      expect(tp.minute.value).toBe(5);
      expect(tp.hour.value).toBe(6);
    });
  });

  describe("toggleAMPM", () => {
    it("toggles from AM to PM", () => {
      const tp = useTimePicker({ initialHour: 8 });
      expect(tp.isPM.value).toBe(false);
      tp.toggleAMPM();
      expect(tp.hour.value).toBe(20);
      expect(tp.isPM.value).toBe(true);
    });

    it("toggles from PM to AM", () => {
      const tp = useTimePicker({ initialHour: 14 });
      tp.toggleAMPM();
      expect(tp.hour.value).toBe(2);
      expect(tp.isPM.value).toBe(false);
    });
  });

  describe("setTime", () => {
    it("sets hour and minute", () => {
      const tp = useTimePicker();
      tp.setTime(15, 45);
      expect(tp.hour.value).toBe(15);
      expect(tp.minute.value).toBe(45);
      expect(tp.isPM.value).toBe(true);
    });

    it("handles negative values with modulo", () => {
      const tp = useTimePicker();
      tp.setTime(-1, -5);
      expect(tp.hour.value).toBe(23);
      expect(tp.minute.value).toBe(55);
    });
  });

  describe("timeString", () => {
    it("formats as HH:mm", () => {
      const tp = useTimePicker({ initialHour: 9, initialMinute: 5 });
      expect(tp.timeString.value).toBe("09:05");
    });

    it("formats midnight", () => {
      const tp = useTimePicker({ initialHour: 0, initialMinute: 0 });
      expect(tp.timeString.value).toBe("00:00");
    });
  });

  describe("hourOptions / minuteOptions", () => {
    it("generates 24 options for 24h format", () => {
      const tp = useTimePicker({ hourFormat: "24" });
      expect(tp.hourOptions.value).toHaveLength(24);
      expect(tp.hourOptions.value[0]).toBe(0);
      expect(tp.hourOptions.value[23]).toBe(23);
    });

    it("generates 12 options for 12h format", () => {
      const tp = useTimePicker({ hourFormat: "12" });
      expect(tp.hourOptions.value).toHaveLength(12);
      expect(tp.hourOptions.value[0]).toBe(12);
      expect(tp.hourOptions.value[1]).toBe(1);
    });

    it("generates minute options with step", () => {
      const tp = useTimePicker({ minuteStep: 15 });
      expect(tp.minuteOptions.value).toEqual([0, 15, 30, 45]);
    });

    it("generates minute options with step=1", () => {
      const tp = useTimePicker({ minuteStep: 1 });
      expect(tp.minuteOptions.value).toHaveLength(60);
    });
  });
});
