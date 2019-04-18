import { StudentsActions } from "../actions";
import { IStudent, StudentActionTypes } from "../../common/entities";

export function studentsReducer(
  state: IStudent[] = [],
  action: StudentActionTypes
): IStudent[] {
  switch (action.type) {
    case StudentsActions.SET_DATA:
      return [...state, ...action.payload];
    case StudentsActions.SET_STUDENT:
      const student: any = action.payload;
      const subjectsList: string[] = student.subjects;
      student.subjects = {};
      subjectsList.map(
        item =>
          (student.subjects[item] = {
            date: {},
            marks: {},
            teacher: "",
            descriptions: "",
            cabinet: ""
          })
      );
      console.log(action.payload, student);
      return [...state, student];
    case StudentsActions.SET_SUBJECT:
      return [...(state = action.payload)];
    default:
      return state;
  }
}
