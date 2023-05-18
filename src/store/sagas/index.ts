import { all, fork } from "redux-saga/effects";
import memeSaga from "./meme.saga";
import authSaga from "./auth.saga";

export default function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(memeSaga)]);
}
