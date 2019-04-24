import {
  Component,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
  ComponentFactory,
  ViewContainerRef,
  ComponentRef,
  OnChanges,
} from "@angular/core";
import { PopupDirective } from "src/app/common/directives";
import { IPopUpComponent, PopUpItem } from "../../common/entities/pop-up";

@Component({
  selector: "app-popup",
  template: `
    <ng-template appPopup></ng-template>
  `,
})
export class PopUpComponent implements OnChanges, OnDestroy {

  @Input() public popUpInfo: PopUpItem;
  @ViewChild(PopupDirective) public popUpHost: PopupDirective;
  public componentRef: ComponentRef<PopUpItem>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public ngOnChanges(): void {
    this.loadComponent();
  }

  public ngOnDestroy(): void {
    if (this.componentRef) {
      this.destroyComponent();
    }
  }

  public destroyComponent: Function = (): void => {
    this.componentRef.destroy();
  }

  public loadComponent(): void {
    let componentFactory: ComponentFactory<
      PopUpItem
    > = this.componentFactoryResolver.resolveComponentFactory(
      this.popUpInfo.component
    );
    let viewContainerRef: ViewContainerRef = this.popUpHost.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<IPopUpComponent>this.componentRef.instance).data = this.popUpInfo.data;
    setTimeout(this.destroyComponent, 1500);
  }
}
