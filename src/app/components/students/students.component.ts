import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CreateNewStudent } from "../../common/entities/classes";
import { TABLE_HEADERS } from "../../common/constants";
import { ListOfStudentsService } from "../../common/services";
import { IStudent } from "../../common/entities/interfaces";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.less"],
  // encapsulation: ViewEncapsulation.None
})
export class StudentsComponent implements OnInit {
  public isVisible: boolean = false;
  public students: IStudent[];
  public subjects: string[];
  public tableHeaders: string[] = TABLE_HEADERS;
  public toggleSort: boolean = false;

  constructor(private listOfStudentsService: ListOfStudentsService) {}

  public ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.listOfStudentsService
      .getStudents()
      .subscribe(data => (this.students = data));
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
        this.students.length + 1,
        increased.value.Name,
        increased.value.Lastname,
        increased.value.Address,
        increased.value.Description
      )
    );
  }

  public sortRows(field: string): void {
    this.toggleSort = !this.toggleSort;
    this.students = this.students.sort((a, b) => {
      if (this.toggleSort) {
        if (a[field] > b[field]) {
          return -1;
        }
        if (a[field] < b[field]) {
          return 1;
        }
      } else {
        if (a[field] > b[field]) {
          return 1;
        }
        if (a[field] < b[field]) {
          return -1;
        }
      }
      return 0;
    });
  }
}
