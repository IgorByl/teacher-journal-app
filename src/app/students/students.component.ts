import { Component, OnInit } from '@angular/core';
import { Student } from '../studentClass';
import { ListOfStudentsService } from '../list-of-students.service';
import { AddedStudent } from '../AddedStudentClass';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less'],
})
export class StudentsComponent implements OnInit {
  students: Student[];
  subjects: Array<string>;
  tableHeaders: Array<string> = [
    'Id',
    'Name',
    'Lastname',
    'Address',
    'Description',
  ];
  formRequestFields: object = {
    title: 'Add new student:',
    firstRoW: 'studentName',
    secondRow: 'studentLastname',
    thirdRow: 'studentAddress',
    fourthRow: 'studentDescription',
  };

  addFlag: boolean = false;
  constructor(private studentsListService: ListOfStudentsService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsListService
      .getStudents()
      .subscribe(students => (this.students = students));
  }

  addNewStudent(): void {
    this.addFlag = !this.addFlag;
  }

  changedVisibility(increased: any): void {
    this.addFlag = increased;
  }

  transferFormData(increased: any): void {
    this.students.push(
      new AddedStudent(
        increased.value.studentName,
        increased.value.studentLastname,
        increased.value.studentAddress,
        increased.value.studentDescription
      )
    );
  }
}
