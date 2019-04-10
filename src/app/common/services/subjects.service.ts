import { Injectable } from "@angular/core";
import { unicSubjectSearch } from "../helpers";
import { StoreService } from "./store.service";
@Injectable({
  providedIn: "root",
})
export class SubjectsService {
  public students: any;

  constructor(private storeService: StoreService) {}

  public getSubjects(): any {
  return this.storeService.getStudents().subscribe(data => unicSubjectSearch(this.students = data));
  }
}
