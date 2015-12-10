import { LOAD_ORGANIZATIONS, PICK_ORGANIZATION } from '../actions/organizations';

var initialState = {
  all: [],
  current: null
};

export default function organizations(state = initialState, action) {
  switch (action.type) {
    case LOAD_ORGANIZATIONS:
      return Object.assign({}, state, {
        all: [...state.all, ...action.data]
      });
    case PICK_ORGANIZATION:
      return Object.assign({}, state, {
        current: action.organization
      });
    default:
      return state;
  }
};
