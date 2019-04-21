import { ofType, Epic, ActionsObservable } from "redux-observable";
import { Action } from "redux";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { URL } from "../../common/constants";
import { IStudent } from "src/app/common/entities";

const fetchStudentsFulfilled: Function = (payload: IStudent) => ({
  type: "SET_DATA",
  payload,
});

export const getStudentEpic: Epic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType("GET_DATA"),
    mergeMap(action =>
      ajax.getJSON(URL.get).pipe(
        map(response => fetchStudentsFulfilled(response)),
        catchError(error =>
          of({
            type: "GET_DATA_REJECTED",
            payload: error,
            error: true,
          })
        )
      )
    )
  );
