import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1).concat(List(page2)); // .toJS();
}

export function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2)); // .toJS();
}

// const obj1 =  {
//     1: 'Liam',
//     2: 'Noah',
//     3: 'Elijah',
//     4: 'Oliver',
//     5: 'Jacob',
//     6: 'Lucas',
// };

// const obj2=  {
//     1: 'John',
//     2: 'Noah',
//     3: 'Elijah',
//     4: 'Oliver',
//     5: 'Jacob',
//     6: 'Lucas',
// };

// const arr1 = ['ham', 'salami', 'bologna', 'pastrami'];
// const arr2 = ['american', 'swiss', 'gouda', 'muenster', 'mozzarella', 'cheddar', 'jack'];

// console.log(arr2);
// console.log(concatElements(arr1, arr2));   //.toJS());
// console.log(mergeElements(obj1, obj2));   //.toJS());
