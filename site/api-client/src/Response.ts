import { RequestResult } from './Request';
import { Result } from '@petriworks/common';
import { ValidationError } from '@petriworks/api-contracts';

export interface Response {
  handleResult<T>(result: RequestResult): Result<T, ValidationError[] | object>;
}
