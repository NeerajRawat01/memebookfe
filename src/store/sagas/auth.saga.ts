import { authService } from "@/services/apiServices/authService";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  signIn,
  signInCompleted,
  signInError,
  signOut,
  signOutCompleted,
  signOutError,
  signUp,
  signUpCompleted,
  signUpError,
} from "../slices/authSlice";
import Router from "next/router";

function* signinSaga(
  data: PayloadAction<{ email: string; password: string }>
): any {
  const email = data.payload.email;
  const password = data.payload.password;
  try {
    yield call(authService.signIn, email, password);
    yield put(signInCompleted());
    alert("Successfully Signed In");
    Router.push("/");
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
    alert("Account Created Successfully");
  } catch (e: any) {
    alert("something went wrong");
    yield put(signUpError(e.message));
  }
}
function* signoutSaga(): any {
  try {
    yield call(authService.signOut);
    yield put(signOutCompleted());
    alert("Successfully signOut");
    Router.push("/signin-signup");
  } catch (e: any) {
    alert("something went wrong");
    yield put(signOutError(e.message));
  }
}

function* authSaga() {
  yield all([
    takeLatest(signUp, signupSaga),
    takeLatest(signIn, signinSaga),
    takeLatest(signOut, signoutSaga),
  ]);
}

export default authSaga;
