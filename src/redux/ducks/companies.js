import { appName } from "../../config";
import { OrderedMap, Record } from "immutable";
import { v4 as uuid } from "uuid";
import { put, call, takeEvery } from "redux-saga/effects";

/**
 * Constants
 * */
export const moduleName = "companies";
const prefix = `${appName}/${moduleName}`;

export const ADD_COMPANY_REQUEST = `${prefix}/ADD_EVENT_REQUEST`;
export const ADD_COMPANY = `${prefix}/ADD_COMPANY`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: false,
  loaded: false,
});

const CompaniesRecord = Record({
  id: null,
  country: "",
  city: "",
  zip: null,
  address: "",
  company: "",
});

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_COMPANY:
      return state.setIn(["entities", payload.id], payload);

    default:
      return state;
  }
}

/**
 * Selectors
 * */

/**
 * Action Creators
 * */

export const createCompany = (event) => ({
  type: ADD_COMPANY_REQUEST,
  payload: event,
});

/**
 * Sagas
 * */

export const addCompanySaga = function* ({ payload }) {
  const id = yield call(uuid);

  yield put({
    type: ADD_COMPANY,
    payload: {
      id,
      ...payload,
    },
  });
};

export const saga = function* () {
  yield takeEvery(ADD_COMPANY_REQUEST, addCompanySaga);
};
