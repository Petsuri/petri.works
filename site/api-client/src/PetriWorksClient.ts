import { Request } from "./Request";
import { Response } from "./Response";
import { ApiResourceBase } from "./resources/ApiResourceBase";
import { Result } from "@petriworks/common";
import { ValidationError } from "@petriworks/api-contracts";

export interface ApiClient {
  send<T>(resource: ApiResourceBase): Promise<Result<T, ValidationError[] | object>>;
}

export class PetriWorksClient implements ApiClient {
  private _request: Request;
  private _response: Response;

  public constructor(request: Request, response: Response) {
    this._request = request;
    this._response = response;
  }

  public async send<T>(resource: ApiResourceBase): Promise<Result<T, ValidationError[] | object>> {
    return await this._request
      .send(resource)
      .then((result) => {
        return this._response.handleResult<T>(result);
      })
      .catch((result) => {
        return this._response.handleResult<T>(result);
      });
  }
}
