import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.less"],
})
export class FormComponent implements OnInit {
  @Input() public isParentTemplateHidden: boolean;
  @Input() public formControles: string[];
  @Output() public hiddenParentTemplate: EventEmitter<
    boolean
  > = new EventEmitter<boolean>();
  @Output() public transferFormData: EventEmitter<FormGroup> = new EventEmitter<
    FormGroup
  >();

  public profileForm: FormGroup;
  public formConfig: {} = {};

  constructor(public translate: TranslateService) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.formControles.reduce((acc, field, ind) => {
      const validationFields: ValidatorFn[] = [];
      if (ind <= 1) {
        validationFields.push(Validators.required);
      }
      acc[field] = new FormControl("", validationFields);
      return acc;
    },                        this.formConfig);
    this.profileForm = new FormGroup(this.formConfig);
  }

  public raiseBooleanValueUp(incresed: boolean): void {
    this.hiddenParentTemplate.emit(incresed);
  }

  public transferDataUp(incresed: FormGroup): void {
    this.transferFormData.emit(incresed);
  }
}
