import { Map } from 'immutable';
import { PICK_LAYOUT } from '../actions/print_layout';

var initialState = Map({
  current: null
});

export default function printLayout(state = initialState, action) {
  switch (action.type) {
    case PICK_LAYOUT:
      return state.set('current', action.layout);
    default:
      return state;
  }
};
