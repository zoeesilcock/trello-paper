import { Map, List, fromJS } from 'immutable';

export default function(paths) {
  return (state) => {
    let subset = {};

    state.forEach((value, key) => {
      if (key == 'boards' || key == 'cards' || key == 'lists' || key == 'organizations' || key == 'printLayout') {
        subset[key] = Map({ all: List(), current: value.get('current') });
      } else if (key == 'cardStates') {
        subset[key] = state.get(key);
      }
    });

    return fromJS(subset);
  }
};
