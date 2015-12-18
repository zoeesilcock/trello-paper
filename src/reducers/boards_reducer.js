import { Map, List, fromJS } from 'immutable';
import { LOAD_BOARDS, PICK_BOARD } from '../actions/boards';

var initialState = Map({
  all: List(),
  current: null
});

export default function boards(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOARDS:
      var boards = state.get('all').filter((board) => {
        if (action.data[0] != undefined && board.get('idOrganization') != action.data[0].idOrganization) {
          return true;
        }
      });

      return state.set('all', boards.concat(fromJS(action.data)));
    case PICK_BOARD:
      return state.set('current', fromJS(action.board));
    default:
      return state;
  }
};
