import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";
import { IRequest } from "../../common/entities/interfaces";
import { Subscription } from "rxjs";

@Component({
  selector: "app-form",
  templateUrl: "./form.html",
  styleUrls: ["./form.less"],
})
export class FormComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  private validationMessage: any = {
    Name: "",
    LastName: "",
  };
  private validationMessages: any = [
    { required: "Please enter your name." },
    { minlength: "Must be longer than 1 characters." },
    { pattern: "Must enclude only letters." },
  ];

  @Input() public formRequestFields: IRequest;
  @Input() public addFlag: boolean;
  @Output() public changedVisibility: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() public transferFormData: EventEmitter<object> = new EventEmitter<
    object
  >();

  public profileForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  private setValidationMessage(c: AbstractControl, controlName: any): void {
    this.validationMessage = "";
    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage = Object.keys(c.errors)
        .map(key => this.validationMessages[controlName][key])
        .join(" ");
    }
  }

  public ngOnInit(): void {
    this.createForm();
    this.watchValueChanges();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public watchValueChanges(): void {
    const nameControl: AbstractControl = this.profileForm.get([
      this.formRequestFields.firstRow,
    ]);
    // const lastNameControl: AbstractControl = this.profileForm.get([
    //   this.formRequestFields.secondRow,
    // ]);
    this.sub = nameControl.valueChanges.subscribe(value =>
      this.setValidationMessage(nameControl, "Name")
    );
    // const subLastName: Subscription = lastNameControl.valueChanges.subscribe(value =>
    //   this.setValidationMessage(lastNameControl, "Lastname")
    // );
    // this.sub.add(subName);
    // this.sub.add(subLastName);
  }

  public save(): void {
    this.transferFormData.emit(this.profileForm);
    this.changedVisibility.emit(false);
    this.profileForm.reset();
  }

  public onBlur(): void {
    const nameControl: AbstractControl = this.profileForm.get([
      this.formRequestFields.firstRow,
    ]);
    // const lastNameControl: AbstractControl = this.profileForm.get([
    //   this.formRequestFields.secondRow,
    // ]);
    this.setValidationMessage(nameControl, "Name");
    // this.setValidationMessage(lastNameControl, "Lastname");
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
