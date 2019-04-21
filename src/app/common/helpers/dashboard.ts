export const setDate: Function = (date): Date => {
  if (date) {
    date.setDate(date.getDate() + 1);
  } else {
    date = new Date();
  }
  return date;
};
