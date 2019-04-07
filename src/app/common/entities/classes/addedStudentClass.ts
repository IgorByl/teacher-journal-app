export class CreateNewStudent {
  constructor(
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
