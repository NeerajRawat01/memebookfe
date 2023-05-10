import { EntityIdentifier } from "@/models/entity";
import { Meme } from "@/models/meme";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MemeState {
  entities: { [id: EntityIdentifier]: Meme };
  loadingList: boolean;
  error?: string;
}

const initialState: MemeState = {
  entities: {},
  loadingList: false,
};

export const memeSlice = createSlice({
  name: "memes",
  initialState,
  reducers: {
    fetchMemes: (state) => {
      state.loadingList = true;
    },
    fetchMemesCompleted: (state, action: PayloadAction<Meme[]>) => {
      const memes = action.payload;
      memes.forEach((e) => {
        state.entities[e.id] = e;
      });
    },
    fetchMemesError: (state, action: PayloadAction<string>) => {
      state.error += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchMemes, fetchMemesCompleted, fetchMemesError } =
  memeSlice.actions;

const memeReducer = memeSlice.reducer;
export default memeReducer;
