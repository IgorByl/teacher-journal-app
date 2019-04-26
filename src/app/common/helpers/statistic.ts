import {
  IStudent,
  IConditionsOfSubjectsSelect,
  IDropdownSelectedData,
} from "../entities";

const prepareSelectedDataForRender: Function = (
  students: IStudent[],
  selectedData: IConditionsOfSubjectsSelect,
  subjects: string[]
): IDropdownSelectedData[] => {
  let collectionData: IDropdownSelectedData[] = [];
  collectionData = students.map(student => {
    return {
      name: student.name + " " + student.lastName,
      subjects: {},
    };
  });
  subjects.forEach(subject => {
    collectionData.map(data => {
      return (data.subjects[subject] = []);
    });
  });
  subjects.forEach(subject => {
    Object.keys(selectedData[subject].dates).forEach((date, index) => {
      if (selectedData[subject].dates[date] === true) {
        students.forEach((student, ind) => {
          collectionData[ind].subjects[subject].push(
            (Object.values(student.subjects[subject].marks) as [])[index]
          );
        });
      }
    });
  });
  return collectionData;
};

const unicNumbersAndTheirCount: Function = (student, subjects) => {
  let marks: Array<string | number> = [];
  subjects.forEach(subject => {
    marks = [
      ...marks,
      ...(Object.values(student.subjects[subject].marks) as number[]),
    ];
  });
  marks = marks.filter(item => (item !== ""));
  const result: {} = {};
  for (let i in marks) {
    if (result[marks[i]] !== undefined) {
      result[marks[i]]++;
    } else {
      result[marks[i]] = 1;
    }
  }
  return result;
};

export { prepareSelectedDataForRender, unicNumbersAndTheirCount };
