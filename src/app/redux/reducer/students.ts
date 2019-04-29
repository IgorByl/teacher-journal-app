import { StudentsActions } from "../actions";
import { IStudent, StudentActionTypes } from "../../common/entities";

export function studentsReducer(
  state: IStudent[] = [],
  action: StudentActionTypes
): IStudent[] {
  switch (action.type) {
    case StudentsActions.SET_LOADED_DATA_TO_STORE:
      return [...state, ...(action.payload as IStudent[])];
    case StudentsActions.SET_STUDENT_TO_STORE:
      const student: IStudent = action.payload as IStudent;
      const subjectsList: string[] = student.subjects as string[];
      student.subjects = {};
      subjectsList.map(
        item =>
          (student.subjects[item] = {
            date: {},
            marks: {},
            teacher: "",
            descriptions: "",
            cabinet: "",
          })
      );
      return [...state, student];
    case StudentsActions.SET_STUDENTS_TO_STORE:
      return [...(state = action.payload as IStudent[])];
    case StudentsActions.SET_STUDENTS_WITH_NEW_SUBJECT:
      return [...(state = action.payload as IStudent[])];
    default:
      return state;
  }
}
