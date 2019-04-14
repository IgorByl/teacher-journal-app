import { Action } from "redux";
import { StudentsActions } from "../actions";
import { IStudent } from "../../common/entities";

export function studentsReducer(state: IStudent = {}, action: Action): IStudent {
  switch (action.type) {
    case StudentsActions.GET_DATA: return { ...state };
    case StudentsActions.SET_DATA: return { ...state };
    default: return state;
  }
}