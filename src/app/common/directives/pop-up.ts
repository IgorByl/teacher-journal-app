import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appPopup]",
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
