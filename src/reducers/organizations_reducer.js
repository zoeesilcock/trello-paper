import { Map, List, fromJS } from 'immutable';
import { LOAD_ORGANIZATIONS, PICK_ORGANIZATION } from '../actions/organizations';

var initialState = Map({
  all: List(),
  current: null
});

export default function organizations(state = initialState, action) {
  switch (action.type) {
    case LOAD_ORGANIZATIONS:
      return state.set('all', state.get('all').concat(fromJS(action.data)));
    case PICK_ORGANIZATION:
      return state.set('current', fromJS(action.organization));
    default:
      return state;
  }
};
