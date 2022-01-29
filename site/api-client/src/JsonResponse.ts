import { RequestResult } from './Request';
import { Result, success, failure } from '@petriworks/common';
import { ValidationError } from '@petriworks/api-contracts';
import { Response } from './Response';

export class JsonResponse implements Response {
  public handleResult<T>(result: RequestResult): Result<T, ValidationError[] | object> {
    if (200 <= result.httpStatusCode && result.httpStatusCode <= 299) {
      return success(JSON.parse(result.body) as T);
    }

    if (result.httpStatusCode === 400) {
      return failure(JSON.parse(result.body) as ValidationError[]);
    }

    return failure(JSON.parse(result.body));
  }
}
