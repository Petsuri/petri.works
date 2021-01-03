import { Request, RequestResult } from "../Request";

export class RequestStubBuilder {
  private _send: Promise<RequestResult> = Promise.resolve({ body: `{}`, httpStatusCode: 201 });

  public withSend(value: Promise<RequestResult>): RequestStubBuilder {
    this._send = value;
    return this;
  }

  public withSendAsRejected(): RequestStubBuilder {
    this._send = Promise.reject({ body: `{}`, httpStatusCode: 400 });
    return this;
  }

  public build(): Request {
    return {
      send: jest.fn().mockReturnValue(this._send),
    };
  }
}
