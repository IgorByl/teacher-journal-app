import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-form-schema",
  templateUrl: "./form.html",
  styleUrls: ["./form.less"],
})

export class FormSchemaComponent implements OnChanges {
  @Input() public profileForm: FormGroup;
  @Input() public formControles: string[];

  @Output() public raiseBooleanValueUp: EventEmitter<
    boolean
  > = new EventEmitter<boolean>();
  @Output() public transferInputDataUp: EventEmitter<FormGroup> = new EventEmitter<
    FormGroup
  >();

// public ngOnChanges(changes: SimpleChanges): void {
//   console.log(changes);
// }

  public save(): void {
    this.transferInputDataUp.emit(this.profileForm);
    this.raiseBooleanValueUp.emit(false);
  }
}
