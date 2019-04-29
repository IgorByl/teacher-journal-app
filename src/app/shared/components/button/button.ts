import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.html",
  styleUrls: ["./button.less"],
})
export class ButtonComponent {
  @Output() public toggleVisibility: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  public changeVisibility(): void {
    this.toggleVisibility.emit();
  }
}
