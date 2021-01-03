import { Request, RequestResult } from "./Request";
import { ApiResourceBase } from "./resources/ApiResourceBase";
import { AxiosPromise, AxiosRequestConfig } from "axios";

export type AxiosFunction = {
  (config: AxiosRequestConfig): AxiosPromise<string>;
};

export class AxiosRequest implements Request {
  private _apiBaseUrl: string;
  private _axios;

  public constructor(apiBaseUrl: string, axios: AxiosFunction) {
    this._apiBaseUrl = apiBaseUrl;
    this._axios = axios;
  }

  public async send(resource: ApiResourceBase): Promise<RequestResult> {
    const options: { [k: string]: any } = {
      url: this._apiBaseUrl + resource.route,
      method: resource.httpMethod,
    };

    if (resource.body !== null) {
      options.body = resource.body;
    }

    const response = await this._axios(options);
    return {
      body: !response.data ? JSON.stringify({}) : JSON.stringify(response.data),
      httpStatusCode: response.status,
    };
  }
}
