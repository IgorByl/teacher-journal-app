export class Student {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public address: string,
    public desription: string,
    public subjects: {},
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.address = address;
    this.desription = desription;
    this.subjects = subjects;
  }
}

export interface IStudent {
  id: number;
  name: string;
  lastName: string;
  address: string;
  desription: string;
  subjects: any;
}
