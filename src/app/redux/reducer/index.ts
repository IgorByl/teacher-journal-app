import { combineReducers, Reducer } from "redux";

import { counterReducer } from "../reducer/counter";
import { studentsReducer } from "../reducer/students";

export const rootReducer: Reducer = combineReducers({
  counterReducer,
  studentsReducer,
});
