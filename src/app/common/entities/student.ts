class Student {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public address: string,
    public description: string,
    public subjects: ISubjectsInfo | string[],
  ) {}
}

interface IStudent {
  id: number;
  number?: number;
  name: string;
  lastName: string;
  address: string;
  description: string;
  subjects: ISubjectsInfo | string[];
}

interface ISubjectsInfo {
  [subject: string]: IScore;
}

interface IScore {
  marks: IMark;
  date: IDate;
  teacher: string;
  cabinet: number;
  description: string;
}

interface IMark {
  [mark: string]: string;
}

interface IDate {
  [date: string]: string;
}

export { Student, IStudent, ISubjectsInfo, IScore, IMark, IDate };
