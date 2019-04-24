import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IStudent } from "../../common/entities";

@Injectable()
export class StudentsActions {
  public static SET_LOADED_DATA_TO_STORE: string = "SET_LOADED_DATA_TO_STORE";
  public static LOAD_DATA_FORM_SERVER: string = "LOAD_DATA_FORM_SERVER";
  public static SET_STUDENTS_WITH_NEW_SUBJECT: string = "SET_STUDENTS_WITH_NEW_SUBJECT";
  public static SET_STUDENT_TO_STORE: string = "SET_STUDENT_TO_STORE";
  public static SET_STUDENTS_TO_STORE: string = "SET_STUDENTS_TO_STORE";
  public static LOAD_DATA_REJECTED: string = "LOAD_DATA_REJECTED";

  constructor(private ngRedux: NgRedux<IStudent>) {}

  public loadStudentsFromServer(): void {
    this.ngRedux.dispatch({ type: StudentsActions.LOAD_DATA_FORM_SERVER });
  }
  public setStudentToStore(payload: IStudent): void {
    this.ngRedux.dispatch({ type: StudentsActions.SET_STUDENT_TO_STORE, payload });
  }
  public setStudentsToStore(payload: IStudent[]): void {
    this.ngRedux.dispatch({ type: StudentsActions.SET_STUDENTS_TO_STORE, payload });
  }
  public setStudentsWithNewSubjectToStore(payload: IStudent[]): void {
    this.ngRedux.dispatch({ type: StudentsActions.SET_STUDENTS_WITH_NEW_SUBJECT, payload });
  }
}
