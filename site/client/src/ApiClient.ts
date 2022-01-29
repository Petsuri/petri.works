import { defaultClient, ApiClient } from '@petriworks/api-client';

export const client = (): ApiClient => {
  if (process.env.REACT_APP_API_HOST === undefined) {
    throw new Error('REACT_APP_API_HOST environment variable must be defined');
  }

  return defaultClient(process.env.REACT_APP_API_HOST);
};
