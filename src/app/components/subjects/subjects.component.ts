import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataService } from "../../common/services";
import { IStudent } from "../../common/entities";
import { Subscription, Observable } from "rxjs";
import { unicSubjectSearch } from "src/app/common/helpers";
import { select } from "@angular-redux/store";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.less"],
})
export class SubjectsComponent implements OnDestroy, OnInit {
  private sub: Subscription;
  public title: string = "List of subjects:";
  public subjects: string[] = [];
  public students: IStudent[];
  public isVisible: boolean = false;

  @select(state => state.studentsReducer)
  public readonly students$: Observable<any>;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.sub = this.students$.subscribe(data => {
      this.students = data;
      this.subjects = unicSubjectSearch(data);
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  public transferFormData(increased: any): void {
    this.dataService.addSubject(this.students, increased);
  }

  public hiddenVisibility(increased: any): void {
    this.isVisible = increased;
  }
}
