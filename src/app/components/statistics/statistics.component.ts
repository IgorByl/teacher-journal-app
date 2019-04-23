import { Component, OnInit, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { select } from "@angular-redux/store";
import { Observable, Subscription } from "rxjs";
import { IStudent } from "src/app/common/entities";
import { unicSubjectSearch } from "src/app/common/helpers";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.less"],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  @select(state => state.studentsReducer)
  public readonly students$: Observable<any>;

  @select(state => state.statisticReducer)
  public readonly statistic$: Observable<any>;

  public description: string;
  public students: IStudent[] = [];
  public subjects: string[];
  public sub: Subscription;
  public name: string;
  public address: string;
  public listIndex: number;
  public isActiveLink: string;
  public Object: {} = Object;

  constructor(public translate: TranslateService) {}

  public ngOnInit(): void {
    this.sub = this.students$.subscribe(data => {
      this.students = data;
      this.subjects = unicSubjectSearch(data);
    });
    this.isActiveLink = "students";
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public showStudentDescription(ind: number): void {
    this.description = this.students[ind].description;
    this.name =
      `${this.students[ind].name}` + " " + `${this.students[ind].lastName}`;
    this.address = this.students[ind].address;
    this.listIndex = ind;
  }

  public showFilterContent(identif: string): void {
    this.isActiveLink = identif;
  }
}
