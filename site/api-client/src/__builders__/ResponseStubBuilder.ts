import { ValidationError } from '@petriworks/api-contracts';
import { Result, success } from '@petriworks/common';
import { Response } from '../Response';

export class ResponseStubBuilder<T> {
  private _handleResult: Result<T, ValidationError[] | object> = success({} as T);

  public withHandleResult(value: Result<T, ValidationError[] | object>): ResponseStubBuilder<T> {
    this._handleResult = value;
    return this;
  }

  public build(): Response {
    return {
      handleResult: jest.fn().mockReturnValue(this._handleResult),
    };
  }
}
