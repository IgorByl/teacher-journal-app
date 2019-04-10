import { Component, OnInit, OnDestroy } from "@angular/core";
import { CreateNewStudent, IStudent } from "../../common/entities";
import { TABLE_HEADERS } from "../../common/constants";
import { StoreService } from "../../common/services";
import { sorting } from "../../common/helpers";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.less"],
})
export class StudentsComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public isVisible: boolean = false;
  public students: IStudent[] = [];
  public subjects: string[];
  public tableHeaders: string[] = TABLE_HEADERS;
  public toggleSort: boolean = false;

  constructor(private storeService: StoreService) {}

  public ngOnInit(): void {
    this.sub = this.storeService
      .getStudents()
      .subscribe(data => (this.students = data));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public toggleForm(): void {
    this.isVisible = !this.isVisible;
  }

  public hiddenForm(increased: any): void {
    this.isVisible = increased;
  }

  public transferFormData(increased: any): void {
    this.storeService.addStudent(
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
    this.students = sorting(this.students, field, this.toggleSort);
  }
}
