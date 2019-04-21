import { IStudent } from "../entities";

export const unicSubjectSearch: Function = (students: IStudent[]): string[] => {
  const subjects: {} = {};
  students.forEach(item => {
    Object.keys(item.subjects).forEach(it => {
      subjects[it] = 1;
    });
  });
  return Object.keys(subjects);
};
