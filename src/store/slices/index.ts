import authReducer from "./authSlice";
import memeReducer from "./authSlice";
import sectionReducer from "./sectionSlice";
export const appReducer = {
  auth: authReducer,
  memes: memeReducer,
  section: sectionReducer,
};
