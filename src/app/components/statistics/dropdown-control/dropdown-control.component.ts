import { Component, OnInit, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subscription, Observable } from "rxjs";
import { IStudent } from "src/app/common/entities";
import { select } from "@angular-redux/store";
import { unicSubjectSearch, searchUnicDate } from "src/app/common/helpers";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown-control.component.html",
  styleUrls: ["./dropdown-control.component.less"],
})
export class DropdownComponent implements OnInit, OnDestroy {
  @select(state => state.studentsReducer)
  public readonly students$: Observable<any>;
  public students: IStudent[] = [];
  public subjects: string[];
  public sub: Subscription;
  public dates: string[] = [];

  public conditionsOfSubjectsSelect: {} = {};
  public Object: Object = Object;
  public renderSelectData: {} = {};

  constructor(public translate: TranslateService) {}

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
      ? (eventSubject = event.path[1].innerText)
      : (eventSubject = customEvent);
    this.conditionsOfSubjectsSelect[eventSubject].visibility = !this
      .conditionsOfSubjectsSelect[eventSubject].visibility;
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
    this.getRenderData();
  }

  public getRenderData(): void {
    const dateVariable: {} = {};
    this.students.forEach(item => {
      this.renderSelectData[`${item.name}` + " " + `${item.lastName}`] = {};
      dateVariable[item.id] = {};
    });
    this.students.forEach(stud =>
      Object.keys(stud.subjects).forEach(sub =>
        Object.values(stud.subjects[sub].date).forEach((dat, index) => {
          if (this.conditionsOfSubjectsSelect[sub].dates[dat]) {
            dateVariable[stud.id][sub] =
              dateVariable[stud.id][sub] +
              Object.values(stud.subjects[sub].marks)[index];
            let studentNameField: string =
              `${stud.name}` + " " + `${stud.lastName}`;
            this.renderSelectData[studentNameField][sub] = [
              ...dateVariable[stud.id][sub].slice(9).split(""),
            ];
          }
        })
      )
    );
    console.log(this.renderSelectData);
  }

  public checkAll(): void {
    const dates: {} = {};
    this.subjects.forEach(item => {
      this.toggleSubjectSelect(null, item);
      dates[item] = searchUnicDate(this.students, item);
      dates[item].forEach(dat => this.conditionsOfSubjectsSelect[item][dat] = true);
    });
    console.log(this.conditionsOfSubjectsSelect);
  }

  public unCheckAll(): void {
    const dates: {} = {};
    this.subjects.forEach(item => {
      this.toggleSubjectSelect(null, item);
      dates[item] = searchUnicDate(this.students, item);
      dates[item].forEach(dat => this.conditionsOfSubjectsSelect[item][dat] = false);
    });
    console.log(this.conditionsOfSubjectsSelect);
  }

  public expandAll(): void {
    this.subjects.forEach(item => {
      this.toggleSubjectSelect(null, item);
      this.conditionsOfSubjectsSelect[item].visibility = true;
    });
  }

  public collapseAll(): void {
    this.subjects.forEach(
      item => (this.conditionsOfSubjectsSelect[item].visibility = false)
    );
  }
}
