import { auth } from "@/firebase/firebase";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface UserState {
  verifyingUser: boolean;
  currentUser?: User;
}
const initialState: UserState = {
  verifyingUser: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser: (
      state,
      action: PayloadAction<{ user?: User; verifyingUser: boolean }>
    ) => {
      state.verifyingUser = action.payload.verifyingUser;
      state.currentUser = action.payload?.user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
