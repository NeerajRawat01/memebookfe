import { createSelector } from "@reduxjs/toolkit";
import { userSelector } from "./app.selectors";

export const verifyingUserSelector = createSelector(
  [userSelector],
  (userState) => userState.verifyingUser
);

export const currentUserSelector = createSelector(
  [userSelector],
  (userState) => userState.currentUser
);
