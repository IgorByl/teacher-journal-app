import { Component, DoCheck, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SendDataService } from "src/app/common/services";
import { IStudent } from "src/app/common/entities";
import { setDate, unicSubjectSearch } from "../../common/helpers";
import { Subscription, Observable } from "rxjs";
import { select } from "@angular-redux/store";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.less"],
})
export class DashboardComponent implements DoCheck, OnDestroy {
  private sub: Subscription;
  public subject: string;
  public subjects: string[];
  public students: IStudent[];
  public date: Date;
  public isChanged: any;
  public isFirstInit: boolean = true;
  public Object: Object = Object;

  @select(state => state.studentsReducer)
  public readonly students$: Observable<any>;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private sendDataService: SendDataService
  ) {
    this.subject = activateRoute.snapshot.params.subject;
  }

  public ngDoCheck(): void {
    this.sub = this.students$.subscribe(data => {
      this.students = data;
      if (this.isFirstInit) {
        if (
          (this.subjects = unicSubjectSearch(data)).every(
            item => item !== this.subject
          )
        ) {
          this.router.navigate(["/subjects"]);
        }
      }
    });
    this.isFirstInit = false;
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public addDateColumn(): void {
    this.isChanged = true;
    this.date = setDate(this.date);
    let key: number = ++Object.keys(
      this.students[0].subjects[this.subject].date
    ).length;
    this.students.forEach(item => {
      item.subjects[this.subject].date[
        key
      ] = `${this.date.getDate()}.${this.date.getMonth()}`;
      item.subjects[this.subject].marks[key] = "";
    });
  }

  public postData(): void {
    this.sendDataService.sendActualeDataToServer(this.students).subscribe();
    this.isChanged = false;
  }

  public changeTeacher(teacher: string): void {
    this.students.forEach(item => {
      if (item.subjects[this.subject].teacher !== teacher) {
        item.subjects[this.subject].teacher = teacher;
        this.isChanged = true;
      }
    });
  }

  public changeMark(mark: string, index: string, student: any): void {
    this.students.forEach(item => {
      if (
        item.id === student.id &&
        item.subjects[this.subject].marks[index] !== mark
      ) {
        item.subjects[this.subject].marks[index] = mark;
        this.isChanged = true;
      }
    });
  }

  public changeDate(date: string, index: string): void {
    this.students.forEach(item => {
      if (item.subjects[this.subject].date[index] !== date) {
        item.subjects[this.subject].date[index] = date;
        this.isChanged = true;
      }
    });
  }
}
