import { all } from "redux-saga/effects";
import { saga as authSaga } from "../redux/ducks/companies";
import { saga as companiesSaga } from "../redux/ducks/auth";

export default function* () {
  yield all([authSaga(), companiesSaga()]);
}
