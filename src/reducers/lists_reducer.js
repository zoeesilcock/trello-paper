import { LOAD_LISTS, PICK_LIST } from '../actions/lists';

var initialState = {
  all: [],
  current: null
};

export default function boards(state = initialState, action) {
  switch (action.type) {
    case LOAD_LISTS:
      var lists = state.all.filter((list) => {
        if (list.idBoard != action.data[0].idBoard) {
          return true;
        }
      });

      return Object.assign({}, state, {
        all: [...lists, ...action.data]
      });
    case PICK_LIST:
      return Object.assign({}, state, {
        current: action.list
      });
    default:
      return state;
  }
};
