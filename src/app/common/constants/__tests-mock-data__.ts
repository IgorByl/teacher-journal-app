import { IStudent } from "../entities";
import { PopUpItem } from "../entities/pop-up";
import { ResolvedPopUpComponent } from "src/app/shared/components/dynamic-pop-up/resolved-pop-up.component";
import { RejectedPopUpComponent } from "src/app/shared/components/dynamic-pop-up/rejected-pop-up.component";

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

export class MockPopUpService {
  public addNewStudentResolvedPopUp(): PopUpItem {
    return new PopUpItem(ResolvedPopUpComponent, {
      message: "Success!",
    });
  }
  public getRejectedLoadedPopUp(): PopUpItem {
    return new PopUpItem(RejectedPopUpComponent, {
      message: "Failed!",
    });
  }
}
