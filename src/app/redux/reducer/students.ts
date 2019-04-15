import { Action } from "redux";
import { StudentsActions } from "../actions";
import { IStudent } from "../../common/entities";

export function studentsReducer(state: any = [], action: Action): IStudent {
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
