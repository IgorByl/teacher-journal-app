import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { STUDENTS } from './mock-data';
import { Student } from './studentInterface';

@Injectable({
  providedIn: 'root',
})
export class ListOfStudentsService {
  constructor() {}

  getStudents(): Observable<Student[]> {
    return of(STUDENTS);
  }
}
