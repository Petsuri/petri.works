export enum CredentialsState {
  Undefined,
  Exists,
  Missing,
}

function exists(): boolean {
  return sessionStorage.getItem('credentials') !== null;
}

export function getCredentialsState(): CredentialsState {
  return exists() ? CredentialsState.Exists : CredentialsState.Missing;
}
