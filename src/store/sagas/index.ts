import { all, fork } from "redux-saga/effects";
import authSaga from "./auth.saga";
import memeSaga from "./meme.saga";

export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(memeSaga)]);
}
