import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { IRequest } from "../../common/entities/interfaces";

@Component({
  selector: "app-form",
  templateUrl: "./form.html",
  styleUrls: ["./form.less"],
})
export class FormComponent implements OnInit {
  @Input() public formRequestFields: IRequest;
  @Input() public addFlag: boolean;
  @Output() public changedVisibility: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() public transferFormData: EventEmitter<object> = new EventEmitter<
    object
  >();

  public profileForm: FormGroup;

  // tslint:disable-next-line:no-parameter-properties
  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public save(): void {
    this.transferFormData.emit(this.profileForm);
    this.changedVisibility.emit(false);
    this.profileForm.reset();
  }

  public createForm(): void {
    this.profileForm = this.fb.group(
      {
        [this.formRequestFields.firstRow]: [
          "",
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern(
              /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
            ),
          ],
        ],
        [this.formRequestFields.secondRow]: [
          "",
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern(
              /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
            ),
          ],
        ],
        [this.formRequestFields.thirdRow]: [""],
        [this.formRequestFields.fourthRow]: [""],
      },
      { updateOn: "blur" }
    );
  }
}
