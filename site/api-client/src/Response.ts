import { RequestResult } from "./Request";
import { Result, success, unit, Unit, failure, SuccessType, FailureType } from "@petriworks/common";
import { ValidationError } from "@petriworks/api-contracts";

export class Response {
  public handleResult<T>(result: RequestResult): Result<T, ValidationError[] | string> {

    if (200 <= result.httpStatusCode && result.httpStatusCode <= 299) {
      return success(JSON.parse(result.body) as T);
    }

    if (result.httpStatusCode === 400) {
      return failure(JSON.parse(result.body) as ValidationError[]);
    }

    return failure(result.body);
  }
}