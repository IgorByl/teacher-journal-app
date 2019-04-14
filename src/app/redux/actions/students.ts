import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IStudent } from "../../common/entities";

@Injectable()
export class StudentsActions {
  public static GET_DATA: string = "GET_DATA";
  public static SET_DATA: string = "SET_DATA";

  constructor(private ngRedux: NgRedux<IStudent>) {}

  public getData(): void {
    this.ngRedux.dispatch({ type: StudentsActions.GET_DATA });
  }
  public setData(): void {
    this.ngRedux.dispatch({ type: StudentsActions.SET_DATA });
  }
}
