interface IDropdownSelectedData {
  [key: string]: ISubject;
}

interface ISubject {
  [subject: string]: string[];
}

interface IConditionsOfSubjectsSelect {
    [key: string]: ISelectedSubjectInfo;
}

interface ISelectedSubjectInfo {
    visibility: boolean;
    dates: {};
}

export {
  IDropdownSelectedData,
  IConditionsOfSubjectsSelect,
};
