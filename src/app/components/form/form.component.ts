import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-schema",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.less"],
})
export class FormSchemaComponent {
  @Input() public profileForm: FormGroup;
  @Input() public formControles: string[];

  @Output() public raiseBooleanValueUp: EventEmitter<
  boolean
> = new EventEmitter<boolean>();
@Output() public transferDataUp: EventEmitter<FormGroup> = new EventEmitter<
  FormGroup
>();

  public save(): void {
    this.transferDataUp.emit(this.profileForm);
    this.raiseBooleanValueUp.emit(false);
  }
}
