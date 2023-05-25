import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface AuthState {
  signUpLoading: boolean;
  signInLoading: boolean;
}
const initialState: AuthState = {
  signInLoading: false,
  signUpLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.signUpLoading = true;
    },

    signIn: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.signInLoading = true;
    },
    signUpCompleted: (state) => {
      state.signUpLoading = false;
    },
    signInCompleted: (state, action: PayloadAction<User>) => {
      const uid = action.payload.uid;
      if (uid) localStorage.setItem("uid", JSON.stringify(uid));
      state.signInLoading = false;
    },
    signUpError: (state) => {
      state.signUpLoading = false;
    },
    signInError: (state) => {
      state.signInLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  signIn,
  signInCompleted,
  signUp,
  signUpCompleted,
  signInError,
  signUpError,
} = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
