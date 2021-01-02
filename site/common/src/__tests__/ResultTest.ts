import { bind, failure, map, success } from "../Result";

describe("Result", () => {
  describe("map", () => {
    it("should return existing result when given failure", () => {
      const expected = failure("xxx");

      const actual = map(expected, (value: string) => value + value);

      expect(actual).toBe(expected);
    });
    it("should return new result when given success", () => {
      const current = success("1");

      const actual = map(current, (value: string) => Number(value) + 9);

      const expected = success(10);
      expect(actual).toEqual(expected);
    });
    it("should return new result containing result when function returns result", () => {
      const current = success("");

      const actual = map(current, (value: string) => success(value));

      const expected = success(success(""));
      expect(actual).toEqual(expected);
    });
  });
  describe("bind", () => {
    it("should return existing result when given failure", () => {
      const expected = failure("xxx");

      const actual = bind(expected, (value: string) => success(value + value));

      expect(actual).toBe(expected);
    });
    it("should return new result when given success", () => {
      const current = success("10");

      const actual = bind(current, (value: string) => success(Number(value) + 10));

      const expected = success(20);
      expect(actual).toEqual(expected);
    });
  });
});
