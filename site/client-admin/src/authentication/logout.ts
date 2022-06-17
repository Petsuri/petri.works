import { getLoginClientId, getLoginHost, getPetriWorksUri } from '../environmentVariables';

export function getLogoutUri(): string {
  const host = getLoginHost();
  const clientId = getLoginClientId();
  const petriWorksUri = getPetriWorksUri();

  return `${host}logout?client_id=${clientId}&logout_uri=${petriWorksUri}`;
}
