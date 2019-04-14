import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "../model";

@Injectable()
export class CounterActions {
  public static INCREMENT: string = "INCREMENT";
  public static DECREMENT: string = "DECREMENT";

  constructor(private ngRedux: NgRedux<IAppState>) {}

  public increment(): void {
    this.ngRedux.dispatch({ type: CounterActions.INCREMENT });
  }

  public decrement(): void {
    this.ngRedux.dispatch({ type: CounterActions.DECREMENT });
  }
}
