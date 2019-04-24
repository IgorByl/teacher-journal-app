import { IStudent } from "../student";

export type StudentActionTypes =
| ISetLoadedStudentsToStore
| ISetNewStudentToStore
| ISetStudentsToStore
| ISetStudentsWithNewSubject;

export interface ISetLoadedStudentsToStore {
  type: StudentActions.SET_LOADED_DATA_TO_STORE;
  payload: IStudent[];
}

export interface ISetNewStudentToStore {
  type: StudentActions.SET_STUDENT_TO_STORE;
  payload: IStudent;
}

export interface ISetStudentsToStore {
  type: StudentActions.SET_STUDENTS_TO_STORE;
  payload: IStudent[];
}

export interface ISetStudentsWithNewSubject {
  type: StudentActions.SET_STUDENTS_WITH_NEW_SUBJECT;
  payload: IStudent[];
}

enum StudentActions {
  SET_LOADED_DATA_TO_STORE = "SET_LOADED_DATA_TO_STORE",
  SET_STUDENT_TO_STORE = "SET_STUDENT_TO_STORE",
  SET_STUDENTS_WITH_NEW_SUBJECT = "SET_STUDENTS_WITH_NEW_SUBJECT",
  SET_STUDENTS_TO_STORE = "SET_STUDENTS_TO_STORE"
}
