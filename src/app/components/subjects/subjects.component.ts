import { Component, OnInit, OnDestroy } from "@angular/core";
import { SubjectsService, StoreService } from "../../common/services";
import { IStudent } from "../../common/entities";
import { Subscription } from "rxjs";
import { unicSubjectSearch } from "src/app/common/helpers";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.less"],
})
export class SubjectsComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public title: string = "List of subjects:";
  public subjects: string[] = [];
  public students: IStudent[];
  public isVisible: boolean = false;

  constructor(
    private subjectsService: SubjectsService,
    private storeService: StoreService
  ) {}

  public ngOnInit(): void {
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
    this.students.forEach(item => {
      item.subjects[increased.value.Subject] = {
        marks: [],
        teacher: increased.value.Teacher,
        cabiner: Number(increased.value.Cabiner),
        description: increased.value.Description,
      };
    });
    console.log(this.students);
  }

  public hiddenForm(increased: any): void {
    this.isVisible = increased;
  }
}
