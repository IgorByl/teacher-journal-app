export const searchUnicDate: Function = (students, subject): string[] => {
  const dateObj: {} = {};
  students.map(item => {
    const listOfDate: string[] = Object.values(item.subjects[subject].date);
    listOfDate.forEach(items => {
      dateObj[items] = 1;
    });
  }
  );
  return Object.keys(dateObj);
};
