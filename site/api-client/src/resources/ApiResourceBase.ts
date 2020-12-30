export abstract class ApiResourceBase {
  private _httpMethod: string;
  private _route: string;

  public constructor(httpMethod: string, route: string) {
    this._httpMethod = httpMethod;
    this._route = route;
  }

  public get httpMethod(): string {
    return this._httpMethod;
  }

  public get route(): string {
    return this._route;
  }
}
