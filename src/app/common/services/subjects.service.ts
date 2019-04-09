import { Injectable } from "@angular/core";
import { ListOfStudentsService } from "./students.service";
import { unicValueSearch } from "../helpers";
@Injectable({
  providedIn: "root",
})
export class GetListOfSubjectsService {
  public students: any;

  constructor(private listOfStudentsService: ListOfStudentsService) {}

  public getSubjects(): Array<string> {
    this.listOfStudentsService
      .getStudents()
      .subscribe(data => (this.students = data));
    return unicValueSearch(this.students);
  }
}
