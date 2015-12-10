import { LOAD_BOARDS, PICK_BOARD } from '../actions/boards';

var initialState = {
  all: [],
  current: null
};

export default function boards(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOARDS:
      var boards = state.all.filter((board) => {
        if (board.idOrganization != action.data[0].idOrganization) {
          return true;
        }
      });

      return Object.assign({}, state, {
        all: [...boards, ...action.data]
      });
    case PICK_BOARD:
      return Object.assign({}, state, {
        current: action.board
      });
    default:
      return state;
  }
};
