import {Map, fromJS } from 'immutable';

function getImmutableObject(object) {
  return Map(object);
}

export default getImmutableObject;
