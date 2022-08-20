import { fetcher } from "./fetcher";

/**
 *
 * @param {LoginPayload} payload
 * @returns
 */
export const login = (payload) => fetcher.post("/api/login", payload);
