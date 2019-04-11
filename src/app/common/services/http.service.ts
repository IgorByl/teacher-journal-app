import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
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
export class HttpService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.warn(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(error);
  }

  public getData(): any {
    return this.http.get(URL.get).pipe(
      map(data => {
        return data.map(item => {
          return { ...item, id: item.number };
        });
      }),
      catchError(err => {
        console.warn(`ERROR: ${err.status}: ${err.message}`);
        return throwError(err);
      })
    );
  }

  public postStudents(data: IStudent[]): any {
    const body: any = JSON.stringify(data);
    const httpOptions: {} = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http
      .post(URL.post, data, httpOptions)
      .pipe(catchError(err => this.handleError(err)));
  }
}
