import { Component, OnInit } from '@angular/core';
import { GetListOfSubjectsService } from '../get-list-of-subjects.service';
import { ListOfStudentsService } from '../list-of-students.service';
import { Student } from '../studentInterface';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.less'],
})
export class SubjectsComponent implements OnInit {
  title: string = 'List of subjects:';
  subjects: Array<string> = [];
  students: Student[];
  addFlag: boolean = false;
  formRequestFields: object = {
    title: 'Add new subject:',
    firstRow: 'Subject',
    secondRow: 'Teacher',
    thirdRow: 'Cabiner',
    fourthRow: 'Description',
  };

  constructor(
    private subjectListService: GetListOfSubjectsService,
    private studentsListService: ListOfStudentsService
  ) {}

  // ngOnChanges() {


  ngOnInit() {
    this.subjects = this.getSubjects();
    this.getStudents();
  }

  getSubjects(): Array<string> {
    return this.subjectListService.getSubjects();
  }

  getStudents(): void {
    this.studentsListService
      .getStudents()
      .subscribe(students => (this.students = students));
  }

  addNewSubject(): void {
    this.addFlag = !this.addFlag;
  }

  transferFormData(increased: any): void {
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

  changedVisibility(increased: any): void {
    this.addFlag = increased;
    this.subjects = this.getSubjects();
  }
}
