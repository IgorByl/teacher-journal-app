import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddedStudent } from '../AddedStudentClass';
import { Student } from '../studentClass';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.less'],
})
export class AddStudentComponent implements OnInit {
  @Input() addFlag: boolean;
  @Input() list: Student[];
  @Output() changed = new EventEmitter<boolean>();

  profileForm: FormGroup = new FormGroup({
    studentName: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
      ),
    ]),
    studentLastname: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
      ),
    ]),
    studentAddress: new FormControl(''),
    studentDescription: new FormControl(''),
  });

  ngOnInit() {}

  addStudent(): void {
    this.list.push(
      new AddedStudent(
        this.profileForm.value.studentName,
        this.profileForm.value.studentLastname,
        this.profileForm.value.studentAddress,
        this.profileForm.value.studentDescription
      )
    );
    this.changed.emit(false);
    this.profileForm.reset();
  }
}
