import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IRequest } from "../../common/entities/interfaces";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.less"],
})
export class FormComponent implements OnInit {
  @Input() public formRequestFields: IRequest;
  @Input() public addFlag: boolean;
  @Output() public changedVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public transferFormData: EventEmitter<object> = new EventEmitter<object>();
  public profileForm: FormGroup;

  public ngOnInit(): void {
    this.fn();
  }

  public omSubmit(): void {
    this.transferFormData.emit(this.profileForm);
    this.changedVisibility.emit(false);
    this.profileForm.reset();
  }

  public fn(): void {
    this.profileForm = new FormGroup({
      [this.formRequestFields.firstRow]: new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
        ),
      ]),
      [this.formRequestFields.secondRow]: new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
        ),
      ]),
      [this.formRequestFields.thirdRow]: new FormControl(""),
      [this.formRequestFields.fourthRow]: new FormControl(""),
    });
  }
}
