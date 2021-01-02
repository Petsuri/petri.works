import { AxiosRequest as AxiosRequest } from "./AxiosRequest"
import { ApiClient, PetriWorksClient } from "./PetriWorksClient"
import { Response } from "./Response";
import axios from "axios";

export const defaultClient = (apiBaseUrl: string): ApiClient => {
  return new PetriWorksClient(
    new AxiosRequest(apiBaseUrl, axios),
    new Response()
  );
};