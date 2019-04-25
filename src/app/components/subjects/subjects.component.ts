import { Component, OnDestroy, OnInit } from "@angular/core";
import { IStudent } from "../../common/entities";
import { Subscription, Observable } from "rxjs";
import { unicSubjectSearch, addNewSubject } from "src/app/common/helpers";
import { select } from "@angular-redux/store";
import { TranslateService } from "@ngx-translate/core";
import { FormGroup } from "@angular/forms";
import { SUBJECT_FORM_CONTROL } from "../../common/constants";
import { PopUpItem } from "../../common/entities";
import { PopUpService } from "../../common/services";
import { StudentsActions } from "src/app/redux/actions";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.less"],
})
export class SubjectsComponent implements OnDestroy, OnInit {
  public sub: Subscription;
  public subjects: string[] = [];
  public students: IStudent[];
  public isComponentTemplateHidden: boolean = false;
  public isNewSubjectAdded: boolean = false;
  public formControles: string[];

  @select(state => state.studentsReducer)
  public readonly students$: Observable<IStudent[]>;
  public popUpInfo: PopUpItem;

  constructor(
    private action: StudentsActions,
    public translate: TranslateService,
    private popUpService: PopUpService
  ) {
    this.formControles = SUBJECT_FORM_CONTROL;
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
    this.isNewSubjectAdded = false;
  }

  public receiveFormData(increased: FormGroup): void {
    const listOfStudents: IStudent[] = addNewSubject(this.students, increased);
    this.action.setStudentsWithNewSubjectToStore(listOfStudents);
  }

  public hiddenTemplate(increased: boolean): void {
    this.popUpInfo = this.popUpService.addNewSubjectResolvedPopUp();
    this.isComponentTemplateHidden = increased;
    this.isNewSubjectAdded = true;
  }
}
