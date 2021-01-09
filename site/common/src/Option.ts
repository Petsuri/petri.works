export type SomeType<T> = {
  isSome: true,
  value: T,
};

export type NoneType = {
  isSome: false,
};

export type Option<T> = SomeType<T> | NoneType;

export function some<T>(value: T): SomeType<T> {
  return {
    isSome: true,
    value: value,
  };
}

export function none(): NoneType {
  return {
    isSome: false,
  };
}