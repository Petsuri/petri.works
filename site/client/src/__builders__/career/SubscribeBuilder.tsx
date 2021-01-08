import React from "react";
import { ApiClient } from "@petriworks/api-client";
import Subscribe from "../../career/Subscribe";
import { ApiClientStubBuilder } from "../ApiClientStubBuilder";

export class SubscribeBuilder {

  private _apiClient: ApiClient = new ApiClientStubBuilder().build();
  private _subscribeSucceeded: () => void = () => { };
  private _subscribeError: () => void = () => { };

  public withApiClient(value: ApiClient): SubscribeBuilder {
    this._apiClient = value;
    return this;
  }

  public withSubscribeSucceeded(value: () => void): SubscribeBuilder {
    this._subscribeSucceeded = value;
    return this;
  }

  public withSubscribeError(value: () => void): SubscribeBuilder {
    this._subscribeError = value;
    return this;
  }

  public build(): React.ReactElement {
    return <Subscribe apiClient={this._apiClient} subscribeSucceeded={this._subscribeSucceeded} subscribeError={this._subscribeError} />
  }
}