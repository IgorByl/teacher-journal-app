import { Component, OnInit } from '@angular/core';
import { Student } from '../studentClass';
import { ListOfStudentsService } from '../list-of-students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less'],
})
export class StudentsComponent implements OnInit {
  students: Student[];
  tableHeaders: Array<string> = [
    'Id',
    'Name',
    'Lastname',
    'Address',
    'Description',
  ];
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

  changed(increased: any): void {
    this.addFlag = increased;
  }
}
