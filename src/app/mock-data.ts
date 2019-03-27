import { Student } from './studentClass';

export const STUDENTS: Student[] = [
  {
    name: 'Ivan',
    lastName: 'Ruster',
    address: 'St.Pavlov str. 7',
    desription: 'good boy',
    subjects: {
      physics: [{ '04/02': 8 }, {'05/02': 10}, {'06/02': ''}],
      chemistry: [{ '04/02': '' }, {'05/02': 4}, {'06/02': 6}],
    },
  },
  {
    name: 'Genia',
    lastName: 'Petrova',
    address: 'Nekrasova str. 12',
    desription: 'bad girl',
    subjects: {
      physics: [{ '04/02': '' }, {'05/02': 2}, {'06/02': 4}],
      chemistry: [{ '04/02': 5 }, {'05/02': ''}, {'06/02': 2}],
      literature: [{ '04/02': 5 }, {'05/02': ''}, {'06/02': 2}],
      biology: [{ '04/02': 5 }, {'05/02': ''}, {'06/02': 2}]
    },
  },
];
