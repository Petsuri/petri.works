import { AxiosFunction, AxiosRequest } from "../AxiosRequest";

export class AxiosRequestBuilder {

  private _baseUrl: string = "xxx";
  private _axios: AxiosFunction = jest.fn();

  public withBaseUrl(value: string): AxiosRequestBuilder {
    this._baseUrl = value;
    return this;
  }

  public withAxios(value: AxiosFunction): AxiosRequestBuilder {
    this._axios = value;
    return this;
  }

  public build(): AxiosRequest {
    return new AxiosRequest(this._baseUrl, this._axios);
  }

}