import { Component, OnInit } from "@angular/core";
import { TITLE_ROOTS } from "../common/constants";
import { Router } from "@angular/router";

import { NgRedux } from "@angular-redux/store";
import { IStudent } from "../common/entities";
import { StudentsActions } from "../redux/actions";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  public title: string = "Teacher journal";
  public routs: Array<string> = TITLE_ROOTS;

  constructor(
    private router: Router,
    private ngRedux: NgRedux<IStudent>,
    private action: StudentsActions,
  ) {
  }
  public ngOnInit(): void {
    this.action.getData();
  }
}
