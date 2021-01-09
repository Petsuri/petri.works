import { failure, Result, success } from "@petriworks/common";
import { ObjectSchema, ValidationError as YupValidationError } from "yup";

export type ValidationError = {
  readonly field: string;
  readonly message: string;
};

const mapToError = (errors: YupValidationError): ValidationError[] => {
  return errors.inner.map((error) => {
    return { field: error.path, message: error.message } as ValidationError;
  });
};

function parseInput<T>(input: string | null): Result<T, ValidationError[]> {
  try {
    const values = input === null ? {} : JSON.parse(input);
    return success(values as T);
  } catch (_) {
    return failure([{ field: "input", message: "input is not valid JSON" }]);
  }
}

export async function validateSchema<T>(
  input: string | null,
  schema: ObjectSchema<any>
): Promise<Result<T, ValidationError[]>> {
  const json = parseInput<T>(input);
  if (json.ok) {
    return await schema
      .validate(json.value, { strict: true, abortEarly: false })
      .then((value) => success(value as T))
      .catch((errors: YupValidationError) => {
        return failure(mapToError(errors));
      });
  }

  return json;
}
