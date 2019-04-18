import { StudentsActions } from "../actions";
import { IStudent, StudentActionTypes } from "../../common/entities";

export function studentsReducer(state: IStudent[] = [], action: StudentActionTypes ): IStudent[] {
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
