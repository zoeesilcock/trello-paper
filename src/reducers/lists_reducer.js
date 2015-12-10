import { LOAD_LISTS, PICK_LIST } from '../actions/lists';

var initialState = {
  all: [],
  current: null
};

export default function boards(state = initialState, action) {
  switch (action.type) {
    case LOAD_LISTS:
      return Object.assign({}, state, {
        all: [...state.all, ...action.data]
      });
    case PICK_LIST:
      return Object.assign({}, state, {
        current: action.list
      });
    default:
      return state;
  }
};
