import { Component, DoCheck, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SendDataService } from "src/app/common/services";
import { IStudent } from "src/app/common/entities";
import { setDate, unicSubjectSearch } from "../../common/helpers";
import { Subscription, Observable } from "rxjs";
import { select } from "@angular-redux/store";
import { TranslateService } from "@ngx-translate/core";

import { PopUpItem } from "../../common/entities";
import { PopUpService } from "../../common/services";
import { StudentsActions } from "src/app/redux/actions";

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
  public isTableDataChanged: boolean;
  public isFirstInit: boolean = true;
  public Object: Object = Object;

  @select(state => state.studentsReducer)
  public readonly students$: Observable<IStudent[]>;
  public popUpInfo: PopUpItem;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private sendDataService: SendDataService,
    public translate: TranslateService,
    private popUpService: PopUpService,
    private action: StudentsActions
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
    this.isTableDataChanged = true;
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

  public postDataToServer(): void {
    this.sendDataService.sendActualeDataToServer(this.students).subscribe(
      data => {
        console.log(data);
        this.isTableDataChanged = false;
        this.popUpInfo = this.popUpService.dataSavedResolvedPopUp();
        this.action.setStudentsToStore(this.students);
      },
      err => {
        console.log(err);
        this.popUpInfo = this.popUpService.dataSavedRejectedPopUp();
        this.isTableDataChanged = true;
      }
    );
  }

  public changeTeacher(teacher: string): void {
    this.students.forEach(item => {
      if (item.subjects[this.subject].teacher !== teacher) {
        item.subjects[this.subject].teacher = teacher;
        this.isTableDataChanged = true;
      }
    });
  }

  public changeMark(mark: string, index: string, student: IStudent): void {
    this.students.forEach(item => {
      if (item.id === student.id) {
        if (item.subjects[this.subject].marks[index] !== mark) {
          this.isTableDataChanged = true;
        }
        item.subjects[this.subject].marks[index] = mark;
      }
    });
  }

  public changeDate(date: string, index: string): void {
    this.students.forEach(item => {
      if (item.subjects[this.subject].date[index] !== date) {
        item.subjects[this.subject].date[index] = date;
        this.isTableDataChanged = true;
      }
      this.isTableDataChanged = false;
    });
  }
}
