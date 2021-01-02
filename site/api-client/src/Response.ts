import { RequestResult } from "./Request";
import { Result, success, unit, Unit, failure, SuccessType, FailureType } from "@petriworks/common";
import { ValidationError } from "@petriworks/api-contracts";

export class Response {
  public handleResult<T>(result: RequestResult): Result<T, ValidationError[] | string> {

    if (200 <= result.httpStatusCode && result.httpStatusCode <= 299) {
      return Response.handleSuccess(result.body);
    }

    if (result.httpStatusCode === 400) {
      return Response.handleValidationError(result.body)
    }

    return failure(result.body);
  }

  private static handleSuccess<T>(body: string): SuccessType<T> {
    return success(JSON.parse(body) as T);
  }

  private static handleValidationError(body: string): FailureType<ValidationError[]> {
    return failure(JSON.parse(body) as ValidationError[]);
  }
}