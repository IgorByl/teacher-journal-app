import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { IStudent } from "../entities";
import { HttpClient } from "@angular/common/http";
import { URL } from "../constants";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

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
    const body: IStudent[] = data;
    return this.http.post(URL.post, body);
  }
}
