import { Type } from "@angular/core";

class PopUpItem {
  constructor(public component: Type<any>, public data: IMessage) {}
}

interface IMessage {
  [message: string]: string;
}

interface IPopUpComponent {
  data: {};
}

export { PopUpItem, IPopUpComponent };
