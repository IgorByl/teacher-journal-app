import { Student } from './studentClass';

export const STUDENTS: Student[] = [
  {
    name: 'Ivan',
    lastName: 'Ruster',
    address: 'St.Pavlov str. 7',
    desription: 'good guy',
    subjects: {
      physics: [{ '04/02': 8 }, {'05/02': 10}, {'06/02': ''}],
      chemistry: [{ '04/02': '' }, {'05/02': 4}, {'06/02': 6}],
    },
  },
  {
    name: 'Genia',
    lastName: 'Petrov',
    address: 'Nekrasova str. 12',
    desription: 'bad ugly guy',
    subjects: {
      physics: [{ '04/02': '' }, {'05/02': 2}, {'06/02': 4}],
      chemistry: [{ '04/02': 5 }, {'05/02': ''}, {'06/02': 2}],
    },
  },
];
