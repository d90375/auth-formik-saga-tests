import { put, call, all, takeEvery, fork, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { appName } from "../../config";
import { OrderedMap, Record } from "immutable";
import apiService from "../../services/api";

/**
 * Constants
 * */
export const moduleName = "companies";
const prefix = `${appName}/${moduleName}`;

export const ADD_COMPANY_REQUEST = `${prefix}/ADD_EVENT_REQUEST`;
export const ADD_COMPANY = `${prefix}/ADD_COMPANY`;

export const SYNC_COMPANIES_FULFILLED = `${prefix}/SYNC_COMPANIES_FULFILLED`;

export const FETCH_COMPANIES_FULFILLED = `${prefix}/FETCH_COMPANIES_FULFILLED`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: false,
  loaded: false,
});

const CompanyRecord = Record({
  id: null,
  country: "",
  city: "",
  zip: null,
  address: "",
  company: "",
});

const arrToMap = (arr) => {
  const map = arr.reduce((acc, el) => {
    acc[el.id] = new CompanyRecord(el);
    return acc;
  }, {});

  return new OrderedMap(map);
};

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_COMPANY:
      return state.setIn(["entities", payload.id], new CompanyRecord(payload));

    case SYNC_COMPANIES_FULFILLED:
    case FETCH_COMPANIES_FULFILLED:
      return state.set("entities", arrToMap(payload.company));

    default:
      return state;
  }
}

/**
 * Selectors
 * */

export const companiesListSelector = (state) =>
  state[moduleName].entities
    .valueSeq()
    .toArray()
    .sort((a, b) => (a.company < b.company ? -1 : 1));

/**
 * Action Creators
 * */

export const createCompany = (company) => ({
  type: ADD_COMPANY_REQUEST,
  payload: company,
});

/**
 * Sagas
 * */

export const addCompanySaga = function* ({ payload }) {
  yield call(apiService.addCompany, payload);
};

const createEventChanel = () => eventChannel(apiService.onCompaniesChange);

export const syncCompanies = function* () {
  const channel = yield call(createEventChanel);

  while (true) {
    const company = yield take(channel);

    yield put({
      type: SYNC_COMPANIES_FULFILLED,
      payload: { company },
    });
  }
};

export const companiesSaga = function* () {
  yield fork(syncCompanies);
  yield all([takeEvery(ADD_COMPANY_REQUEST, addCompanySaga)]);
};
