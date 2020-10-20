import { all } from "redux-saga/effects";
import { authSaga } from "../redux/ducks/auth";

export default function* () {
  yield all([authSaga()]);
}
