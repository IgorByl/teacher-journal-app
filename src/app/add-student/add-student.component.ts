import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.less'],
})
export class AddStudentComponent implements OnInit {
  @Input() formRequestFields: object;
  @Input() addFlag: boolean;
  @Output() changedVisibility = new EventEmitter<boolean>();
  @Output() transferFormData = new EventEmitter<object>();

  profileForm: FormGroup = new FormGroup({
    '{{this.formRequestFields.firstRow}}': new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
      ),
    ]),
    '{{this.formRequestFields.secondRow}}': new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
      ),
    ]),
    '{{this.formRequestFields.thirdRow}}': new FormControl(''),
    '{{this.formRequestFields.fourthRow}}': new FormControl(''),
  });

  ngOnInit() {}

  omSubmit(): void {
    this.transferFormData.emit(this.profileForm);
    this.changedVisibility.emit(false);
    this.profileForm.reset();
  }
}
