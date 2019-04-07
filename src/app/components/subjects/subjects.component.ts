import { Component, OnInit } from "@angular/core";
import { GetListOfSubjectsService } from "../../common/services";
import { ListOfStudentsService } from "../../common/services";
import { IStudent } from "../../common/entities/interfaces";

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
    private listOfSubjectsService: GetListOfSubjectsService,
    private listOfStudentsService: ListOfStudentsService
  ) {}

  public ngOnInit(): void {
    this.subjects = this.getSubjects();
    this.getStudents();
  }

  public getSubjects(): Array<string> {
    return this.listOfSubjectsService.getSubjects();
  }

  public getStudents(): void {
    this.listOfStudentsService
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

  public changedVisibility(increased: any): void {
    this.isVisible = increased;
    this.subjects = this.getSubjects();
  }
}
