export class CreateNewStudent {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public address: string,
    public desription: string,
    public subjects: any = {}
  ) {}
}

export interface IStudent {
  id: number;
  name: string;
  lastName: string;
  address: string;
  desription: string;
  subjects: any;
}
