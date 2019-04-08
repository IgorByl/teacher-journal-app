import {
  Component,
  OnInit,
  DoCheck,
  KeyValueDiffers,
  IterableDiffers,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListOfStudentsService } from "src/app/common/services";
import { IStudent } from "src/app/common/entities/interfaces";

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
    private listOfStudentsService: ListOfStudentsService,
    private differs: IterableDiffers
  ) {
    this.subject = activateRoute.snapshot.params.subject;
  }

  public ngOnInit(): void {
    this.getStudents();
    this.differ = this.differs
      .find(this.students[0].subjects[this.subject].date)
      .create(null);
  }

  public ngDoCheck(): void {
    let changes: any = this.differ.diff(
      this.students[0].subjects[this.subject].date
    );
    if (changes) {
      changes.forEachAddedItem(item => console.log("added", item));
      changes.forEachRemovedItem(item => console.log("Remove", item));
    }
  }

  public getStudents(): void {
    this.listOfStudentsService
      .getStudents()
      .subscribe(students => (this.students = students));
  }

  public addDateColumn(): void {
    this.changes = "p";
    if (this.date) {
      this.date.setDate(this.date.getDate() + 1);
    } else {
      this.date = new Date();
    }
    this.students[0].subjects[this.subject].date.push(
      `${this.date.getDate()}.${this.date.getMonth()}`
    );
    this.students.forEach(item => {
      item.subjects[this.subject].marks.push("");
    });
  }

  public postData(): void {
    console.log("post to server");
  }
}
