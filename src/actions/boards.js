import { loadLists, pickList } from '../actions/lists';

export const LOAD_BOARDS = 'LOAD_BOARDS';
export const PICK_BOARD = 'PICK_BOARD';

export function loadBoards(organizationId) {
  if (!organizationId) {
    return dispatch({ type: LOAD_ORGANIZATIONS, data: [] });
  }

  return (dispatch) => {
    Trello.get('organizations/' + organizationId + '/boards', (data) => {
      dispatch({ type: LOAD_BOARDS, data });
    }, (error) => {
      console.log(error);
    });
  };
}

export function pickBoard(board) {
  return (dispatch) => {
    dispatch({ type: PICK_BOARD, board });
    dispatch(loadLists(board));
    dispatch(pickList(null));
  };
}
