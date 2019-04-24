import { Injectable } from "@angular/core";
import { throwError, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { IStudent } from "../entities";
import {
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { URL } from "../constants";

@Injectable({
  providedIn: "root",
})
export class SendDataService {
  constructor(private http: HttpClient) {}

  public sendActualeDataToServer(data: IStudent[]): Observable<Object> {
    const body: string = JSON.stringify(data);
    const httpOptions: {} = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http
      .post(URL.post, body, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }
}
