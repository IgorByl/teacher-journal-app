import { Component, OnInit, DoCheck, KeyValueDiffers } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreService, HttpService } from "src/app/common/services";
import { IStudent } from "src/app/common/entities";
import { setDate } from "../../common/helpers";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.less"],
})
export class DashboardComponent implements OnInit, DoCheck {
  public subject: string;
  public students: IStudent[];
  public differ: any;
  public date: Date;
  public changes: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private storeService: StoreService,
    private httpService: HttpService,
    private differs: KeyValueDiffers
  ) {
    this.subject = activateRoute.snapshot.params.subject;
  }

  public ngOnInit(): void {
    this.getStudents();
    this.differ = this.differs.find(this.students).create();
  }

  public ngDoCheck(): void {
    let changes: any = this.differ.diff(this.students);
    if (changes) {
      changes.forEachAddedItem(item => console.log("added", item));
      changes.forEachRemovedItem(item => console.log("Remove", item));
    }
  }

  public getStudents(): void {
    this.storeService
      .getStudents()
      .subscribe(students => (this.students = students));
  }

  public addDateColumn(): void {
    this.changes = true;
    this.date = setDate(this.date);
    this.students[0].subjects[this.subject].date.push(
      `${this.date.getDate()}.${this.date.getMonth()}`
    );
    this.students.forEach(item => {
      item.subjects[this.subject].marks.push("");
    });
  }

  public postData(): void {
    this.httpService.postStudents(this.students);
  }
}
