import { failure, success } from "@petriworks/common";
import * as Yup from "yup";
import { validateSchema } from "../validate";

describe("validate", () => {
  describe("validateSchema", () => {
    type TestType = {
      readonly name: string;
    };
    const TestSchema = Yup.object().noUnknown(true).shape({
      name: Yup.string().required().min(1).max(5),
    });

    [
      {
        input: `{}`,
        failure: [{ field: "name", message: "name is a required field" }],
      },
      {
        input: `{"name":"123456"}`,
        failure: [{ field: "name", message: "name must be at most 5 characters" }],
      },
      {
        input: `{"name":""}`,
        failure: [
          { field: "name", message: "name is a required field" },
          { field: "name", message: "name must be at least 1 characters" },
        ],
      },
      {
        input: null,
        failure: [{ field: "name", message: "name is a required field" }],
      },
      {
        input: `{"name": "XXX", "email": "petri@petri.works"}`,
        failure: [{ field: "", message: "this field has unspecified keys: email" }]
      }
    ].forEach((value) => {
      it(`should return false with invalid input '${value.input}'`, async () => {
        const actual = await validateSchema<TestType>(value.input, TestSchema);

        const expected = failure(value.failure);
        expect(actual).toStrictEqual(expected);
      });
    });

    it("should return true with valid input", async () => {
      const actual = await validateSchema<TestType>(`{"name": "X"}`, TestSchema);

      const expected = success({ name: "X" } as TestType);
      expect(actual).toStrictEqual(expected);
    });

    it("should return failure when given invalid JSON", async () => {
      const actual = await validateSchema<TestType>(``, TestSchema);

      const expected = failure([{ field: "input", message: "input is not valid JSON" }]);
      expect(actual).toStrictEqual(expected);
    });
  });
});
