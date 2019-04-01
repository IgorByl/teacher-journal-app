import { Component, OnInit } from "@angular/core";
import { GetListOfSubjectsService } from "../../common/services";
import { ListOfStudentsService } from "../../common/services";
import { IStudent } from "../../common/entities/interfaces";
import { FORM_REQUEST_SUBJECTS_FIELDS } from "../../common/constants"

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.less"],
})
export class SubjectsComponent implements OnInit {
  public title: string = "List of subjects:";
  public subjects: Array<string> = [];
  public students: IStudent[];
  public addFlag: boolean = false;
  public formRequestFields: object = FORM_REQUEST_SUBJECTS_FIELDS;

  constructor(
    // tslint:disable-next-line:no-parameter-properties
    private subjectListService: GetListOfSubjectsService,
    // tslint:disable-next-line:no-parameter-properties
    private studentsListService: ListOfStudentsService
  ) {}

  public ngOnInit(): void {
    this.subjects = this.getSubjects();
    this.getStudents();
  }

  public getSubjects(): Array<string> {
    return this.subjectListService.getSubjects();
  }

  public getStudents(): void {
    this.studentsListService
      .getStudents()
      .subscribe(students => (this.students = students));
  }

  public addNewSubject(): void {
    this.addFlag = !this.addFlag;
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

  public changedVisibility(increased: any): void {
    this.addFlag = increased;
    this.subjects = this.getSubjects();
  }
}
