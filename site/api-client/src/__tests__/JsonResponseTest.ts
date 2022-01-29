import { failure, success } from '@petriworks/common';
import { JsonResponseBuilder } from '../__builders__/JsonResponseBuilder';

describe('Response', () => {
  describe('handleResult', () => {
    type TestType = {
      readonly value: String;
    };

    [200, 299].forEach((httpStatusCode) => {
      it(`should return success when https status code is: '${httpStatusCode}`, () => {
        const sut = new JsonResponseBuilder().build();

        const actual = sut.handleResult<TestType>({ body: `{"value": ""}`, httpStatusCode });

        const expected = success({ value: '' });
        expect(actual).toStrictEqual(expected);
      });
    });

    it('should return validation error with http status code 400', () => {
      const sut = new JsonResponseBuilder().build();

      const actual = sut.handleResult<TestType>({
        body: `{"field": "email", "message": "invalid"}`,
        httpStatusCode: 400,
      });

      const expected = failure({ field: 'email', message: 'invalid' });
      expect(actual).toStrictEqual(expected);
    });
    [401, 500].forEach((httpStatusCode) => {
      it(`should return body as error when http status code is: ${httpStatusCode}`, () => {
        const sut = new JsonResponseBuilder().build();

        const actual = sut.handleResult<TestType>({
          body: `{"error": "invalid request"}`,
          httpStatusCode,
        });

        const expected = failure({ error: 'invalid request' });
        expect(actual).toStrictEqual(expected);
      });
    });
  });
});
