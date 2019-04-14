import { combineEpics, Epic } from "redux-observable";
import { countEpic } from "./students";

export const rootEpic: Epic = combineEpics(countEpic);
