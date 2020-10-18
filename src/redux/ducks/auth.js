import { appName } from "../../config";
import { Record } from "immutable";
import { useSelector } from "react-redux";
import apiService from "../../services/api";

/**
 * Constants
 * */
export const moduleName = "auth";
const prefix = `${appName}/${moduleName}`;

export const SIGN_UP_PENDING = `${prefix}/SIGN_UP_PENDING`;
export const SIGN_UP_FULFILLED = `${prefix}/SIGN_UP_FULFILLED`;
export const SIGN_UP_REJECTED = `${prefix}/SIGN_UP_REJECTED`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  user: null,
  loading: false,
  error: null,
});

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload, error } = action;

  switch (type) {
    case SIGN_UP_PENDING:
      return state.set("loading", true);

    case SIGN_UP_FULFILLED:
      return state
        .set("laoding", false)
        .set("user", payload.user)
        .set("error", null);

    case SIGN_UP_REJECTED:
      return state.set("error", error).set("loading", false);

    default:
      return state;
  }
}

/**
 * Selectors
 * */

export const userSelector = (state) => state[moduleName].user;

/**
 * Custom Hooks
 */

export const useAuthorized = () => {
  const user = useSelector(userSelector);

  return !!user;
};

/**
 * Action Creators
 * */

export const signUp = (email, password) => async (dispatch) => {
  dispatch({
    type: SIGN_UP_PENDING,
  });

  try {
    const user = await apiService.signUp(email, password);

    dispatch({
      type: SIGN_UP_FULFILLED,
      payload: { user },
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_REJECTED,
      error,
    });
  }
};
