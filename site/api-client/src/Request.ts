import { ApiResourceBase } from "./resources/ApiResourceBase";

export interface Request {
  send(resource: ApiResourceBase): Promise<RequestResult>;
}

export type RequestResult = {
  body: string;
  httpStatusCode: number;
};
