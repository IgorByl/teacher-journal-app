import { Student } from './studentInterface';

export const STUDENTS: Student[] = [
  {
    name: 'Ivan',
    lastName: 'Ruster',
    address: 'St.Pavlov str. 7',
    desription: 'good boy',
    subjects: {
      physics: {
        marks: [{ '04/02': 8 }, { '05/02': 10 }, { '06/02': '' }],
        teacher: 'Maria Ivanovna',
        cabiner: 213,
        description: 'dont open the windom',
      },
      chemistry: {
        marks: [{ '04/02': '' }, { '05/02': 4 }, { '06/02': 6 }],
        teacher: 'Arkadii Tarbochin',
        cabiner: 134,
        description: 'class meeting 14.00',
      },
    },
  },
  {
    name: 'Genia',
    lastName: 'Petrova',
    address: 'Nekrasova str. 12',
    desription: 'bad girl',
    subjects: {
      physics: {
        marks: [{ '04/02': 8 }, { '05/02': 10 }, { '06/02': '' }],
        teacher: 'Maria Ivanovna',
        cabiner: 213,
        description: 'dont open the windom',
      },
      chemistry: {
        marks: [{ '04/02': '' }, { '05/02': 4 }, { '06/02': 6 }],
        teacher: 'Arkadii Tarbochin',
        cabiner: 134,
        description: 'class meeting 14.00',
      },
      literature: {
        marks: [{ '04/02': 5 }, { '05/02': '' }, { '06/02': 2 }],
        teacher: 'Dzianis Volchik',
        cabiner: 101,
        description: 'on cleaning',
      },
      biology: {
        marks: [{ '04/02': 5 }, { '05/02': '' }, { '06/02': 2 }],
        teacher: 'Evgenii Kostin',
        cabiner: 411,
        description: 'closed',
      },
    },
  },
];
