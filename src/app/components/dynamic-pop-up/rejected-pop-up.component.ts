import { Component, Input } from "@angular/core";
import { IPopUpComponent } from "../../common/entities/pop-up";

@Component({
  template: `
    <div class="popup__rejected">
      <h4>{{ data.message }}</h4>
    </div>
  `,
})
export class RejectedPopUpComponent implements IPopUpComponent {
  @Input() public data: any;
}
