import { Map } from 'immutable';
import { CHANGE_CARD, CHANGE_ALL } from '../actions/card_states';

export default function cardStates(state = Map(), action) {
  switch (action.type) {
    case CHANGE_CARD:
      return state.set(action.cardId, action.checked);
    case CHANGE_ALL:
      action.cardIds.forEach((cardId) => {
        state = state.set(cardId, action.checked);
      });

      return state;
    default:
      return state;
  }
};
