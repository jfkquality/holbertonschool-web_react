import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const filtered = Seq(obj).filter((value) => value.score >= 70).toJS();
  Object.keys(filtered).map((val) => {
    const record = filtered[val];
    record.firstName = record.firstName[0].toUpperCase() + record.firstName.slice(1);
    record.lastName = record.lastName[0].toUpperCase() + record.lastName.slice(1);
    return (record);
  });

  console.log(filtered);
}

// const grades = {
//     1: {
//         score: 99,
//         firstName: 'guillaume',
//         lastName: 'salva',
//     },
//     2: {
//         score: 69,
//         firstName: 'knight',
//         lastName: 'salva',
//     },
//     3: {
//         score: 70,
//         firstName: 'day',
//         lastName: 'salva',
//     },
// };

// printBestStudents(grades);
