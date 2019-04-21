interface IDropdownSelectedData {
  [key: string]: ISubject;
}

interface ISubject {
  [subject: string]: string[];
}

interface ICheckboxSubjectVisibility {
    [subject: string]: boolean;
}

interface ICheckboxDateVisibility extends ICheckboxSubjectVisibility {}

interface IConditionsOfSubjectsSelect {
    [key: string]: ISelectedSubjectInfo;
}

interface ISelectedSubjectInfo {
    visibility: boolean;
    dates: {};
}

export {
  IDropdownSelectedData,
  ICheckboxSubjectVisibility,
  ICheckboxDateVisibility,
  IConditionsOfSubjectsSelect,
};
