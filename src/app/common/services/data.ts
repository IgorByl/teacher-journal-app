import { Injectable } from "@angular/core";
import { StudentsActions } from "src/app/redux/actions";
import { IStudent } from "../entities";
import { FormGroup } from "@angular/forms";

@Injectable({ providedIn: "root" })
export class DataService {
  constructor(private action: StudentsActions) {}

  public addStudent(student: IStudent): void {
    this.action.setStudentToStore(student);
  }

  public addSubject(students: IStudent[], increased: FormGroup): any {
    students.map(
      item =>
        (item.subjects[increased.value.Subject] = {
          date: {},
          marks: {},
          teacher: increased.value.Teacher,
          cabinet: Number(increased.value.Cabiner),
          description: increased.value.Description,
        })
    ),
      this.action.setNewSubject(students);
  }
}
