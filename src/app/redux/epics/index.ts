import { combineEpics, Epic } from "redux-observable";
import { getStudentEpic } from "./students";

export const rootEpic: Epic = combineEpics(getStudentEpic);
