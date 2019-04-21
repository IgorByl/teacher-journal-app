import { IStudent } from "../entities";

export const searchUnicDate: Function = (
  students: IStudent[],
  subject: string
): string[] => {
  const dateObj: {} = {};
  students.map(item => {
    const listOfDate: string[] = Object.values(item.subjects[subject].date);
    listOfDate.forEach(items => {
      dateObj[items] = 1;
    });
  });
  return Object.keys(dateObj);
};
