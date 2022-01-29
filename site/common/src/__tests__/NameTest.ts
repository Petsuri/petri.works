import { Name } from '../Name';
import { NameBuilder } from '../__builders__/NameBuilder';

describe('Name', () => {
  describe('isValid', () => {
    ['P', 'Petri', '12345678901234567890123456789012345678901234567890'].forEach((value) => {
      it(`should be true with valid name: ${value}`, () => {
        const actual = Name.isValid(value);

        expect(actual).toBe(true);
      });
    });

    ['P', 'Petri', '12345678901234567890123456789012345678901234567890'].forEach((expected) => {
      it(`should create instance with correct name: ${expected}`, () => {
        const sut = new NameBuilder().withName(expected).build();

        const actual = sut.name;

        expect(actual).toBe(expected);
      });
    });

    [null, undefined, '', '123456789012345678901234567890123456789012345678901'].forEach(
      (value) => {
        it(`should be false with invalid name: ${value}`, () => {
          const actual = Name.isValid(value);

          expect(actual).toBe(false);
        });
      }
    );

    ['', '123456789012345678901234567890123456789012345678901'].forEach((value) => {
      it(`should throw exception when trying to create instance: ${value}`, () => {
        const sut = new NameBuilder().withName(value);

        expect(sut.build).toThrow(Error);
      });
    });
  });
});
