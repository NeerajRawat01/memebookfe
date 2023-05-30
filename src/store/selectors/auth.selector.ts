import { createSelector } from "@reduxjs/toolkit";
import { authSelector } from "./app.selectors";

export const signUpLoadingSelector = createSelector(
  [authSelector],
  (authState) => authState.signUpLoading
);

export const signInLoadingSelector = createSelector(
  [authSelector],
  (authState) => authState.signInLoading
);
export const signOutLoadingSelector = createSelector(
  [authSelector],
  (authState) => authState.signOutLoading
);
