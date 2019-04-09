export class CreateNewStudent {
    constructor(
      public id: number,
      public name: string,
      public lastName: string,
      public address: string,
      public desription: string,
      public subjects: object = {
        physics: {
          marks: ["", "", ""],
          date: ["04.02", "05.02", "06.02"],
          teacher: "",
          cabinet: "",
          description: "",
        },
        chemistry: {
          marks: ["", "", ""],
          date: ["04.02", "05.02", "06.02"],
          teacher: "",
          cabinet: "",
          description: "",
        },
        literature: {
          marks: ["", "", ""],
          date: ["04.02", "05.02", "06.02"],
          teacher: "",
          cabinet: "",
          description: "",
        },
        biology: {
          marks: ["", "", ""],
          date: ["04.02", "05.02", "06.02"],
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
