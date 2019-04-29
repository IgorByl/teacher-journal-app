import { Injectable } from "@angular/core";

import { ResolvedPopUpComponent } from "../../shared/components/dynamic-pop-up/resolved-pop-up.component";
import { RejectedPopUpComponent } from "../../shared/components/dynamic-pop-up/rejected-pop-up.component";
import { PopUpItem } from "../entities";

@Injectable()
export class PopUpService {

  public getResolvedLoadedPopUp(): PopUpItem {
    return new PopUpItem(ResolvedPopUpComponent, {
      message: "Students succesfully loadied!",
    });
  }

  public getRejectedLoadedPopUp(): PopUpItem {
    return new PopUpItem(RejectedPopUpComponent, {
      message: "Student\'s loading failed!",
    });
  }

  public addNewStudentResolvedPopUp(): PopUpItem {
    return new PopUpItem(ResolvedPopUpComponent, {
      message: "Student succesfully added!",
    });
  }

  public addNewStudentRejectedPopUp(): PopUpItem {
    return new PopUpItem(RejectedPopUpComponent, {
      message: "Student\'s adding failed!",
    });
  }

  public addNewSubjectResolvedPopUp(): PopUpItem {
    return new PopUpItem(ResolvedPopUpComponent, {
      message: "Subject succesfully added!",
    });
  }

  public addNewSubjectRejectedPopUp(): PopUpItem {
    return new PopUpItem(RejectedPopUpComponent, {
      message: "Subject\'s adding failed!",
    });
  }

  public dataSavedResolvedPopUp(): PopUpItem {
    return new PopUpItem(ResolvedPopUpComponent, {
      message: "Saved succesfully!",
    });
  }

  public dataSavedRejectedPopUp(): PopUpItem {
    return new PopUpItem(RejectedPopUpComponent, {
      message: "Saving failed!",
    });
  }

  public exelCreatedResolvedPopUp(): PopUpItem {
    return new PopUpItem(ResolvedPopUpComponent, {
      message: "Exel exported successfully!",
    });
  }
}
