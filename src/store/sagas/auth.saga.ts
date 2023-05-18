import { all, put, takeLatest } from "redux-saga/effects";
import { signUp, signUpCompleted, signUpError } from "../slices/authSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { PayloadAction } from "@reduxjs/toolkit";
import { auth } from "@/firebase/firebase";

function* signinSaga(data: any): any {}

function* signupSaga(
  data: PayloadAction<{ email: string; password: string }>
): any {
  try {
    console.log("saga");
    const response = createUserWithEmailAndPassword(
      auth,
      data.payload.email,
      data.payload.password
    ).then((res) => {
      // Signed in

      res.user;
    });
    console.log("response", response);
    yield put(signUpCompleted());
  } catch (e: any) {
    console.log(e.message);
    yield put(signUpError(e.message));
  }
}

function* authSaga() {
  yield all([takeLatest(signUp, signupSaga)]);
}

export default authSaga;
