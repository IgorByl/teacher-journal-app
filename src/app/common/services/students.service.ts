import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import student from "../constants/mock-data.json";
import { IStudent } from "../entities";

@Injectable({
  providedIn: "root",
})
export class ListOfStudentsService {

  public getStudents(): Observable<IStudent[]> {
    return of(student);
  }
}
