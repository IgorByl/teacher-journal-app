import { combineReducers, Reducer } from "redux";

import { studentsReducer } from "./students";
import { statisticReducer } from "./statistic";

export const rootReducer: Reducer = combineReducers({
  studentsReducer,
  statisticReducer,
});
