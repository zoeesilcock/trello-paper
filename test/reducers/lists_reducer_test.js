import { LOAD_LISTS, PICK_LIST, TOGGLE_LIST } from '../../src/actions/lists';
import ListsReducer from '../../src/reducers/lists_reducer';

describe('ListsReducer', () => {
  var exampleList = { name: 'example', idBoard: 'board_id' };

  describe('LOAD_LISTS', () => {
    it('adds the lists to the list', () => {
      let action = { type: LOAD_LISTS, data: [exampleList] };
      var newState = ListsReducer({ all: [] }, action);
      expect(newState.all).to.eql([exampleList]);
    });

    it('replaces duplicates', () => {
      let action = { type: LOAD_LISTS, data: [exampleList] };
      var newState = ListsReducer({ all: [exampleList] }, action);
      expect(newState.all.length).to.eql(1);
    });
  });

  describe('PICK_LIST', () => {
    it('adds the list id as the current list', () => {
      let action = { type: PICK_LIST, list: 'list_id' };
      var newState = ListsReducer({ current: [] }, action);
      expect(newState.current).to.contain(action.list);
    });

    it('replaces any lists already set as current', () => {
      let action = { type: PICK_LIST, list: 'list_id' };
      var newState = ListsReducer({ current: ['id1', 'id2', 'id3'] }, action);
      expect(newState.current).to.eql([action.list]);
    });
  });

  describe('TOGGLE_LIST', () => {
    it('adds an entry when it does not exist', () => {
      let action = { type: TOGGLE_LIST, list: 'list_id' };
      var newState = ListsReducer({ current: ['some_id'] }, action);
      expect(newState.current).to.contain(action.list);
    });

    it('removes an entry when it does exist', () => {
      let action = { type: TOGGLE_LIST, list: 'list_id' };
      var newState = ListsReducer({ current: ['some_id', 'list_id'] }, action);
      expect(newState.current).to.not.contain(action.list);
    });

    it('only affects a list that is included', () => {
      let action = { type: TOGGLE_LIST, list: 'list_id' };
      var newState = ListsReducer({ current: ['some_id', 'list_id'] }, action);
      expect(newState.current).to.contain('some_id');
    });
  });
});
