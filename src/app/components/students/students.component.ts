import { Component, OnInit, OnDestroy } from "@angular/core";
import { Student, IStudent } from "../../common/entities";
import { TABLE_HEADERS, STUDENT_FORM_CONTROL } from "../../common/constants";
import { sorting } from "../../common/helpers";
import { select } from "@angular-redux/store";
import { Observable, Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { unicSubjectSearch } from "src/app/common/helpers";
import { FormGroup } from "@angular/forms";

import { PopUpItem } from "../../common/entities";
import { PopUpService } from "../../common/services";
import { StudentsActions } from "src/app/redux/actions";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.less"],
})
export class StudentsComponent implements OnInit, OnDestroy {
  public isComponentTemplateHidden: boolean = false;
  public students: IStudent[] = [];
  public subjects: string[];
  public tableHeaders: string[] = TABLE_HEADERS;
  public toggleSort: boolean = false;
  public sub: Subscription;
  public formControles: string[];

  @select(state => state.studentsReducer)
  public readonly students$: Observable<IStudent[]>;
  public popUpInfo: PopUpItem;

  constructor(
    public translate: TranslateService,
    private popUpService: PopUpService,
    private action: StudentsActions
  ) {
    this.formControles = STUDENT_FORM_CONTROL;
  }

  public ngOnInit(): void {
    this.sub = this.students$.subscribe(data => {
      this.students = data;
      this.subjects = unicSubjectSearch(data);
    });
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public toggleTemplateVisibility(): void {
    this.isComponentTemplateHidden = !this.isComponentTemplateHidden;
  }

  public hiddenTemplate(increased: boolean): void {
    this.isComponentTemplateHidden = increased;
    this.popUpInfo = this.popUpService.addNewStudentResolvedPopUp();
  }

  public receiveFormData(increased: FormGroup): void {
    this.action.setStudentToStore(
      new Student(
        this.students.length + 1,
        increased.value.name,
        increased.value.lastname,
        increased.value.address,
        increased.value.description,
        this.subjects
      )
    );
  }

  public sortRows(field: string): void {
    this.toggleSort = !this.toggleSort;
    this.students = sorting(this.students, field, this.toggleSort);
  }
}
