import axios from "axios";
import { ApiResourceBase } from "./resources/ApiResourceBase";

export interface ApiClient {
  send(resource: ApiResourceBase): Promise<string>
}

export class PetriWorksClient implements ApiClient {
  private _apiUrl: string;

  public constructor(apiUrl: string) {
    this._apiUrl = apiUrl;
  }

  public async send(resource: ApiResourceBase): Promise<string> {
    const result = await axios.get<string>(this._apiUrl + resource.route);
    return result.data;
  }
}
