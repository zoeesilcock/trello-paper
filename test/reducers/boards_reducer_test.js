import { LOAD_BOARDS, PICK_BOARD } from '../../src/actions/boards';
import BoardsReducer from '../../src/reducers/boards_reducer';

describe('BoardsReducer', () => {
  let exampleBoard = { name: 'example', idOrganization: 'org_id' };

  describe('LOAD_BOARDS', () => {
    it('adds the board to the list', () => {
      let action = { type: LOAD_BOARDS, data: [exampleBoard] };
      let newState = BoardsReducer({ all: [] }, action);
      expect(newState.all).to.eql([exampleBoard]);
    });

    it('replaces duplicates', () => {
      let action = { type: LOAD_BOARDS, data: [exampleBoard] };
      let newState = BoardsReducer({ all: [exampleBoard] }, action);
      expect(newState.all.length).to.eql(1);
    });
  });

  describe('PICK_BOARD', () => {
    it('sets the current board', () => {
      let action = { type: PICK_BOARD, board: exampleBoard };
      let newState = BoardsReducer(null, action);
      expect(newState.current.name).to.be(exampleBoard.name);
    });
  });
});
