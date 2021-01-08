import { ApiClient } from "@petriworks/api-client";
import { ValidationError } from "@petriworks/api-contracts";
import { Result, success } from "@petriworks/common";

export class ApiClientStubBuilder<T> {
  private _send: Result<T, ValidationError[] | object> = success({} as T);

  public withSend(value: Result<any, ValidationError[] | object>): ApiClientStubBuilder<T> {
    this._send = value;
    return this;
  }

  public build(): ApiClient {
    return {
      send: jest.fn().mockReturnValue(Promise.resolve(this._send))
    };
  }
}