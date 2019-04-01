import { Injectable } from "@angular/core";
import * as STUDENTS  from "../constants/mock-data.json";

@Injectable({
  providedIn: "root",
})
export class GetListOfSubjectsService {
  public student: string = JSON.stringify(STUDENTS);

  public getSubjects(): Array<string> {
    const subjects: object = {};
    JSON.parse(this.student).forEach(item => {
      Object.keys(item.subjects).forEach(it => {
        subjects[it] = 1;
      });
    });
    return Object.keys(subjects);
  }
}
