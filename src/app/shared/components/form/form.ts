import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  AfterContentInit,
  ContentChildren,
} from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";
import { Subscription } from "rxjs";
import { message, messages } from "../../../common/constants";

@Component({
  selector: "app-form",
  templateUrl: "./form.html",
  styleUrls: ["./form.less"],
})
export class FormComponent implements OnDestroy, AfterContentInit {
  private sub: Subscription;

  private validationMessage: any = message;
  private validationMessages: any = messages;

  @Input() public isVisible: boolean;
  @Output() public hiddenForm: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() public transferFormData: EventEmitter<object> = new EventEmitter<
    object
  >();
  @ContentChildren("formControlsData") public childrens: any;

  public profileForm: FormGroup;
  public formControlsNames: string[];

  constructor(private fb: FormBuilder) {}

  private setValidationMessage(c: AbstractControl, controlName: any): void {
    this.validationMessage[controlName] = "";
    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage[controlName] = Object.keys(c.errors)
        .map(key => this.validationMessages[key])
        .join(" ");
    }
  }

  public ngAfterContentInit(): void {
    this.formControlsNames = [...this.childrens._results.map(item => item.nativeElement.innerText)];
    this.createForm();
    this.watchValueChanges();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public watchValueChanges(): void {
    const nameControl: AbstractControl = this.profileForm.get([
      this.formControlsNames[0],
    ]);
    const lastNameControl: AbstractControl = this.profileForm.get([
      this.formControlsNames[1],
    ]);
    this.sub = nameControl.valueChanges.subscribe(value =>
      this.setValidationMessage(nameControl, "Name")
    );
    const subLastName: Subscription = lastNameControl.valueChanges.subscribe(
      value => this.setValidationMessage(lastNameControl, "LastName")
    );
    this.sub.add(subLastName);
  }

  public save(): void {
    this.transferFormData.emit(this.profileForm);
    this.hiddenForm.emit(false);
    this.profileForm.reset();
  }

  public onBlur(): void {
    const nameControl: AbstractControl = this.profileForm.get([
      this.formControlsNames[0],
    ]);
    const lastNameControl: AbstractControl = this.profileForm.get([
      this.formControlsNames[1],
    ]);
    this.setValidationMessage(nameControl, "Name");
    this.setValidationMessage(lastNameControl, "Lastname");
  }

  public createForm(): void {
    this.profileForm = this.fb.group(
      {
        [this.formControlsNames[0]]: [
          "",
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern(
              /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
            ),
          ],
        ],
        [this.formControlsNames[1]]: [
          "",
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern(
              /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
            ),
          ],
        ],
        [this.formControlsNames[2]]: [""],
        [this.formControlsNames[3]]: [""],
      },
      { updateOn: "blur" }
    );
  }
}
