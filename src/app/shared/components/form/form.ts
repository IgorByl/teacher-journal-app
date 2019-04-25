import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.html",
  styleUrls: ["./form.less"],
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

  constructor(private fb: FormBuilder, public translate: TranslateService) {}

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.formControles.reduce((acc, field) => {
      acc[field] = new FormControl("");
      return acc;
    },                        this.formConfig);
    this.profileForm = new FormGroup(this.formConfig);
  }

  public hiddenTempl(increse: boolean): void {
    console.log(increse);
    this.hiddenParentTemplate.emit(increse);
  }

  public transferData(increse: FormGroup): void {
    console.log(increse);
    this.transferFormData.emit(increse);
  }
}
