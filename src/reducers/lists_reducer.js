import { LOAD_LISTS, PICK_LIST, TOGGLE_LIST } from '../actions/lists';

var initialState = {
  all: [],
  current: []
};

export default function lists(state = initialState, action) {
  switch (action.type) {
    case LOAD_LISTS:
      var lists = state.all.filter((list) => {
        if (action.data[0] != undefined && list.idBoard != action.data[0].idBoard) {
          return true;
        }
      });

      return Object.assign({}, state, {
        all: [...lists, ...action.data]
      });
    case PICK_LIST:
      return Object.assign({}, state, {
        current: [action.list]
      });
    case TOGGLE_LIST:
      var currentLists = state.current.slice();
      var index = currentLists.indexOf(action.list)

      if (index != -1) {
        currentLists.splice(index, 1);
      } else {
        currentLists.push(action.list);
      }

      return Object.assign({}, state, {
        current: currentLists
      });
    default:
      return state;
  }
};
