import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  /**
   * @type {ReduxState<Auth>}
   */
  initialState: {
    loading: false,
    data: null,
  },
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = undefined;
    },
    /**
     *
     * @param  state
     * @param {Action<string>} param1
     */
    setError(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    /**
     *
     * @param  state
     * @param {Action<Auth>} param1
     */
    setAuth(state, { payload }) {
      state.loading = false;
      state.error = undefined;
      state.data = payload;
    },
    clearAuth(state) {
      state.data = null;
      state.loading = false;
      state.error = undefined;
    },
  },
});

export const authActions = auth.actions;
export default auth.reducer;
