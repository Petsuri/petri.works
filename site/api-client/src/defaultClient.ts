import { AxiosRequest as AxiosRequest } from './AxiosRequest';
import { ApiClient, PetriWorksClient } from './PetriWorksClient';
import { JsonResponse } from './JsonResponse';
import axios from 'axios';

export const defaultClient = (apiBaseUrl: string): ApiClient => {
  return new PetriWorksClient(new AxiosRequest(apiBaseUrl, axios), new JsonResponse());
};
