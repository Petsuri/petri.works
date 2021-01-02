import { NewSubscriptionSchema } from "../subscription";

describe("subscription", () => {
  describe("NewSubscriptionSchema", () => {
    [
      null,
      `{}`,
      `{"name":"", "email": "petri@petri.works"}`,
      `{"name": "Petri", "email": ""}`,
      `{"name": "Petri", "email": "petri@petri.works", "unkown": "XXX"}`,
    ].forEach((input) => {
      it(`should return false with invalid input: '${input}`, async () => {
        const actual = await NewSubscriptionSchema.isValid(input);

        expect(actual).toBe(false);
      });
    });

    it("should return true with valid input", async () => {
      const actual = await NewSubscriptionSchema.isValid({
        name: "Petri",
        email: "petri@petri.works",
      });

      expect(actual).toBe(true);
    });
  });
});
