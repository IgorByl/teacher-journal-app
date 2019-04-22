import { Component, OnInit, OnDestroy } from "@angular/core";
import { Student, IStudent } from "../../common/entities";
import { TABLE_HEADERS } from "../../common/constants";
import { DataService } from "../../common/services";
import { sorting } from "../../common/helpers";
import { select } from "@angular-redux/store";
import { Observable, Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { unicSubjectSearch } from "src/app/common/helpers";
import { FormGroup } from "@angular/forms";

import { PopUpItem } from "../../common/entities";
import { PopUpService } from "../../common/services";

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
  public readonly students$: Observable<IStudent[]>;
  public popUp: PopUpItem;

  constructor(
    private dataService: DataService,
    public translate: TranslateService,
    private popUpService: PopUpService
  ) {}

  public ngOnInit(): void {
    this.sub = this.students$.subscribe(data => {
      (data) ? this.popUp = this.popUpService.getResolvedLoadedPopUp() : this.popUp = this.popUpService.getRejectedLoadedPopUp();
      this.students = data;
      this.subjects = unicSubjectSearch(data);
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  public hiddenVisibility(increased: boolean): void {
    this.isVisible = increased;
    this.popUp = this.popUpService.addNewStudentResolvedPopUp();
  }

  public transferFormData(increased: FormGroup): void {
    this.dataService.addStudent(
      new Student(
        this.students.length + 1,
        increased.value.Name,
        increased.value.Lastname,
        increased.value.Address,
        increased.value.Description,
        this.subjects
      )
    );
  }

  public sortRows(field: string): void {
    this.toggleSort = !this.toggleSort;
    this.students = sorting(this.students, field, this.toggleSort);
  }
}
