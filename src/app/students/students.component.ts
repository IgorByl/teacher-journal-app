import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../mock-data';
import { Student } from '../studentClass';
import { ListOfStudentsService } from '../list-of-students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less'],
})
export class StudentsComponent implements OnInit {
  students: Student[];

  constructor(private studentsListService: ListOfStudentsService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsListService
      .getStudents()
      .subscribe(students => (this.students = students));
    console.log(this.students);
  }
}
