import { Map, List, fromJS } from 'immutable';
import { LOAD_CARDS } from '../actions/cards';

var initialState = Map({
  all: List()
});

export default function cards(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS:
      var cards = state.get('all').filter((card) => {
        if (action.data[0] == undefined || card.get('idList') != action.data[0].idList) {
          return true;
        }
      });

      return state.set('all', cards.concat(fromJS(action.data)));
    default:
      return state;
  }
};
