import { Directive, Input, ElementRef, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
  selector: "[myFor][myForOf]",
})
export class IterateDirective {
  @Input() set myForOf(collection) {
    console.log(collection);
    collection.forEach((item, index) => {
        this.view.createEmbeddedView(this.template, {
            $implicit: item,
            index
        });
    });
  }

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) {}
}
