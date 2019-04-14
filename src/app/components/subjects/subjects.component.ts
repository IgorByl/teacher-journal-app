import { Component, OnDestroy, DoCheck } from "@angular/core";
import { StoreService } from "../../common/services";
import { IStudent } from "../../common/entities";
import { Subscription } from "rxjs";
import { unicSubjectSearch } from "src/app/common/helpers";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.less"],
})
export class SubjectsComponent implements OnDestroy, DoCheck {
  private sub: Subscription;
  public title: string = "List of subjects:";
  public subjects: string[] = [];
  public students: IStudent[];
  public isVisible: boolean = false;

  constructor(
    private storeService: StoreService
  ) {}

  public ngDoCheck(): void {
    this.sub = this.storeService
      .getStudents()
      .subscribe(data => {
        this.subjects = unicSubjectSearch(data);
        this.students = data;
      });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public toggleForm(): void {
    this.isVisible = !this.isVisible;
  }

  public transferFormData(increased: any): void {
    this.storeService.addSubject(increased);
  }

  public hiddenForm(increased: any): void {
    this.isVisible = increased;
  }
}
