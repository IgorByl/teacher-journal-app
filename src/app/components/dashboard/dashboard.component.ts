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
  public listOfDate: string[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private listOfStudentsService: ListOfStudentsService
  ) {
    this.subject = activateRoute.snapshot.params.subject;
  }

  private getListOfDate(): void {
    this.students[0].subjects[this.subject].marks.forEach(item => {
      console.log(Object.keys(item));
    });
  }

  public ngOnInit(): void {
    this.getStudents();
    this.getListOfDate();
    console.log(this.students);
    console.log(this.listOfDate);
  }

  public getStudents(): void {
    this.listOfStudentsService
      .getStudents()
      .subscribe(students => (this.students = students));
  }
}
