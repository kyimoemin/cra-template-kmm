/**
 *
 * @typedef {any} Auth;
 */

/**
 * @template T
 * @typedef {{
 *  error?:string;
 *  loading:boolean;
 *  data:T
 * }} ReduxState
 *
 */

/**
 * @template T
 * @typedef {{
 * type:string;
 * payload:T
 * }} Action<T>
 */

/**
 * @template T
 *
 * @typedef {{[P in keyof T]?:T[keyof T]}} Optional<T>
 */

/**
 * @template T
 *
 * @typedef {T[keyof T]} ValueOf<T>
 */

/**
 * @typedef {"auth"|"redux"} StorageKeys
 *
 * @typedef {import("src/redux/store").AppState} AppState
 *
 * @typedef {import("src/i18n/en-US").KeyWords} KeyWords
 *
 */
