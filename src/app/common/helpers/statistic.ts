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

const findAllMarks: Function = (student, subjects): number[] => {
  let marks: number[] = [];
  const temp: string = "";
  subjects.forEach(subject => {
    marks = [
      ...marks,
      ...(Object.values(student.subjects[subject].marks) as number[]),
    ];
  });
  return marks.filter(item => Number(item) !== Number(temp));
};

const unicNumbersAndTheirCount: Function = (student, subjects) => {
  let marks: Array<string | number> = findAllMarks(student, subjects);
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

const sortSelectedMarks: Function = (selected, subjects): string => {
  const dates: string[] = [];
  subjects.forEach(subject => {
    if (selected[subject].visibility) {
      Object.keys(selected[subject].dates).forEach((date, ind) => {
        if (selected[subject].dates[date]) {
          dates.push(Object.keys(selected[subject].dates)[ind]);
        }
      });
    }
  });

  return [...new Set(dates)].join("; ");
};

export {
  prepareSelectedDataForRender,
  unicNumbersAndTheirCount,
  findAllMarks,
  sortSelectedMarks,
};
