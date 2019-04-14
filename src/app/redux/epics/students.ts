import { Injectable } from "@angular/core";
import { ofType, Epic, createEpicMiddleware } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";

@Injectable()
export class CounterEpics {
  constructor() {}

  public countEpic: Epic = action$ =>
    action$.pipe(
      ofType("INCREMENT"),
      delay(1000),
      mapTo({ type: "DECREMENT" })
    );

  public createEpic() {
    return createEpicMiddleware().run(this.countEpic);
  }
}
