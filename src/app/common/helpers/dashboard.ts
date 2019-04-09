export const setDate: any = (date): any => {
  if (date) {
    date.setDate(date.getDate() + 1);
  } else {
    date = new Date();
  }
  return date;
};
