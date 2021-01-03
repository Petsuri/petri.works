import { Request } from "./Request";
import { Response } from "./Response";
import { ApiResourceBase } from "./resources/ApiResourceBase";
import { Result, Unit } from "@petriworks/common";
import { ValidationError } from "@petriworks/api-contracts";

export interface ApiClient {
  send<T>(resource: ApiResourceBase): Promise<Result<T | Unit, ValidationError[] | string>>;
}

export class PetriWorksClient implements ApiClient {
  private _request: Request;
  private _response: Response;

  public constructor(request: Request, response: Response) {
    this._request = request;
    this._response = response;
  }

  public async send<T>(
    resource: ApiResourceBase
  ): Promise<Result<T | Unit, ValidationError[] | string>> {
    const result = await this._request.send(resource);
    return this._response.handleResult<T>(result);
  }
}
