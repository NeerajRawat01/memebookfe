import authReducer from "./authSlice";
import memeReducer from "./authSlice";
export const appReducer = {
  auth: authReducer,
  memes:memeReducer,
};
