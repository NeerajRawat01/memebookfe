import { sectionType } from "@/enums/sectionType";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface SectionState {
  section: string;
}
const initialState: SectionState = {
  section: sectionType.HOME,
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSection } = sectionSlice.actions;
const sectionReducer = sectionSlice.reducer;
export default sectionReducer;
