import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.html",
  styleUrls: ["./button.less"],
})
export class ButtonComponent implements OnInit {
  @Output() public toggleForm: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  public ngOnInit(): void {}
  public changeFormVisibility(): void {
    this.toggleForm.emit();
  }
}
