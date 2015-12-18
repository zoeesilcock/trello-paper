import { Map } from 'immutable';
import { CHANGE_CARD, CHANGE_ALL } from '../../src/actions/card_states';
import CardStatesReducer from '../../src/reducers/card_states_reducer';

describe('CardStatesReducer', () => {
  describe('CHANGE_CARD', () => {
    it('adds an entry for the card when it does not exist', () => {
      let action = { type: CHANGE_CARD, cardId: 1, checked: true };
      let newState = CardStatesReducer(Map(), action);
      expect(newState.get(action.cardId)).to.equal(action.checked);
    });

    it('changes an entry when it does exist', () => {
      let action = { type: CHANGE_CARD, cardId: 1, checked: false };
      let state = Map([[1, true]]);
      let newState = CardStatesReducer(state, action);
      expect(newState.get(action.cardId)).to.equal(action.checked);
    });
  });

  describe('CHANGE_ALL', () => {
    it('adds entries for cards when they do not exist', () => {
      let action = { type: CHANGE_ALL, cardIds: [1, 2, 3], checked: false };
      let newState = CardStatesReducer(Map(), action);
      expect(newState.get(action.cardIds[0])).to.equal(action.checked);
      expect(newState.get(action.cardIds[1])).to.equal(action.checked);
      expect(newState.get(action.cardIds[2])).to.equal(action.checked);
    });

    it('changes entries for cards when they do exist', () => {
      let action = { type: CHANGE_ALL, cardIds: [1, 2, 3], checked: false };
      let state = Map([[1, true]]);
      let newState = CardStatesReducer(state, action);
      expect(newState.get(action.cardIds[0])).to.equal(action.checked);
      expect(newState.get(action.cardIds[1])).to.equal(action.checked);
      expect(newState.get(action.cardIds[2])).to.equal(action.checked);
    });

    it('only changes entries included in the action', () => {
      let action = { type: CHANGE_ALL, cardIds: [1, 2, 3], checked: false };
      let state = Map([[1, true], [4, true]]);
      let newState = CardStatesReducer(state, action);
      expect(newState.get(4)).to.equal(true);
    });
  });
});
