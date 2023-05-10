import { AppState } from "@/store";

export const authSelector = (state: AppState) => state.auth;
export const memeSelector = (state: AppState) => state.memes;
