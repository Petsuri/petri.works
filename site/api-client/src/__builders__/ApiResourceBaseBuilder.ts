import { ApiResourceBase, HttpMethod } from '../resources/ApiResourceBase';

export class ApiResourceBaseBuilder {
  private _httpMethod: HttpMethod = 'GET';
  private _route: string = 'xxx';
  private _body: object | null = null;

  public withHttpMethod(value: HttpMethod): ApiResourceBaseBuilder {
    this._httpMethod = value;
    return this;
  }

  public withRoute(value: string): ApiResourceBaseBuilder {
    this._route = value;
    return this;
  }

  public withBody(value: object | null): ApiResourceBaseBuilder {
    this._body = value;
    return this;
  }

  public build(): ApiResourceBase {
    return new TestingApiResourceBase(this._httpMethod, this._route, this._body);
  }
}

class TestingApiResourceBase extends ApiResourceBase {
  public constructor(httpMethod: HttpMethod, route: string, body: object | null = null) {
    super(httpMethod, route, body);
  }
}
