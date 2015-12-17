import { LOAD_CARDS } from '../actions/cards';

var initialState = {
  all: []
};

export default function cards(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      var cards = state.all.filter((card) => {
        if (action.data[0] == undefined || card.idList != action.data[0].idList) {
          return true;
        }
      });

      return Object.assign({}, state, {
        all: [...cards, ...action.data]
      });
    default:
      return state;
  }
};
