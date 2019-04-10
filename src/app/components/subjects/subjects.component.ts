import { Component, OnInit } from "@angular/core";
import { SubjectsService, StoreService } from "../../common/services";
import { IStudent } from "../../common/entities";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.less"],
})
export class SubjectsComponent implements OnInit {
  public title: string = "List of subjects:";
  public subjects: string[] = [];
  public students: IStudent[];
  public isVisible: boolean = false;

  constructor(
    private subjectsService: SubjectsService,
    private storeService: StoreService
  ) {}

  public ngOnInit(): void {
    this.subjects = this.getSubjects();
    this.getStudents();
  }

  public getSubjects(): Array<string> {
    return this.subjectsService.getSubjects();
  }

  public getStudents(): void {
    this.storeService
      .getStudents()
      .subscribe(students => (this.students = students));
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
  }

  public hiddenForm(increased: any): void {
    this.isVisible = increased;
    this.subjects = this.getSubjects();
  }
}
