import { formatPeriod } from "../../formatting/timeFormatting";

describe("timeFormatting.ts", () => {
  describe("formatPeriod", () => {
    const t = (index: string) => index;

    it("should return expected formatting for start and end dates", () => {
      const actual = formatPeriod(t, new Date(2020, 0, 1), new Date(2020, 11, 31));

      expect(actual).toBe("1/2020 - 12/2020");
    });

    it("should return translation for present when end date is missing", () => {
      const actual = formatPeriod(t, new Date(2020, 5, 1), null);

      expect(actual).toBe("6/2020 - cv.present");
    });
  });
});
