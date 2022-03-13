import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const name = fromJS(object);
  // return fromJS(getIn(object, array)); //Manny
  return name.getIn(array, undefined);
}

// console.log(accessImmutableObject({
//   name: {
//     first: 'Guillaume',
//     last: 'Salva',
//   },
// }, ['name', 'first']));
