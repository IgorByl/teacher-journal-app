import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { AuthService } from "./../../common/services";
import { Router } from "@angular/router";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  public message: string;
  constructor(private router: Router, public authService: AuthService) {}

  private setMessage(): void {
    this.message = "Logged" + (this.authService.isLoggedIn ? "in" : "out");
  }

  public ngOnInit(): void {
    this.setMessage();
  }

  public ngOnDestroy(): void {
    console.log("onDestroy");
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public onLogin(): void {
    this.message = "Trying to login...";
    this.authService
      .login()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        () => {
          this.setMessage();
          if (this.authService.isLoggedIn) {
            const redirect: string = this.authService.redirectURL
              ? this.authService.redirectURL
              : "/admin";
            this.router.navigate([redirect]);
          }
        },
        err => console.log(err),
        () => console.log("complite")
      );
  }

  public onLogout(): void {
    this.authService.logout();
    this.setMessage();
  }
}
