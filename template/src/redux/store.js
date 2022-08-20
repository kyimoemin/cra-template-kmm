import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { getPreloadRedux, saveRedux } from "./middleware";
import auth from "./slices/auth";
// import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth,
});

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getPreloadRedux(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([saveRedux]),
});

/**
 *
 * @typedef {ReturnType<typeof store.getState>} AppState
 */

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
