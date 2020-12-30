export type SuccessType<S> = {
  ok: true;
  value: S;
};

export function success<T>(value: T): SuccessType<T> {
  return {
    ok: true,
    value: value,
  };
}

export type FailureType<E> = {
  ok: false;
  error: E;
};

export function failure<T>(value: T): FailureType<T> {
  return {
    ok: false,
    error: value,
  };
}

export type Result<S, E> = SuccessType<S> | FailureType<E>;

export function map<S, E, SS>(
  current: Result<S, E>,
  f: (value: S) => SS
): Result<SS, E> {
  if (current.ok) {
    return success(f(current.value));
  }

  return current;
}

export function bind<S, E, SS>(
  current: Result<S, E>,
  f: (value: S) => Result<SS, E>
): Result<SS, E> {
  if (current.ok) {
    return f(current.value);
  }

  return current;
}
