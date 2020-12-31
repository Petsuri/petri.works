import { EmailAddress } from "../EmailAddress";
import EmailAddressBuilder from "../__builders__/EmailAddressBuilder";

describe("EmailAddress", () => {
  describe("isValid", () => {
    ["petri@petri.works", "miikinpetri@gmail.com", "x@gmail.com"].forEach(
      (value) => {
        it(`should be true with valid email: ${value}`, () => {
          const actual = EmailAddress.isValid(value);

          expect(actual).toBe(true);
        });
      }
    );

    ["petri@petri.works", "miikinpetri@gmail.com", "x@gmail.com"].forEach(
      (expected) => {
        it(`should create instance with correct email: ${expected}`, () => {
          const sut = new EmailAddressBuilder().withEmail(expected).build();

          const actual = sut.email;

          expect(actual).toBe(expected);
        });
      }
    );

    [
      "petri.works",
      "petri@@petri.works",
      "@petri.works",
      "ää@petri.works",
      "()@petri.works",
      "petri@petri",
      "@",
      " petri@@petri.works",
      "petri@@petri.works ",
      null,
      undefined,
    ].forEach((value) => {
      it(`should be false with invalid email: ${value}`, () => {
        const actual = EmailAddress.isValid(value);

        expect(actual).toBe(false);
      });
    });

    [
      "petri.works",
      "petri@@petri.works",
      "@petri.works",
      "ää@petri.works",
      "()@petri.works",
    ].forEach((value) => {
      it(`should throw exception when trying to create instance: ${value}`, () => {
        const sut = new EmailAddressBuilder().withEmail(value);

        expect(sut.build).toThrow(Error);
      });
    });
  });
});
