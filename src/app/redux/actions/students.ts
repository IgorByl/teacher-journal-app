import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IStudent } from "../../common/entities";

@Injectable()
export class StudentsActions {
  public static SET_DATA: string = "SET_DATA";
  public static GET_DATA: string = "GET_DATA";
  public static SET_STUDENT: string = "SET_STUDENT";
  public static SET_SUBJECT: string = "SET_SUBJECT";
  public static GET_DATA_REJECTED: string = "GET_DATA_REJECTED";

  constructor(private ngRedux: NgRedux<IStudent>) {}

  public getData(): void {
    this.ngRedux.dispatch({ type: StudentsActions.GET_DATA });
  }
  public setStudentToStore(payload: IStudent): void {
    this.ngRedux.dispatch({ type: StudentsActions.SET_STUDENT, payload });
  }
  public setNewSubject(payload: IStudent[]): void {
    this.ngRedux.dispatch({ type: StudentsActions.SET_SUBJECT, payload });
  }
}
