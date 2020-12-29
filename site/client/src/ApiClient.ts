import { PetriWorksClient } from "@petriworks/api-client";

export const client = (): PetriWorksClient => {
  if (process.env.REACT_APP_API_HOST === undefined) {
    throw new Error("REACT_APP_API_HOST environment variable must be defined");
  }

  return new PetriWorksClient(process.env.REACT_APP_API_HOST);
};
