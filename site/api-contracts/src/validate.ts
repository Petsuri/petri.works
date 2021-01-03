import { failure, Result, success } from "@petriworks/common";
import { ObjectSchema, ValidationError as YupValidationError } from "yup";

export type ValidationError = {
  field: string;
  message: string;
};

const mapToError = (errors: YupValidationError): ValidationError[] => {
  return errors.inner.map((error) => {
    return { field: error.path, message: error.message } as ValidationError;
  });
};

export async function validateSchema<T>(
  input: string | null,
  schema: ObjectSchema<any>
): Promise<Result<T, ValidationError[]>> {
  const values = input === null ? {} : JSON.parse(input);
  return await schema
    .validate(values, { strict: false, abortEarly: false, stripUnknown: true })
    .then((value) => success(value as T))
    .catch((errors: YupValidationError) => {
      return failure(mapToError(errors));
    });
}
