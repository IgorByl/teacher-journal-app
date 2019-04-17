import { Action } from "redux";
import { StudentsActions } from "../actions";
import { IStudent } from "../../common/entities";

// enum studentActions {

// }

type StudentsActionTypes = 
  ISET_STUDENT;
  interface ISET_STUDENT {
    type: StudentsActions.SET_STUDENT,
    payload: any
  }
// в файл с экшен тайпами!!!


  public static GET_DATA: string = "GET_DATA";
  public static SET_STUDENT: string = "SET_STUDENT";
  public static SET_SUBJECT: string = "SET_SUBJECT";
  public static GET_DATA_REJECTED: string = "GET_DATA_REJECTED";

export function studentsReducer(state: any = [], action: StudentsActionTypes ): IStudent[] {
  switch (action.type) {
    case StudentsActions.SET_DATA:
      return [...state, ...action.payload];
    case StudentsActions.SET_STUDENT:
      return [...state, ...action.payload];
    case StudentsActions.SET_SUBJECT:
      return [ ...state = action.payload];
    default:
      return state;
  }
}
