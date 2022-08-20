import axios from "axios";
import { store } from "src/redux/store";
import { envs } from "../constants";

let auth = store.getState().auth.data?.token;

store.subscribe(() => {
  auth = store.getState().auth.data?.token;
  setAccessToken(auth);
});

export let fetcher = axios.create({
  baseURL: envs.DOMAIN,
});
setAccessToken(auth);

fetcher.interceptors.response.use(
  (res) => {
    if (res?.data?.code) throw new Error(res?.data?.msg);
    return res?.data?.data || res?.data;
  },
  (error) => {
    const payload = error?.response?.data?.msg;
    // if (payload?.status === "UNAUTHORIZED")
    //   store.dispatch(actions.auth.clearAuth());
    return Promise.reject(payload || error);
  }
);

function setFetcherCommonHeader(key, value) {
  fetcher.defaults.headers.common[key] = value;
}

/**
 *
 * @param {string} token
 */
export function setAccessToken(token) {
  setFetcherCommonHeader("token", token);
}
