import { failure, Result, success } from '@petriworks/common';

export enum CredentialsState {
  Undefined,
  Exists,
  Missing,
}

export type Credentials = {
  readonly token: string;
  readonly refreshToken: string;
  readonly validUntil: Date;
  readonly tokenType: string;
};

const CredentialsKey = 'credentials';

function exists(): boolean {
  return sessionStorage.getItem(CredentialsKey) !== null;
}

export function getCredentialsState(): CredentialsState {
  return exists() ? CredentialsState.Exists : CredentialsState.Missing;
}

export function save(credentials: Credentials): void {
  sessionStorage.setItem(CredentialsKey, JSON.stringify(credentials));
}

export function getCredentials(): Result<Credentials, string> {
  const credentials = sessionStorage.getItem(CredentialsKey);
  if (credentials === null) {
    return failure('Credentials are not stored');
  }

  return success<Credentials>(JSON.parse(credentials));
}
