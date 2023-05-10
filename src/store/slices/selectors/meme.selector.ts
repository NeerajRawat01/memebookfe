import { createSelector } from "reselect";
import { memeSelector } from "./app.selectors";

export const memeListSelector = createSelector([memeSelector], (memeState) =>
  Object.values(memeState.entities || {})
);

export const memeListLoadingSelector = createSelector(
  [memeSelector],
  (memeState) => memeState.loadingList
);
