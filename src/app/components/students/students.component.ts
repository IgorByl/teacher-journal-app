import { Component, OnInit, OnDestroy } from "@angular/core";
import { CreateNewStudent, IStudent } from "../../common/entities";
import { TABLE_HEADERS } from "../../common/constants";
import { DataService } from "../../common/services";
import { sorting } from "../../common/helpers";
import { select } from "@angular-redux/store";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.less"],
})
export class StudentsComponent implements OnInit, OnDestroy {
  public isVisible: boolean = false;
  public students: IStudent[] = [];
  public subjects: string[];
  public tableHeaders: string[] = TABLE_HEADERS;
  public toggleSort: boolean = false;
  public sub: Subscription;

  @select(state => state.studentsReducer)
  public readonly students$: Observable<any>;

  constructor(private dataService: DataService) {}

public ngOnInit(): void {
  this.sub = this.students$.subscribe(data => this.students = data);
}

public ngOnDestroy(): void {
this.sub.unsubscribe();
}

  public toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  public hiddenVisibility(increased: any): void {
    this.isVisible = increased;
  }

  public transferFormData(increased: any): void {
    this.dataService.addStudent(
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
