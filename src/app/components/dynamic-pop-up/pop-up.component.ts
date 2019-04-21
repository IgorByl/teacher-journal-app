import { Component, Input } from "@angular/core";

@Component({
  selector: "app-message",
  template: `
    <h2>{{ message }}</h2>
  `,
})
export class MessageComponent {
  @Input() public message: string;
}
