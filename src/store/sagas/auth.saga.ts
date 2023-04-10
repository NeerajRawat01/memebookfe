import { all, takeLatest } from "redux-saga/effects";

function* loginSaga(data: any): any {}

function* fetchLoggedInUserSaga(): any {}

function* logoutSaga(): any {}

function* authSaga() {
  yield all([]);
}

export default authSaga;
