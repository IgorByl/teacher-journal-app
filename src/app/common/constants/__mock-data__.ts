import { IStudent } from "../entities";

export const data: IStudent[] = [
  {
    name: "Ivan",
    lastName: "Popov",
    id: 2,
    description: "none",
    subjects: {},
    address: "23",
  },
  {
    name: "Dmitry",
    lastName: "Tarov",
    id: 3,
    description: "yeh",
    subjects: {},
    address: "32",
  },
];

export const formControlNames: string[] = [
  "name",
  "lastName",
  "Address",
  "Description",
];

export class MockDataService {}

export class MockPopUpService {
  public addNewStudentResolvedPopUp(): {} {
    return { message: "Student succesfully added!" };
  }
}
