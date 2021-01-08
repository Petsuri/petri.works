import { failure, success, unit, Unit } from "@petriworks/common";
import { render, fireEvent, wait } from "@testing-library/react";
import { ApiClientStubBuilder } from "../../__builders__/ApiClientStubBuilder";
import { SubscribeBuilder } from "../../__builders__/career/SubscribeBuilder";

describe("Subscribe.tsx", () => {

  [{ field: "name", values: { name: "", email: "petri@petri.works" } },
  { field: "email", values: { name: "Petri", email: "petri@" } }].forEach(value => {
    it(`should not send API request, when given ${value.field} is not valid`, async () => {
      const client = new ApiClientStubBuilder<Unit>().build();
      const { findByTestId } = render(new SubscribeBuilder().withApiClient(client).build());
      const submitButton = await findByTestId("subscribe-button-submit");
      const nameInput = (await findByTestId("input-name")).querySelector("input") as HTMLInputElement;
      const emailInput = (await findByTestId("input-email")).querySelector("input") as HTMLInputElement;

      fireEvent.change(nameInput, { target: { value: value.values.name } });
      fireEvent.change(emailInput, { target: { value: value.values.email } });
      fireEvent.click(submitButton);
      await wait();

      expect(client.send).not.toHaveBeenCalled();
    });
  });

  it("should send API request, when valid name and email is given", async () => {
    const client = new ApiClientStubBuilder<Unit>().build();
    const { findByTestId } = render(new SubscribeBuilder().withApiClient(client).build());
    const submitButton = await findByTestId("subscribe-button-submit");
    const nameInput = (await findByTestId("input-name")).querySelector("input") as HTMLInputElement;
    const emailInput = (await findByTestId("input-email")).querySelector("input") as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "Petri" } });
    fireEvent.change(emailInput, { target: { value: "petri@petri.works" } });
    fireEvent.click(submitButton);
    await wait();

    expect(client.send).toHaveBeenCalledTimes(1);
  });

  it("should call subscribe success after successfull subscription", async () => {
    const subscribeSucceeded = jest.fn();
    const subscribeError = jest.fn();
    const client = new ApiClientStubBuilder<Unit>().withSend(success(unit())).build();
    const { findByTestId } = render(
      new SubscribeBuilder().withApiClient(client).withSubscribeSucceeded(subscribeSucceeded).withSubscribeError(subscribeError).build()
    );
    const submitButton = await findByTestId("subscribe-button-submit");
    const nameInput = (await findByTestId("input-name")).querySelector("input") as HTMLInputElement;
    const emailInput = (await findByTestId("input-email")).querySelector("input") as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "Petri" } });
    fireEvent.change(emailInput, { target: { value: "petri@petri.works" } });
    fireEvent.click(submitButton);
    await wait();

    expect(subscribeSucceeded).toHaveBeenCalledTimes(1);
    expect(subscribeError).not.toHaveBeenCalled();
  });

  it("should reset form values after successfull subscription", async () => {
    const client = new ApiClientStubBuilder<Unit>().withSend(success(unit())).build();
    const { findByTestId } = render(
      new SubscribeBuilder().withApiClient(client).build()
    );
    const submitButton = await findByTestId("subscribe-button-submit");
    const nameInput = (await findByTestId("input-name")).querySelector("input") as HTMLInputElement;
    const emailInput = (await findByTestId("input-email")).querySelector("input") as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "Petri" } });
    fireEvent.change(emailInput, { target: { value: "petri@petri.works" } });
    fireEvent.click(submitButton);
    await wait();

    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
  });

  it("should call subscribe error after subscribing has failed", async () => {
    const subscribeSucceeded = jest.fn();
    const subscribeError = jest.fn();
    const client = new ApiClientStubBuilder<Unit>().withSend(failure({})).build();
    const { findByTestId } = render(
      new SubscribeBuilder().withApiClient(client).withSubscribeSucceeded(subscribeSucceeded).withSubscribeError(subscribeError).build()
    );
    const submitButton = await findByTestId("subscribe-button-submit");
    const nameInput = (await findByTestId("input-name")).querySelector("input") as HTMLInputElement;
    const emailInput = (await findByTestId("input-email")).querySelector("input") as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "Petri" } });
    fireEvent.change(emailInput, { target: { value: "petri@petri.works" } });
    fireEvent.click(submitButton);
    await wait();

    expect(subscribeError).toHaveBeenCalledTimes(1);
    expect(subscribeSucceeded).not.toHaveBeenCalled();
  });

  it("should not reset form values after subscribing has failed", async () => {
    const client = new ApiClientStubBuilder<Unit>().withSend(failure({})).build();
    const { findByTestId } = render(
      new SubscribeBuilder().withApiClient(client).build()
    );
    const submitButton = await findByTestId("subscribe-button-submit");
    const nameInput = (await findByTestId("input-name")).querySelector("input") as HTMLInputElement;
    const emailInput = (await findByTestId("input-email")).querySelector("input") as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "Petri" } });
    fireEvent.change(emailInput, { target: { value: "petri@petri.works" } });
    fireEvent.click(submitButton);
    await wait();

    expect(nameInput.value).toBe("Petri");
    expect(emailInput.value).toBe("petri@petri.works");
  });

});