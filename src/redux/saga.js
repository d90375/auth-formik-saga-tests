import { all } from "redux-saga/effects";
import { authSaga } from "../redux/ducks/auth";
import { companiesSaga } from "../redux/ducks/companies";

export default function* () {
  yield all([authSaga(), companiesSaga()]);
}
