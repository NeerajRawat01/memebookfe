import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchMemes,
  fetchMemesCompleted,
  fetchMemesError,
} from "../slices/memeSlice";
import { memeService } from "@/services/apiServices/memeService";

function* fetchMemesSaga(): any {
  try {
    const response = yield call(memeService.fetchMemes);
    yield put(fetchMemesCompleted(response.data.memes));
  } catch (e: any) {
    yield put(fetchMemesError(e.message));
  }
}

function* memeSaga() {
  yield all([takeLatest(fetchMemes, fetchMemesSaga)]);
}

export default memeSaga;
