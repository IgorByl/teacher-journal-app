import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs";
import { ICanDeactivate } from "../../entities";

@Injectable({
  providedIn: "root",
})
export class DeactivateGuard implements CanDeactivate<ICanDeactivate> {
  public canDeactivate(component: ICanDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
