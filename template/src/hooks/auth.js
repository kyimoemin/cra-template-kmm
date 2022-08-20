import { notification } from "antd";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { apis } from "src/apis";
import { actions } from "src/redux/actions";

export function useAuth() {
  return useSelector(
    /**
     *
     * @param {AppState} state
     * @returns
     */
    (state) => state.auth.data
  );
}

export function useLogout() {
  const dispatch = useDispatch();
  return () => dispatch(actions.auth.clearAuth());
}

export function useLogin() {
  const dispatch = useDispatch();

  return useMutation(apis.auth.login, {
    onSuccess(data) {
      dispatch(actions.auth.setAuth(data));
    },
    onError(error) {
      notification.error({ message: error?.message });
    },
  });
}
