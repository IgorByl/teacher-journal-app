import { Injectable } from "@angular/core";
import { Action } from "redux";

@Injectable()
export class CounterActions {
  public static INCREMENT: string = "INCREMENT";
  public static DECREMENT: string = "DECREMENT";

  public increment(): Action {
    return { type: CounterActions.INCREMENT };
  }

  public decrement(): Action {
    return { type: CounterActions.DECREMENT };
  }
}
