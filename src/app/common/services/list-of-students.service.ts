import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import * as STUDENTS from "../constants/mock-data.json";

@Injectable({
  providedIn: "root",
})
export class ListOfStudentsService {
  public studentsData: string = JSON.stringify(STUDENTS);

  public getStudents(): Observable<object> {
    return of(JSON.parse(this.studentsData));
  }
}
