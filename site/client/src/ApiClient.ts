import { defaultClient, ApiClient } from '@petriworks/api-client';
import { getApiUri } from './environmentVariables';

export const client = (): ApiClient => {

  const host = getApiUri();
  return defaultClient(host);
};

