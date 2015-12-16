import { LOAD_BOARDS, PICK_BOARD } from '../../src/actions/boards';
import BoardsReducer from '../../src/reducers/boards_reducer';

describe('BoardsReducer', () => {
  var exampleBoard = { name: 'example', idOrganization: 'org_id' };

  describe('LOAD_BOARDS', () => {
    it('adds the board to the list', () => {
      var newState = BoardsReducer({ all: [] }, { type: LOAD_BOARDS, data: [exampleBoard] });
      expect(newState.all).to.eql([exampleBoard]);
    });

    it('replaces duplicates', () => {
      var newState = BoardsReducer({ all: [exampleBoard] }, { type: LOAD_BOARDS, data: [exampleBoard] });
      expect(newState.all.length).to.eql(1);
    });
  });

  describe('PICK_BOARD', () => {
    it('sets the current board', () => {
      var newState = BoardsReducer(null, { type: PICK_BOARD, board: exampleBoard });
      expect(newState.current.name).to.be(exampleBoard.name);
    });
  });
});
