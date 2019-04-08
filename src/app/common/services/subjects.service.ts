import { Injectable } from "@angular/core";
import { ListOfStudentsService } from "./students.service";
@Injectable({
  providedIn: "root",
})
export class GetListOfSubjectsService {
  public students: any;

  constructor(private listOfStudentsService: ListOfStudentsService) {}

  public getSubjects(): Array<string> {
    const subjects: object = {};
    this.listOfStudentsService
      .getStudents()
      .subscribe(data => (this.students = data));
    this.students.forEach(item => {
      Object.keys(item.subjects).forEach(it => {
        subjects[it] = 1;
      });
    });
    return Object.keys(subjects);
  }
}
