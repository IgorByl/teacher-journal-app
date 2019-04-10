import { Injectable } from "@angular/core";
import { unicValueSearch } from "../helpers";
import { StoreService } from "./store.service";
@Injectable({
  providedIn: "root",
})
export class SubjectsService {
  public students: any;

  constructor(private storeService: StoreService) {}

  public getSubjects(): Array<string> {
    this.storeService.getStudents().subscribe(data => (this.students = data));
    return unicValueSearch(this.students);
  }
}
