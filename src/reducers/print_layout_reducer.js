import { PICK_LAYOUT } from '../actions/print_layout';

var initialState = {
  current: null
};

export default function printLayout(state = initialState, action) {
  switch (action.type) {
    case PICK_LAYOUT:
      return Object.assign({}, state, {
        current: action.layout
      });
    default:
      return state;
  }
};
