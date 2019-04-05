import { Component, OnInit } from "@angular/core";
import { CreateNewStudent } from "../../common/entities/classes";
import { TABLE_HEADERS } from "../../common/constants";
import { ListOfStudentsService } from "../../common/services";
import { IStudent } from "../../common/entities/interfaces";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.less"],
})
export class StudentsComponent implements OnInit {
  public isVisible: boolean = false;
  public students: IStudent[];
  public subjects: Array<string>;
  public tableHeaders: Array<string> = TABLE_HEADERS;

  constructor(private listOfStudentsService: ListOfStudentsService) {}

  public ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.listOfStudentsService
      .getStudents()
      .subscribe(data => this.students = data);
  }

  public toggleForm(): void {
    this.isVisible = !this.isVisible;
  }

  public hiddenForm(increased: any): void {
    this.isVisible = increased;
  }

  public transferFormData(increased: any): void {
    this.students.push(
      new CreateNewStudent(
        increased.value.Name,
        increased.value.Lastname,
        increased.value.Address,
        increased.value.Description
      )
    );
  }
}
