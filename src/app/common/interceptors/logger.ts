import { finalize, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from "@angular/common/http";
import { SendDataService } from "../services";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private messenger: SendDataService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started: number = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(req).pipe(
      tap(
        // Succeeds when there is a response; ignore other events
        event => (ok = event instanceof HttpResponse ? "succeeded" : ""),
        // Operation failed; error is an HttpErrorResponse
        error => (ok = "failed")
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed: number = Date.now() - started;
        const msg: string = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
        console.warn(msg);
      })
    );
  }
}
