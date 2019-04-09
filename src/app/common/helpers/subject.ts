export const unicValueSearch: any = (students): any => {
  const subjects: object = {};
  students.forEach(item => {
    Object.keys(item.subjects).forEach(it => {
      subjects[it] = 1;
    });
  });
  return Object.keys(subjects);
};
