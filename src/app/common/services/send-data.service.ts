import { Injectable } from "@angular/core";
import { throwError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { IStudent } from "../entities";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { URL } from "../constants";

@Injectable({
  providedIn: "root",
})
export class SendDataService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.warn(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(error);
  }

  public sendActualeDataToServer(data: IStudent[]): Observable<Object> {
    const body: string = JSON.stringify(data);
    const httpOptions: {} = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http
      .post(URL.post, body, httpOptions)
      .pipe(catchError(err => this.handleError(err)));
  }
}
