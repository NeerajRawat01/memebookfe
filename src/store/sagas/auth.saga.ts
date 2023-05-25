import { authService } from "@/services/apiServices/authService";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  signIn,
  signInCompleted,
  signInError,
  signUp,
  signUpCompleted,
  signUpError,
} from "../slices/authSlice";

function* signinSaga(
  data: PayloadAction<{ email: string; password: string }>
): any {
  const email = data.payload.email;
  const password = data.payload.password;
  try {
    const data = yield call(authService.signIn, email, password);
    yield put(signInCompleted(data));
  } catch (e: any) {
    alert("something went wrong");
    yield put(signInError(e.message));
  }
}

function* signupSaga(
  data: PayloadAction<{ email: string; password: string }>
): any {
  try {
    yield call(authService.signUp, data.payload.email, data.payload.password);
    yield put(signUpCompleted());
  } catch (e: any) {
    alert("something went wrong");
    yield put(signUpError(e.message));
  }
}

function* authSaga() {
  yield all([takeLatest(signUp, signupSaga), takeLatest(signIn, signinSaga)]);
}

export default authSaga;
