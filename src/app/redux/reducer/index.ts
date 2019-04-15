import { combineReducers, Reducer } from "redux";

import { studentsReducer } from "../reducer/students";

export const rootReducer: Reducer = combineReducers({
  studentsReducer,
});
