import { failure, success } from "@petriworks/common";
import { RequestResult } from "../Request";
import { ApiResourceBaseBuilder } from "../__builders__/ApiResourceBaseBuilder";
import { PetriWorksClientBuilder } from "../__builders__/PetriWorksClientBuilder";
import { RequestStubBuilder } from "../__builders__/RequestStubBuilder";
import { ResponseStubBuilder } from "../__builders__/ResponseStubBuilder";

describe("PetriWorksClient", () => {
  describe("send", () => {
    it("should call request with given resource", () => {
      const expectedResource = new ApiResourceBaseBuilder().build();
      const request = new RequestStubBuilder().build();
      const sut = new PetriWorksClientBuilder().withRequest(request).build();

      sut.send<any>(expectedResource);

      expect(request.send).toHaveBeenCalledWith(expectedResource);
    });

    it("should call response with given resolved request result", async () => {
      const expectedResult: RequestResult = { body: `{"a": 29}`, httpStatusCode: 200 };
      const response = new ResponseStubBuilder<any>().build();
      const sut = new PetriWorksClientBuilder()
        .withRequest(new RequestStubBuilder().withSend(Promise.resolve(expectedResult)).build())
        .withResponse(response)
        .build();

      await sut.send<any>(new ApiResourceBaseBuilder().build());

      expect(response.handleResult).toHaveBeenCalledWith(expectedResult);
    });

    it("should return handled response when request was resolved", async () => {
      const sut = new PetriWorksClientBuilder()
        .withResponse(new ResponseStubBuilder<any>().withHandleResult(success("OK")).build())
        .build();

      const actual = await sut.send<any>(new ApiResourceBaseBuilder().build());

      const expected = success("OK");
      expect(actual).toStrictEqual(expected);
    });

    it("should call response with given rejected request result", async () => {
      const expectedResult: RequestResult = { body: `{"b": 20}`, httpStatusCode: 200 };
      const response = new ResponseStubBuilder<any>().build();
      const sut = new PetriWorksClientBuilder()
        .withRequest(new RequestStubBuilder().withSend(Promise.reject(expectedResult)).build())
        .withResponse(response)
        .build();

      await sut.send<any>(new ApiResourceBaseBuilder().build());

      expect(response.handleResult).toHaveBeenCalledWith(expectedResult);
    });


    it("should return handled response when request was rejected", async () => {
      const sut = new PetriWorksClientBuilder()
        .withRequest(new RequestStubBuilder().withSendAsRejected().build())
        .withResponse(new ResponseStubBuilder<any>().withHandleResult(failure({ error: true })).build())
        .build();

      const actual = await sut.send<any>(new ApiResourceBaseBuilder().build());

      const expected = failure({ error: true });
      expect(actual).toStrictEqual(expected);
    });
  });
});