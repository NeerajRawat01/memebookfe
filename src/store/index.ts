// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import rootSaga from "./sagas";
import authReducer from "./slices/authSlice";
import memeReducer from "./slices/memeSlice";
import sectionReducer from "./slices/sectionSlice";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

// create a makeStore function
const makeStore = () => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = configureStore({
    reducer: {
      auth: authReducer,
      memes: memeReducer,
      section: sectionReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production",
  });

  // 3: Run your sagas on server
  sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;

// export an assembled wrapper
const wrapper = createWrapper<Store>(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export default wrapper;
