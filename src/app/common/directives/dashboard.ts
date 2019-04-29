import { Directive, Input, Renderer2, ElementRef } from "@angular/core";

@Directive({ selector: "[appSomeDirective]" })
export class SendButtonDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  @Input() set appSomeDirective(value: boolean) {
    if (value) {
      this.renderer.addClass(this.el.nativeElement, "button__post");
    }
  }
}
