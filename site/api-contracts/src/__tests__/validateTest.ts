import { failure, success } from "@petriworks/common";
import * as Yup from "yup";
import { validateSchema } from "../validate";

describe("validate", () => {
  describe("validateSchema", () => {
    type TestType = {
      name: string;
    };
    const TestSchema = Yup.object().shape({
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

    it("should remove fields not defined in schema", async () => {
      const actual = await validateSchema<TestType>(`{"name": "XXX", "email": "petri@petri.works"}`, TestSchema);

      const expected = success({ name: "XXX" } as TestType);
      expect(actual).toStrictEqual(expected);
    })
  });
});
