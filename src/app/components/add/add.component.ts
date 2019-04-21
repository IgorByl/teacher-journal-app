import {
  Component,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { AdDirective } from "src/app/common/directives/pop-up";

@Component({
  selector: "app-add",
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template appPopup></ng-template>
    </div>
  `,
})
export class AddComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  public loadComponent(): void {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      adItem.component
    );

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  public getAds(): void {
    this.interval = setInterval(() => {
      this.loadComponent();
    },                          3000);
  }
}
