import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataService } from "../../common/services";
import { IStudent } from "../../common/entities";
import { Subscription, Observable } from "rxjs";
import { unicSubjectSearch } from "src/app/common/helpers";
import { select } from "@angular-redux/store";
import { TranslateService } from "@ngx-translate/core";
import { FormGroup } from "@angular/forms";

import { PopUpItem } from "../../common/entities";
import { PopUpService } from "../../common/services";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.less"],
})
export class SubjectsComponent implements OnDestroy, OnInit {
  public sub: Subscription;
  public subjects: string[] = [];
  public students: IStudent[];
  public isVisible: boolean = false;
  public isNewSubjectAdded: boolean = false;

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
      this.students = data;
      this.subjects = unicSubjectSearch(data);
    });
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public toggleVisibility(): void {
    this.isVisible = !this.isVisible;
    this.isNewSubjectAdded = false;
  }

  public transferFormData(increased: FormGroup): void {
    this.dataService.addSubject(this.students, increased);
  }

  public hiddenVisibility(increased: boolean): void {
    this.popUp = this.popUpService.addNewSubjectResolvedPopUp();
    this.isVisible = increased;
    this.isNewSubjectAdded = true;
  }
}
