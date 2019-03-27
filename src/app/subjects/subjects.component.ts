import { Component, OnInit } from '@angular/core';
import { GetListOfSubjectsService } from '../get-list-of-subjects.service';
import { AddedSubject } from '../AddedSubjectClass';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.less'],
})
export class SubjectsComponent implements OnInit {
  title: string = 'List of subjects:';
  subjects: Array<string> = [];
  addFlag: boolean = false;
  constructor(private subjectListService: GetListOfSubjectsService) {}

  ngOnInit() {
    this.subjects = this.getSubjects();
  }

  getSubjects(): Array<string> {
    return this.subjectListService.getSubjects();
  }

  addNewSubject(): void {
    this.addFlag = !this.addFlag;
  }

  transferFormData(increased: any): void {
    console.log(
      new AddedSubject(
        increased.value.studentName,
        increased.value.studentLastname,
        increased.value.studentAddress,
        increased.value.studentDescription
      )
    );
  }

  changedVisibility(increased: any): void {
    this.addFlag = increased;
  }
}
