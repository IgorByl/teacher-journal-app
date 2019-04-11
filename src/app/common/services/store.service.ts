import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class StoreService {
  public students: any;
  constructor(private httpService: HttpService) {}

  public getStudents(): any {
    if (this.students) {
      return new Observable(observer => {
        observer.next(this.students);
        observer.complete();
      });
    } else {
      this.httpService.getData().subscribe(data => this.students = data);
      return this.httpService.getData();
    }
  }

  public addStudent(student: any): any {
    this.students.push(student);
  }

  public addSubject(increased: any): any {
    this.students.map(item => {
      item.subjects[increased.value.Subject] = {
        date: {},
        marks: {},
        teacher: increased.value.Teacher,
        cabiner: Number(increased.value.Cabiner),
        description: increased.value.Description,
      };
    });
  }
}