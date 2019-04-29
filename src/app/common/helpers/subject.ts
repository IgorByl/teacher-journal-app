export const unicSubjectSearch: any = (students): any => {
  const subjects: any = {};
  students.forEach(item => {
    Object.keys(item.subjects).forEach(it => {
      subjects[it] = 1;
    });
  });
  return Object.keys(subjects);
};
