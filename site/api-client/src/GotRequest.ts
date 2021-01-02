import { Request, RequestResult } from "./Request";
import { ApiResourceBase } from "./resources/ApiResourceBase";
import got from "got";

export class GotRequest implements Request {

  private _apiBaseUrl: string;

  public constructor(apiBaseUrl: string) {
    this._apiBaseUrl = apiBaseUrl;
  }

  public async send(resource: ApiResourceBase): Promise<RequestResult> {

    const options: { [k: string]: any } = {
      method: resource.httpMethod
    };

    if (resource.body !== null) {
      options.body = resource.body;
    }

    const response = await got(this._apiBaseUrl + resource.route, options);
    return {
      body: response.body,
      httpStatusCode: response.statusCode,
    };
  }

}