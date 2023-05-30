import { auth } from "@/firebase/firebase";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface AuthState {
  signUpLoading: boolean;
  signInLoading: boolean;
  signOutLoading: boolean;
}
const initialState: AuthState = {
  signInLoading: false,
  signUpLoading: false,
  signOutLoading: false,
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

    signOut: (state) => {
      state.signOutLoading = true;
    },
    signUpCompleted: (state) => {
      state.signUpLoading = false;
    },
    signInCompleted: (state) => {
      state.signInLoading = false;
    },
    signOutCompleted: (state) => {
      state.signOutLoading = false;
    },
    signOutError: (state) => {
      state.signOutLoading = false;
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
  signOut,
  signOutCompleted,
  signOutError,
} = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
