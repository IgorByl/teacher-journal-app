import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddedStudent } from '../AddedStudentClass';
import { Student } from '../studentClass';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.less'],
})
export class AddStudentComponent implements OnInit {
  @Input() addFlag: boolean;
  @Input() list: Student[];
  @Output() changed = new EventEmitter <boolean>();

  ngOnInit() {
  }

  addStudent(
    myForm: NgForm,
    studentName: string,
    studentLastname: string,
    studentAddress: string,
    studentDescription: string
  ): void {
    this.list.push(
      new AddedStudent(
        studentName,
        studentLastname,
        studentAddress,
        studentDescription
      )
    );
    this.changed.emit(false);
    myForm.resetForm();
  }

}
