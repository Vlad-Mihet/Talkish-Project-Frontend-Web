// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
export const tuple = <T extends string[]>(...args: T): T => args;
export const tupleNum = <T extends number[]>(...args: T): T => args;

/**
 * Extract the type of an element of an array/tuple without performing indexing
 */
export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;

/**
 * https://github.com/Microsoft/TypeScript/issues/29729
 */
// eslint-disable-next-line no-use-before-define
export type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);

export type Data = Record<string, unknown>;
export type Key = string | number;
export type Values<T> = T[keyof T];
export type OmitType<T> = Omit<T, 'type'>;

export type WithRequired<T, K extends keyof T> = Exclude<T, K> & Required<Pick<T, K>>;
export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type SyntheticEvent<E extends Event, T extends Element> = E & { target: T; };
export type SyntheticInputEvent<T extends Element = HTMLInputElement>
  = SyntheticEvent<InputEvent, T>;
export type SyntheticMouseEvent<T extends Element = HTMLElement> = SyntheticEvent<MouseEvent, T>;

export type ExcludeNullish = <T>(x: T | null | undefined) => x is T;
export type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T;

// An object that can be mapped through with strings
export type StringMap = { [key: string]: string; };
