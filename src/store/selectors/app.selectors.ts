import { AppState } from "@/store";

export const authSelector = (state: AppState) => state.auth;
export const memeSelector = (state: AppState) => state.memes;
export const sectionSelector = (state: AppState) => state.section;
