import { Map, List, fromJS } from 'immutable';
import { LOAD_LISTS, PICK_LIST, TOGGLE_LIST } from '../actions/lists';

var initialState = Map({
  all: List(),
  current: List()
});

export default function lists(state = initialState, action) {
  switch (action.type) {
    case LOAD_LISTS:
      var lists = state.get('all').filter((list) => {
        if (action.data[0] != undefined && list.get('idBoard') != action.data[0].idBoard) {
          return true;
        }
      });

      return state.set('all', lists.concat(fromJS(action.data)));
    case PICK_LIST:
      return state.set('current', fromJS([action.list]));
    case TOGGLE_LIST:
      var index = state.get('current').indexOf(action.list)

      if (index != -1) {
        state = state.set('current', state.get('current').splice(index, 1));
      } else {
        state = state.set('current', state.get('current').push(action.list));
      }

      return state;
    default:
      return state;
  }
};
