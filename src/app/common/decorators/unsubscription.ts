import { Subject } from "rxjs";

export function AutoUnsubscribe(subName: string = "sub"): Function {
  return function(constructor): void {
    const original: Function = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function(): void {
      const sub: Subject<string> = this[subName];
      if (sub) {
        sub.unsubscribe();
      }
      if (original && typeof original === "function") {
        original.apply(this, arguments);
      }
      console.log(
        `Unsubscribe decorator is called. Subscription name is: ${subName}`
      );
    };
  };
}
