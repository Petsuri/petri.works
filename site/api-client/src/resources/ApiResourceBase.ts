export type Method = "GET" | "POST";

export abstract class ApiResourceBase {
  private _httpMethod: Method;
  private _route: string;
  private _body: string | null;

  public constructor(httpMethod: Method, route: string, body: object | null = null) {
    this._httpMethod = httpMethod;
    this._route = route;
    this._body = body === null ? null : JSON.stringify(body);
  }

  public get httpMethod(): Method {
    return this._httpMethod;
  }

  public get route(): string {
    return this._route;
  }

  public get body(): string | null {
    return this._body;
  }
}
