import { Component, OnInit, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subscription, Observable } from "rxjs";
import {
  IStudent,
  IDropdownSelectedData,
  IConditionsOfSubjectsSelect,
} from "src/app/common/entities";
import { select } from "@angular-redux/store";
import { unicSubjectSearch, searchUnicDate } from "src/app/common/helpers";
import { StatisticActions } from "src/app/redux/actions";

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
  public dates: string[] = [];
  public conditionsOfSubjectsSelect: IConditionsOfSubjectsSelect = {};
  public Object: Object = Object;
  public dropdownSelectedData: IDropdownSelectedData = {};

  constructor(
    public translate: TranslateService,
    private action: StatisticActions
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

  public toggleSubjectDate(event: any, subject: string): void {
    const eventDate: string = event.path[1].innerText;
    this.conditionsOfSubjectsSelect[subject].dates[eventDate] = !this
      .conditionsOfSubjectsSelect[subject].dates[eventDate];
    this.getSelectedData();
  }

  public getSelectedData(): void {
    const dateVariable: {} = {};
    this.students.forEach(stud => {
      this.dropdownSelectedData[`${stud.name}` + " " + `${stud.lastName}`] = {};
      dateVariable[stud.id] = {};
      Object.keys(stud.subjects).forEach(sub =>
        (Object.values(stud.subjects[sub].date) as []).forEach((dat, index) => {
          if (this.conditionsOfSubjectsSelect[sub].dates[dat]) {
            dateVariable[stud.id][sub] =
              dateVariable[stud.id][sub] +
              Object.values(stud.subjects[sub].marks)[index];
            let studentNameField: string =
              `${stud.name}` + " " + `${stud.lastName}`;
            this.dropdownSelectedData[studentNameField][sub] = [
              ...dateVariable[stud.id][sub].slice(9).split(""),
            ];
          }
        })
      );
    });
    this.action.setSelectedStatisticToStore(this.dropdownSelectedData);
  }

  public checkAll(): void {
    const dates: {} = {};
    this.subjects.forEach(item => {
      this.toggleSubjectSelect(null, item);
      dates[item] = searchUnicDate(this.students, item);
      dates[item].forEach(dat => {
        this.conditionsOfSubjectsSelect[item].dates[dat] = true;
        console.log(this.conditionsOfSubjectsSelect[item].dates[dat]);
      });
      this.conditionsOfSubjectsSelect[item].visibility = true;
    });
    this.getSelectedData();
  }

  public unCheckAll(): void {
    const dates: {} = {};
    this.subjects.forEach(item => {
      this.toggleSubjectSelect(null, item);
      dates[item] = searchUnicDate(this.students, item);
      dates[item].forEach(dat => {
        this.conditionsOfSubjectsSelect[item][dat] = false;
      });
    });
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
}
