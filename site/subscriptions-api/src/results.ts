import { ValidationError } from '@petriworks/api-contracts';
import { APIGatewayProxyResult } from 'aws-lambda';

export type SupportedStatusCodes = 204 | 400;

export const noContent = (): APIGatewayProxyResult => {
  return toResult(204);
};

export const validationError = (errors: ValidationError[]): APIGatewayProxyResult => {
  return toResult(400, errors);
};

const toResult = (statusCode: SupportedStatusCodes, body?: object): APIGatewayProxyResult => {
  return {
    statusCode,
    body: body === undefined ? '' : JSON.stringify(body, null, 2),
    isBase64Encoded: false,
  };
};
