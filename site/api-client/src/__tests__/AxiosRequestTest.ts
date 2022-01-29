import { ApiResourceBase } from '../resources/ApiResourceBase';
import { ApiResourceBaseBuilder } from '../__builders__/ApiResourceBaseBuilder';
import { AxiosRequestBuilder } from '../__builders__/AxiosRequestBuilder';

describe('AxiosRequest', () => {
  describe('send', () => {
    it('should set correct request parameters for GET request', () => {
      const axios = jest.fn().mockReturnValue(Promise.resolve<any>({}));
      const sut = new AxiosRequestBuilder().withBaseUrl('xxx').withAxios(axios).build();

      sut.send(new ApiResourceBaseBuilder().withHttpMethod('GET').withRoute('/test').build());

      expect(axios).toHaveBeenCalledWith({ url: 'xxx/test', method: 'GET' });
    });

    it('should set correct request parameters for POST request', () => {
      const axios = jest.fn().mockReturnValue(Promise.resolve<any>({}));
      const sut = new AxiosRequestBuilder().withBaseUrl('yyy').withAxios(axios).build();

      sut.send(
        new ApiResourceBaseBuilder()
          .withHttpMethod('POST')
          .withRoute('/testing')
          .withBody({ a: 'b' })
          .build()
      );

      expect(axios).toHaveBeenCalledWith({
        url: 'yyy/testing',
        method: 'POST',
        data: `{"a":"b"}`,
        headers: { 'Content-Type': 'application/json' },
      });
    });

    it('should return response body and status with successful request', async () => {
      const axios = jest.fn().mockReturnValue(
        Promise.resolve<any>({ data: { a: 1 }, status: 200 })
      );
      const sut = new AxiosRequestBuilder().withBaseUrl('yyy').withAxios(axios).build();

      const actual = await sut.send(new ApiResourceBaseBuilder().build());

      expect(actual).toStrictEqual({ body: `{"a":1}`, httpStatusCode: 200 });
    });

    it("should return response empty body when request doesn't have response data", async () => {
      const axios = jest.fn().mockReturnValue(
        Promise.resolve<any>({ data: null, status: 201 })
      );
      const sut = new AxiosRequestBuilder().withBaseUrl('yyy').withAxios(axios).build();

      const actual = await sut.send(new ApiResourceBaseBuilder().build());

      expect(actual).toStrictEqual({ body: `{}`, httpStatusCode: 201 });
    });

    it('should return response body and status when request fails', async () => {
      const axios = jest.fn().mockReturnValue(
        Promise.reject<any>({ data: { message: 'error' }, status: 400 })
      );
      const sut = new AxiosRequestBuilder().withBaseUrl('yyy').withAxios(axios).build();

      const actual = await sut.send(new ApiResourceBaseBuilder().build());

      expect(actual).toStrictEqual({ body: `{"message":"error"}`, httpStatusCode: 400 });
    });
  });
});
