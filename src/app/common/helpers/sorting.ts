export const sorting: any = (collection: [], field: string, toggle: boolean): any => {
 return collection.sort((a, b) => {
    if (toggle) {
      if (a[field] > b[field]) {
        return -1;
      }
      if (a[field] < b[field]) {
        return 1;
      }
    } else {
      if (a[field] > b[field]) {
        return 1;
      }
      if (a[field] < b[field]) {
        return -1;
      }
    }
    return 0;
  });
};
