import { Component, OnInit, OnDestroy, Output, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subscription, Observable } from "rxjs";
import {
  IStudent,
  IConditionsOfSubjectsSelect,
  IDropdownSelectedData,
} from "src/app/common/entities";
import { select } from "@angular-redux/store";
import { unicSubjectSearch, searchUnicDate } from "src/app/common/helpers";
import { StatisticActions } from "src/app/redux/actions";
import {
  prepareSelectedDataForRender,
  sortSelectedMarks,
} from "src/app/common/helpers/statistic";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown-control.component.html",
  styleUrls: ["./dropdown-control.component.less"],
})
export class DropdownComponent implements OnInit, OnDestroy {
  @select(state => state.studentsReducer)
  public readonly students$: Observable<IStudent[]>;

  public students: IStudent[] = [];
  public subjects: string[];
  public sub: Subscription;
  public dates: string;
  public conditionsOfSubjectsSelect: IConditionsOfSubjectsSelect = {};
  public Object: Object = Object;
  public isFilterVisible: boolean = false;

  constructor(
    public translate: TranslateService,
    private action: StatisticActions,
  ) {}

  public ngOnInit(): void {
    this.sub = this.students$.subscribe(data => {
      this.students = data;
      this.subjects = unicSubjectSearch(data);
      this.subjects.forEach(item => {
        this.conditionsOfSubjectsSelect[item] = {
          visibility: false,
          dates: {},
        };
      });
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public toggleSubjectSelect(event: any, customEvent: string): void {
    let eventSubject: string;
    event
      ? ((eventSubject = event.path[1].innerText),
        (this.conditionsOfSubjectsSelect[eventSubject].visibility = !this
          .conditionsOfSubjectsSelect[eventSubject].visibility))
      : (eventSubject = customEvent);
    const dates: number[] = searchUnicDate(this.students, eventSubject);
    dates.forEach(
      item =>
        (this.conditionsOfSubjectsSelect[eventSubject].dates[item] = false)
    );
  }

  public getDatesForStatisticRender (): void {
    this.dates = sortSelectedMarks(
      this.conditionsOfSubjectsSelect,
      this.subjects
    );
  }

  public toggleSubjectDate(event: any, subject: string): void {
    const eventDate: string = event.path[1].innerText;
    this.conditionsOfSubjectsSelect[subject].dates[eventDate] = !this
      .conditionsOfSubjectsSelect[subject].dates[eventDate];
    this.getDatesForStatisticRender();
    this.getSelectedData();
  }

  public getSelectedData(): void {
    const dropdownSelectedData: IDropdownSelectedData[] = prepareSelectedDataForRender(
      this.students,
      this.conditionsOfSubjectsSelect,
      this.subjects
    );
    this.action.setSelectedStatisticToStore(dropdownSelectedData);
  }

  public checkAll(): void {
    const dates: {} = {};
    this.subjects.forEach(item => {
      this.toggleSubjectSelect(null, item);
      dates[item] = searchUnicDate(this.students, item);
      dates[item].forEach(dat => {
        this.conditionsOfSubjectsSelect[item].dates[dat] = true;
      });
      this.conditionsOfSubjectsSelect[item].visibility = true;
    });
    this.getDatesForStatisticRender();
    this.getSelectedData();
  }

  public unCheckAll(): void {
    const dates: {} = {};
    this.subjects.forEach(item => {
      this.toggleSubjectSelect(null, item);
      dates[item] = searchUnicDate(this.students, item);
      dates[item].forEach(dat => {
        this.conditionsOfSubjectsSelect[item].dates[dat] = false;
      });
    });
    this.getDatesForStatisticRender();
    this.getSelectedData();
  }

  public expandAll(): void {
    this.subjects.forEach(item => {
      this.toggleSubjectSelect(null, item);
      this.conditionsOfSubjectsSelect[item].visibility = true;
    });
  }

  public collapseAll(): void {
    this.subjects.forEach(item => {
      this.conditionsOfSubjectsSelect[item].visibility = false;
    });
  }

  public toggleFilterVisibility(value: boolean): void {
    this.isFilterVisible = value;
  }
}
