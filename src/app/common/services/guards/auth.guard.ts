import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
  CanActivateChild,
  NavigationExtras,
  CanLoad,
  Route,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./../auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.authService.redirectURL = url;

    const sessionId: number = 123456789;
    const navigationExtras: NavigationExtras = {
      queryParams: { sessionId },
      fragment: "anchor",
    };

    this.router.navigate(["/login"], navigationExtras);
    return false;
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("guard is called!");
    const { url } = state;
    return this.checkLogin(url);
  }

  public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("childguard is called!");
    const { url } = state;
    return this.checkLogin(url);
  }

  public canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("CanLoadGuard is load!");
    const url: string = `/${route.path}`;
    return this.checkLogin(url);
  }
}
