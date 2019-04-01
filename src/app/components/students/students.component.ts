import { Component, OnInit } from "@angular/core";
import { AddedStudent } from "../../common/entities/classes";
import { TABLE_HEADERS } from "../../common/constants";
import { FORM_REQUEST_STUDENTS_FIELDS } from "../../common/constants";
import { ListOfStudentsService } from "../../common/services";
import { IStudent } from "../../common/entities/interfaces";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.less"],
})
export class StudentsComponent implements OnInit {
  public students: IStudent[];
  public subjects: Array<string>;
  public tableHeaders: Array<string> = TABLE_HEADERS;
  public formRequestStudentsFields: object = FORM_REQUEST_STUDENTS_FIELDS;
  public addFlag: boolean = false;

  // tslint:disable-next-line:no-parameter-properties
  constructor(private listOfStudentsService: ListOfStudentsService) {}

  public ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.listOfStudentsService
      .getStudents()
      .subscribe(data => this.students = data);
  }

  public addNewStudent(): void {
    this.addFlag = !this.addFlag;
  }

  public changedVisibility(increased: any): void {
    this.addFlag = increased;
  }

  public transferFormData(increased: any): void {
    this.students.push(
      new AddedStudent(
        increased.value.Name,
        increased.value.Lastname,
        increased.value.Address,
        increased.value.Description
      )
    );
  }
}
