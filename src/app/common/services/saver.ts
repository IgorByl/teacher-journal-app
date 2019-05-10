import { Injectable, Inject } from "@angular/core";
import { throwError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { IStudent } from "../entities";
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { studentsAPI } from "./students.config";

@Injectable({
  providedIn: "root",
})
export class SendDataService {
  constructor(
    private http: HttpClient,
    @Inject(studentsAPI) private studentURL: string
  ) {}

  public sendActualeDataToServer(data: IStudent[]): Observable<Object> {
    const body: string = JSON.stringify(data);
    const httpOptions: {} = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http
      .post(this.studentURL + "/save", body, httpOptions)
      .pipe(catchError(this.handleError));
  }
  public handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof Error) {
      errorMessage = err.error.message;
    } else {
      errorMessage = err.status + err.error;
    }
    return throwError(errorMessage);
  }
}
