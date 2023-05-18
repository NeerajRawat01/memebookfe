import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  loading: boolean;
}
const initialState: AuthState = {
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.loading = true;
    },

    signIn: (state) => {
      state.loading = true;
    },
    signUpCompleted: (state) => {
      state.loading = false;
    },
    signInCompleted: (state, action: PayloadAction<number>) => {
      state.loading = false;
    },
    signUpError: (state) => {
      state.loading = true;
    },
    signInError: (state) => {
      state.loading = true;
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
