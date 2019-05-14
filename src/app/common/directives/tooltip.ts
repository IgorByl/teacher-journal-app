import { Directive, Input, OnInit, ElementRef } from "@angular/core";

@Directive({
  selector: "[appTooltip]",
  exportAs: "appTooltip",
})
export class TooltipDirective implements OnInit {
  public tooltipElement: HTMLElement = document.createElement("span");

  @Input() set appTooltip(value: string) {
    console.log(value);
    this.tooltipElement.textContent = value;
  }
  constructor(private element: ElementRef) {}

  public ngOnInit(): void {
    this.tooltipElement.className = "tooltip";
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add("tooltip_container");
  }

  public hide(): void {
    console.log("hide");
    this.tooltipElement.classList.remove("tooltip_action");
  }

  public show(): void {
    console.log("show");
    this.tooltipElement.classList.add("tooltip_action");
  }
}
