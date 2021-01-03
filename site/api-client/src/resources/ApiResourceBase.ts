export type HttpMethod = "GET" | "POST";

export abstract class ApiResourceBase {
  private _httpMethod: HttpMethod;
  private _route: string;
  private _body: string | null;

  protected constructor(httpMethod: HttpMethod, route: string, body: object | null = null) {
    this._httpMethod = httpMethod;
    this._route = route;
    this._body = body === null ? null : JSON.stringify(body);
  }

  public get httpMethod(): HttpMethod {
    return this._httpMethod;
  }

  public get route(): string {
    return this._route;
  }

  public get body(): string | null {
    return this._body;
  }
}
