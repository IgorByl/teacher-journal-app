interface IDropdownSelectedData {
  name: string;
  subjects: ISubjects;
}

interface ISubjects {
  [subject: string]: string[];
}

interface IConditionsOfSubjectsSelect {
  [key: string]: ISelectedSubjectInfo;
}

interface ISelectedSubjectInfo {
  visibility: boolean;
  dates: {};
}

export { IDropdownSelectedData, IConditionsOfSubjectsSelect };
