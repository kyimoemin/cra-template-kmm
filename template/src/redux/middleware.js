import { utils } from "src/utils";

export const saveRedux = ({ getState }) => {
  return (nextDispatch) => (action) => {
    const returnValue = nextDispatch(action);
    const state = getState();
    utils.storage.local.setItem("redux", state);
    return returnValue;
  };
};

export function getPreloadRedux() {
  return utils.storage.local.getItem("redux") || {};
}
