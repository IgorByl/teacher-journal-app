import { combineEpics, Epic } from "redux-observable";
import { loadStudentFromServerEpic } from "./students";

export const rootEpic: Epic = combineEpics(loadStudentFromServerEpic);
