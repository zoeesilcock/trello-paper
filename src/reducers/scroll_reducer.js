import { NEXT_SCROLL, PREVIOUS_SCROLL } from '../actions/scroll';

export default function sroll(state = 0, action) {
  switch (action.type) {
    case NEXT_SCROLL:
      var index = state + 1;

      if (index > 2) {
        index = 2;
      }

      return index;
    case PREVIOUS_SCROLL:
      var index = state - 1;

      if (index < 0) {
        index = 0;
      }

      return index;
    default:
      return state;
  }
};
