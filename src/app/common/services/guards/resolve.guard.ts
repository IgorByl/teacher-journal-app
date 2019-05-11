import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve,
  Router,
} from "@angular/router";
import { Observable, Subscription, of } from "rxjs";
import { IStudent } from "../../entities";
import { select } from "@angular-redux/store";
import {
  map,
  tap,
  catchError,
  take,
  delay,
  retry,
  throttleTime,
} from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ResolveGuard implements Resolve<IStudent[]> {
  public sub: Subscription;
  @select(state => state.studentsReducer)
  public readonly students$: Observable<IStudent[]>;
  constructor(private router: Router) {}

  public resolve(rout: ActivatedRouteSnapshot): Observable<IStudent[] | null> {
    console.log("resolve guard is called!");
    return this.students$.pipe(
      tap(
        data => {
          console.log(data);
          if (data.length) {
            return of(data);
          } else {
            this.router.navigate(["/login"]);
            return of(null);
          }
        },
        catchError(() => {
          this.router.navigate(["/login"]);
          return of(null);
        })
      )
    );
  }
}
