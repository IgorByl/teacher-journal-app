import { Component, OnInit, OnDestroy } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subscription, Observable } from "rxjs";
import { IStudent } from "src/app/common/entities";
import { select } from "@angular-redux/store";
import { unicSubjectSearch } from "src/app/common/helpers";

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
  public date;
  public flag: boolean = false;

  constructor(public translate: TranslateService) {}

  public ngOnInit(): void {
    this.sub = this.students$.subscribe(data => {
      this.students = data;
      this.subjects = unicSubjectSearch(data);
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public toggle(event): void {
    this.flag = !this.flag;
    const dateObj: {} = {};
    this.students.map(item =>
      Object.values(item.subjects[event.path[1].innerText].date).forEach(
        items => {
          dateObj[items] = 1;
        }
      )
    );
    this.date = Object.keys(dateObj);
  }
}
