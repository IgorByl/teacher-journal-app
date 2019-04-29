import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appPopup]",
})
export class PopupDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
