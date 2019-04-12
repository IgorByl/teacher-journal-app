export class CreateNewStudent {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public address: string,
    public desription: string,
    public subjects: object = {
      physics: {
        date: { "1": "04.02", "2": "05.02", "3": "06.02" },
        marks: { "1": "2", "2": "5", "3": "" },
        teacher: "",
        cabinet: "",
        description: "",
      },
      chemistry: {
        date: { "1": "04.02", "2": "05.02", "3": "06.02" },
        marks: { "1": "2", "2": "5", "3": "" },
        teacher: "",
        cabinet: "",
        description: "",
      },
      literature: {
        date: { "1": "04.02", "2": "05.02", "3": "06.02" },
        marks: { "1": "2", "2": "5", "3": "" },
        teacher: "",
        cabinet: "",
        description: "",
      },
      biology: {
        date: { "1": "04.02", "2": "05.02", "3": "06.02" },
        marks: { "1": "2", "2": "5", "3": "" },
        teacher: "",
        cabinet: "",
        description: "",
      },
    }
  ) {}
}

export interface IStudent {
  id: number;
  name: string;
  lastName: string;
  address: string;
  desription: string;
  subjects: object;
}
