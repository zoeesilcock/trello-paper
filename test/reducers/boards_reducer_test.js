import { Map, List, fromJS } from 'immutable';
import { LOAD_BOARDS, PICK_BOARD } from '../../src/actions/boards';
import BoardsReducer from '../../src/reducers/boards_reducer';

describe('BoardsReducer', () => {
  let exampleBoard = { name: 'example', idOrganization: 'org_id' };

  describe('LOAD_BOARDS', () => {
    it('adds the board to the list', () => {
      let action = { type: LOAD_BOARDS, data: [exampleBoard] };
      let state = Map({ all: List() });
      let newState = BoardsReducer(state, action);
      expect(newState.get('all')).to.include(fromJS(exampleBoard));
    });

    it('replaces duplicates', () => {
      let action = { type: LOAD_BOARDS, data: [exampleBoard] };
      let state = Map({ all: fromJS([exampleBoard]) });
      let newState = BoardsReducer(state, action);
      expect(newState.get('all').size).to.equal(1);
    });
  });

  describe('PICK_BOARD', () => {
    it('sets the current board', () => {
      let action = { type: PICK_BOARD, board: exampleBoard };
      let state = Map({ all: List(), current: null });
      let newState = BoardsReducer(state, action);
      expect(newState.get('current').get('name')).to.equal(exampleBoard.name);
    });
  });
});
