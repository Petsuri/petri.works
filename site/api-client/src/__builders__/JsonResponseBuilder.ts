import { JsonResponse } from "../JsonResponse";

export class JsonResponseBuilder {
  public build(): JsonResponse {
    return new JsonResponse();
  }
}
