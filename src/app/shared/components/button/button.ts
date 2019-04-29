import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.html",
  styleUrls: ["./button.less"],
})
export class ButtonComponent {
  @Output() public raiseEventUp: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  public eventHandler(): void {
    this.raiseEventUp.emit();
  }
}
