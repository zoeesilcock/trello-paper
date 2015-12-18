import { Map, List, fromJS } from 'immutable';
import { LOAD_LISTS, PICK_LIST, TOGGLE_LIST } from '../../src/actions/lists';
import ListsReducer from '../../src/reducers/lists_reducer';

describe('ListsReducer', () => {
  let exampleList = { name: 'example', idBoard: 'board_id' };

  describe('LOAD_LISTS', () => {
    it('adds the lists to the list', () => {
      let action = { type: LOAD_LISTS, data: [exampleList] };
      let state = Map({ all: List() });
      let newState = ListsReducer(state, action);
      expect(newState.get('all')).to.include(fromJS(exampleList));
    });

    it('replaces duplicates', () => {
      let action = { type: LOAD_LISTS, data: [exampleList] };
      let state = Map({ all: fromJS([exampleList]) });
      let newState = ListsReducer(state, action);
      expect(newState.get('all').size).to.equal(1);
    });
  });

  describe('PICK_LIST', () => {
    it('adds the list id as the current list', () => {
      let action = { type: PICK_LIST, list: 'list_id' };
      let state = Map({ current: List() });
      let newState = ListsReducer(state, action);
      expect(newState.get('current')).to.include(action.list);
    });

    it('replaces any lists already set as current', () => {
      let action = { type: PICK_LIST, list: 'list_id' };
      let state = Map({ current: fromJS(['id1', 'id2', 'id3']) });
      let newState = ListsReducer(state, action);
      expect(newState.get('current')).to.include(fromJS(action.list));
    });
  });

  describe('TOGGLE_LIST', () => {
    it('adds an entry when it does not exist', () => {
      let action = { type: TOGGLE_LIST, list: 'list_id' };
      let state = Map({ current: fromJS(['some_id']) });
      let newState = ListsReducer(state, action);
      expect(newState.get('current')).to.include(action.list);
    });

    it('removes an entry when it does exist', () => {
      let action = { type: TOGGLE_LIST, list: 'list_id' };
      let state = Map({ current: fromJS(['some_id', 'list_id']) });
      let newState = ListsReducer(state, action);
      expect(newState.get('current')).to.not.include(action.list);
    });

    it('only affects a list that is included', () => {
      let action = { type: TOGGLE_LIST, list: 'list_id' };
      let state = Map({ current: fromJS(['some_id', 'list_id']) });
      let newState = ListsReducer(state, action);
      expect(newState.get('current')).to.include('some_id');
    });
  });
});
