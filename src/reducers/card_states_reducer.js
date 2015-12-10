import { CHANGE_CARD, CHANGE_ALL } from '../actions/card_states';

export default function boards(state = {}, action) {
  switch (action.type) {
    case CHANGE_CARD:
      var cardState = {}
      cardState[action.cardId] = action.checked;
      return Object.assign({}, state, cardState);
    case CHANGE_ALL:
      var newState = Object.assign({}, state);

      for (var index in action.cardIds) {
        newState[action.cardIds[index]] = action.checked;
      }

      return newState;
    default:
      return state;
  }
};
