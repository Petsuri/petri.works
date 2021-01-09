import React from "react";
import { ApiClient } from "@petriworks/api-client";
import { ApiClientStubBuilder } from "../ApiClientStubBuilder";
import SubscribeForm from "../../career/SubscribeForm";

export class SubscribeFormBuilder {

  private _apiClient: ApiClient = new ApiClientStubBuilder().build();
  private _wasSubscriptionSuccessfull: (_: boolean) => void = jest.fn();

  public withApiClient(value: ApiClient): SubscribeFormBuilder {
    this._apiClient = value;
    return this;
  }

  public withWasSubscriptionSuccessfull(value: (_: boolean) => void): SubscribeFormBuilder {
    this._wasSubscriptionSuccessfull = value;
    return this;
  }

  public build(): React.ReactElement {
    return <SubscribeForm apiClient={this._apiClient} wasSubscriptionSuccessfull={this._wasSubscriptionSuccessfull} />
  }
}