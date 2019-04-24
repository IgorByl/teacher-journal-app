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
    return (item.subjects[increased.value.Subject] = {
      date: {},
      marks: {},
      teacher: increased.value.Teacher,
      cabinet: Number(increased.value.Cabiner),
      description: increased.value.Description,
    });
  });
  return students;
};

export { unicSubjectSearch, addNewSubject };
