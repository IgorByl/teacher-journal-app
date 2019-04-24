import { Component, Input } from "@angular/core";
import { IPopUpComponent, IMessage } from "../../common/entities/pop-up";

@Component({
  template: `
    <div class="popup__resolved">
      <h4>{{ data.message }}</h4>
    </div>
  `,
})
export class ResolvedPopUpComponent implements IPopUpComponent {
  @Input() public data: IMessage;
}
