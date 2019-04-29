import { Injectable } from "@angular/core";
import { StudentsActions } from "src/app/redux/actions";
import { IStudent } from "../entities";

@Injectable({ providedIn: "root" })
export class DataService {
  public students: any;
  constructor(
    private action: StudentsActions
  ) {}

  public addStudent(student: any): any {
    this.action.setStudentToStore(student);
  }

  public addSubject(students: IStudent[], increased: any): any {
    students.map(
      item =>
        (item.subjects[increased.value.Subject] = {
          date: {},
          marks: {},
          teacher: increased.value.Teacher,
          cabiner: Number(increased.value.Cabiner),
          description: increased.value.Description,
        })
    ),
      this.action.setNewSubject(students);
  }
}
