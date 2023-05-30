import authReducer from "./authSlice";
import memeReducer from "./authSlice";
import sectionReducer from "./sectionSlice";
import userReducer from "./userSlice";
export const appReducer = {
  auth: authReducer,
  memes: memeReducer,
  section: sectionReducer,
  user: userReducer,
};
