import { ofType, Epic, ActionsObservable } from "redux-observable";
import { Action } from "redux";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { URL } from "../../common/constants";

const fetchStudentsFulfilled: any = payload => ({ type: "SET_DATA", payload });

export const getStudentEpic: Epic = (action$: ActionsObservable<Action>) =>
  action$.pipe(
    ofType("GET_DATA"),
    mergeMap(action =>
      ajax.getJSON(URL.get).pipe(
        map(response => fetchStudentsFulfilled(response)),
        catchError(error =>
          of({
            type: "GET_DATA_REJECTED",
            payload: error.text,
            error: true,
          })
        )
      )
    )
  );
