import { IStudent } from "../entities";

export const sorting: Function = (collection: IStudent[], field: string, toggle: boolean): IStudent[] => {
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
