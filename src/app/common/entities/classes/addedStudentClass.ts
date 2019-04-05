export class CreateNewStudent {
  constructor(
    public name: string,
    public lastName: string,
    public address: string,
    public desription: string,
    public subjects: object = {
      physics: [],
      chemistry: [],
    }
  ) {}
}
