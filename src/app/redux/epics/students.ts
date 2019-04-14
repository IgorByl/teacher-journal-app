import { ofType, Epic, ActionsObservable } from "redux-observable";
import { Action } from "redux";
import { delay, mapTo } from "rxjs/operators";

export const countEpic: Epic = (action$:  ActionsObservable<Action>) =>
  action$.pipe(
    ofType("INCREMENT"),
    delay(1000),
    mapTo({ type: "DECREMENT" })
  );
