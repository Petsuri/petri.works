import React from "react";
import { ApiClient } from "@petriworks/api-client";
import Subscribe from "../../career/Subscribe";
import { ApiClientStubBuilder } from "../ApiClientStubBuilder";

export class SubscribeBuilder {

  private _apiClient: ApiClient = new ApiClientStubBuilder().build();
  private _wasSubscriptionSuccessfull: (_: boolean) => void = jest.fn();

  public withApiClient(value: ApiClient): SubscribeBuilder {
    this._apiClient = value;
    return this;
  }

  public withWasSubscriptionSuccessfull(value: (_: boolean) => void): SubscribeBuilder {
    this._wasSubscriptionSuccessfull = value;
    return this;
  }

  public build(): React.ReactElement {
    return <Subscribe apiClient={this._apiClient} wasSubscriptionSuccessfull={this._wasSubscriptionSuccessfull} />
  }
}