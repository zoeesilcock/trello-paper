import { LOAD_CARDS, CHANGE_CARD, CHANGE_ALL } from '../actions/cards';

var initialState = {
  all: []
};

export default function boards(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, {
        all: [...state.all, ...action.data]
      });
    case CHANGE_CARD:
    case CHANGE_ALL:
    default:
      return state;
  }
};
