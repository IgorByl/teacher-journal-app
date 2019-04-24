import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.html",
  styleUrls: ["./button.less"],
})
export class ButtonComponent {
  @Output() public toggleParentTemplateVisibility: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  public changeParentVisibility(): void {
    this.toggleParentTemplateVisibility.emit();
  }
}
