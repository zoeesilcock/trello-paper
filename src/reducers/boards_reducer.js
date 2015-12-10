import { LOAD_BOARDS, PICK_BOARD } from '../actions/boards';

var initialState = {
  all: [],
  current: null
};

export default function boards(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOARDS:
      return Object.assign({}, state, {
        all: [...state.all, ...action.data]
      });
    case PICK_BOARD:
      return Object.assign({}, state, {
        current: action.board
      });
    default:
      return state;
  }
};
