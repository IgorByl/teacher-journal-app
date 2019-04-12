import { Component } from "@angular/core";
import { TITLE_ROOTS } from "../common/constants";
import { Router } from "@angular/router";

import { NgRedux, select } from "@angular-redux/store";
import { CounterActions } from "../redux/actions/counter";
import { IAppState } from "../redux/store/store";
import { Subscription, Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  public title: string = "Teacher journal";
  public routs: Array<string> = TITLE_ROOTS;

  public count: number;
  public sub: Subscription;
  @select() readonly count$: Observable<number>;
  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions
  ) {}

  public increment(): void {
    this.ngRedux.dispatch(this.actions.increment());
  }
  public decrement(): void {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
