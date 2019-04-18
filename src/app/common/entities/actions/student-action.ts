import { IStudent } from "../student";

export type StudentActionTypes =
| ISetData
| ISetStudentToStore
| ISetNewSubject;

export interface ISetData {
  type: StudentActions.SET_DATA;
  payload: IStudent[];
}

export interface ISetStudentToStore {
  type: StudentActions.SET_STUDENT;
  payload: IStudent[];
}

export interface ISetNewSubject {
  type: StudentActions.SET_SUBJECT;
  payload: IStudent[];
}

enum StudentActions {
  SET_DATA = "SET_DATA",
  GET_DATA = "GET_DATA",
  SET_STUDENT = "SET_STUDENT",
  SET_SUBJECT = "SET_SUBJECT",
  GET_DATA_REJECTED = "GET_DATA_REJECTED",
}
