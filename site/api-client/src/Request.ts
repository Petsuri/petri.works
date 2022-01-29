import { ApiResourceBase } from './resources/ApiResourceBase';

export interface Request {
  send(resource: ApiResourceBase): Promise<RequestResult>;
}

export type RequestResult = {
  readonly body: string;
  readonly httpStatusCode: number;
};
