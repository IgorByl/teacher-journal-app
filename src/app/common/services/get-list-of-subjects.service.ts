import { Injectable } from '@angular/core';
import { STUDENTS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class GetListOfSubjectsService {

  constructor() { }

  getSubjects(): Array<string> {
    const subjects: object = {};
    STUDENTS.forEach(item => {
      Object.keys(item.subjects).forEach(it => {
        subjects[it] = 1;
      });
    });
    return Object.keys(subjects);
  }
}

