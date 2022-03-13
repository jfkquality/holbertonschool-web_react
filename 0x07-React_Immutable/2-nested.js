import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const name = fromJS(object);
  return name.getIn([array[0], array[1]]);
}

// console.log(accessImmutableObject({
//   name: {
//        first: "Guillaume",
//        last: "Salva"
//   }
// }, ['name', 'first']));
