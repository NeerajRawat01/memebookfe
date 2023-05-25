import { createSelector } from "reselect";
import { sectionSelector } from "./app.selectors";

export const currentsectionSelector = createSelector(
  [sectionSelector],
  (sectionState) => sectionState.section
);
