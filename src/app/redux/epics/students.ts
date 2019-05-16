import {
  ofType,
  Epic,
  ActionsObservable,
  StateObservable,
} from "redux-observable";
import { Action } from "redux";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { URL } from "../../common/constants";
import { IStudent } from "src/app/common/entities";

const fetchStudentsFulfilled: Function = (payload: IStudent[]) => ({
  type: "SET_LOADED_DATA_TO_STORE",
  payload,
});

export const loadStudentFromServerEpic: Epic = (
  action$: ActionsObservable<Action>,
  state$: StateObservable<IStudent[]>,
  {getJSON}
) => {
  return action$.pipe(
    ofType("LOAD_DATA_FORM_SERVER"),
    mergeMap(() => {
      console.log(getJSON);
      return getJSON(URL.get).pipe(
        map(response => {
          return fetchStudentsFulfilled(response);
        }),
        catchError(error =>
          of({
            type: "LOAD_DATA_REJECTED",
            payload: error,
          })
        )
      );
    })
  );
};
