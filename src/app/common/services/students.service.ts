import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IStudent } from "../entities";
import { HttpClient } from "@angular/common/http";
import { URL } from "../constants";

@Injectable({
  providedIn: "root",
})
export class ListOfStudentsService {
  constructor(private http: HttpClient) {}

  public getStudents(): any {
    return this.http.get(URL);
  }

  // public getStudents(): Observable<IStudent[]> {
  //   return of();
  // }
}
