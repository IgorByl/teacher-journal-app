import { combineReducers, Reducer } from "redux";

import { counterReducer } from "../reducer/counter";

export const rootReducer: Reducer = combineReducers({
  counterReducer,
});
