import { Component } from "@angular/core";
import { TITLE_ROOTS } from "../common/constants";
import { Router } from "@angular/router";

import { NgRedux, select } from "@angular-redux/store";
import { CounterActions } from "../redux/actions/counter";
import { IAppState } from "../redux/model";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  public title: string = "Teacher journal";
  public routs: Array<string> = TITLE_ROOTS;

  @select(state => state.counterReducer.counter) public readonly count$: Observable<number>;
  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions
  ) {}
}
