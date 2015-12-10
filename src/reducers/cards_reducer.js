import { LOAD_CARDS } from '../actions/cards';

var initialState = {
  all: []
};

export default function boards(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, {
        all: [...state.all, ...action.data]
      });
    default:
      return state;
  }
};
