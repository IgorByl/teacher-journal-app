import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, tap } from "rxjs/operators";

@Injectable()
export class AuthService {
  public isLoggedIn: boolean = false;
  public redirectURL: string;

  public login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => (this.isLoggedIn = val))
    );
  }

  public logout(): void {
    this.isLoggedIn = false;
  }
}
