import { IStudent } from "../entities";
import { FormGroup } from "@angular/forms";

const unicSubjectSearch: Function = (students: IStudent[]): string[] => {
  const subjects: {} = {};
  students.forEach(item => {
    Object.keys(item.subjects).forEach(it => {
      subjects[it] = 1;
    });
  });
  return Object.keys(subjects);
};

const addNewSubject: Function = (
  students: IStudent[],
  increased: FormGroup
): IStudent[] => {
  students.map(item => {
    return (item.subjects[increased.value.subject] = {
      date: {},
      marks: {},
      teacher: increased.value.teacher,
      cabinet: Number(increased.value.cabinet),
      description: increased.value.description,
    });
  });
  return students;
};

export { unicSubjectSearch, addNewSubject };
