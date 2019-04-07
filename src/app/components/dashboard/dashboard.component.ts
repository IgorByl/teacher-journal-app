import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListOfStudentsService } from "src/app/common/services";
import { IStudent } from "src/app/common/entities/interfaces";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.less"],
})
export class DashboardComponent implements OnInit {
  public subject: string;
  public students: IStudent[];
  public teacher: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private listOfStudentsService: ListOfStudentsService
  ) {
    this.subject = activateRoute.snapshot.params.subject;
  }

  private getTeacher(): void {
    this.teacher = this.students[0].subjects[this.subject].teacher;
  }

  public ngOnInit(): void {
    this.getStudents();
    this.getTeacher();
  }

  public getStudents(): void {
    this.listOfStudentsService
      .getStudents()
      .subscribe(students => (this.students = students));
  }
}
