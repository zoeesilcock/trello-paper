import { CHANGE_CARD, CHANGE_ALL } from '../../src/actions/card_states';
import CardStatesReducer from '../../src/reducers/card_states_reducer';

describe('CardStatesReducer', () => {
  describe('CHANGE_CARD', () => {
    it('adds an entry for the card when it does not exist', () => {
      let action = { type: CHANGE_CARD, cardId: 1, checked: true };
      let newState = CardStatesReducer({}, action);
      expect(newState).to.have.property(action.cardId, action.checked);
    });

    it('changes an entry when it does exist', () => {
      let action = { type: CHANGE_CARD, cardId: 1, checked: false };
      let newState = CardStatesReducer({ '1': true }, action);
      expect(newState).to.have.property(action.cardId, action.checked);
    });
  });

  describe('CHANGE_ALL', () => {
    it('adds entries for cards when they do not exist', () => {
      let action = { type: CHANGE_ALL, cardIds: [1, 2, 3], checked: false };
      let newState = CardStatesReducer({}, action);
      expect(newState).to.have.property(action.cardIds[0], action.checked);
      expect(newState).to.have.property(action.cardIds[1], action.checked);
      expect(newState).to.have.property(action.cardIds[2], action.checked);
    });

    it('changes entries for cards when they do exist', () => {
      let action = { type: CHANGE_ALL, cardIds: [1, 2, 3], checked: false };
      let newState = CardStatesReducer({ 1: true }, action);
      expect(newState).to.have.property(action.cardIds[0], action.checked);
      expect(newState).to.have.property(action.cardIds[1], action.checked);
      expect(newState).to.have.property(action.cardIds[2], action.checked);
    });

    it('only changes entries included in the action', () => {
      let action = { type: CHANGE_ALL, cardIds: [1, 2, 3], checked: false };
      let newState = CardStatesReducer({ 1: true, 4: true}, action);
      expect(newState).to.have.property(4, true);
    });
  });
});
