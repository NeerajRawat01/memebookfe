import { all, takeLatest } from "redux-saga/effects";
import { increment } from "../slices/authSlice";

function* loginSaga(data: any): any {
}

function* fetchLoggedInUserSaga(): any {}

function* logoutSaga(): any {}

function* authSaga() {
  yield all([takeLatest(increment, loginSaga)]);
}

export default authSaga;
