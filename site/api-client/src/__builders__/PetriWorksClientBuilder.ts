import { PetriWorksClient } from "../PetriWorksClient";
import { Request } from "../Request";
import { Response } from "../Response";
import { RequestStubBuilder } from "./RequestStubBuilder";
import { ResponseStubBuilder } from "./ResponseStubBuilder";

export class PetriWorksClientBuilder {
  private _request: Request = new RequestStubBuilder().build();
  private _response: Response = new ResponseStubBuilder().build();

  public withRequest(value: Request): PetriWorksClientBuilder {
    this._request = value;
    return this;
  }

  public withResponse(value: Response): PetriWorksClientBuilder {
    this._response = value;
    return this;
  }

  public build(): PetriWorksClient {
    return new PetriWorksClient(this._request, this._response);
  }
}