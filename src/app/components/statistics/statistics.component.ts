import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { select } from "@angular-redux/store";
import { Observable, Subscription } from "rxjs";
import { IStudent, IDropdownSelectedData } from "src/app/common/entities";
import {
  unicSubjectSearch,
  donutChart,
  unicNumbersAndTheirCount,
  paintStars,
} from "src/app/common/helpers";
import { findAllMarks } from "src/app/common/helpers/statistic";
@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.less"],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  @select(state => state.studentsReducer)
  public readonly students$: Observable<IStudent[]>;

  @select(state => state.statisticReducer)
  public readonly statistic$: Observable<IDropdownSelectedData[]>;

  public description: string;
  public students: IStudent[] = [];
  public subjects: string[];
  public sub: Subscription;
  public name: string;
  public address: string;
  public listIndex: number;
  public activeLinkPointer: string;
  public Object: {} = Object;
  @ViewChild("chart") public chart: ElementRef;
  @ViewChild("star") public star: ElementRef;

  constructor(public translate: TranslateService) {}

  public ngOnInit(): void {
    this.sub = this.students$.subscribe(data => {
      this.students = data;
      this.subjects = unicSubjectSearch(data);
    });
    this.activeLinkPointer = "students";
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public showStudentDescription(ind: number): void {
    this.chart.nativeElement.innerHTML = "";
    this.star.nativeElement.innerHTML = "";
    this.description = this.students[ind].description;
    this.name = `${this.students[ind].name} ${this.students[ind].lastName}`;
    this.address = this.students[ind].address;
    this.listIndex = ind;
    const donutchartData: {} = unicNumbersAndTheirCount(
      this.students[ind],
      this.subjects
    );
    const allStudentSubmitedMarks: [] = findAllMarks(
      this.students[ind],
      this.subjects
    );
    const summ: number = allStudentSubmitedMarks.reduce(
      (acc, item): number => acc + Number(item), 0
    );
    const average: number = summ / allStudentSubmitedMarks.length;
    donutChart(donutchartData);
    paintStars(average);
  }

  public showFilterContent(atFirstloadedFilterName: string): void {
    this.chart.nativeElement.innerHTML = "";
    this.star.nativeElement.innerHTML = "";
    this.name = "";
    this.activeLinkPointer = atFirstloadedFilterName;
  }
}
