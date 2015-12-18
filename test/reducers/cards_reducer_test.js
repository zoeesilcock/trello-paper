import { Map, List, fromJS } from 'immutable';
import { LOAD_CARDS } from '../../src/actions/cards';
import CardsReducer from '../../src/reducers/cards_reducer';

describe('CardsReducer', () => {
  var exampleCard = { name: 'example', idList: 'list_id' };

  describe('LOAD_BOARDS', () => {
    it('adds the cards to the list', () => {
      let action = { type: LOAD_CARDS, data: [exampleCard] };
      let state = Map({ all: List() });
      let newState = CardsReducer(state, action);
      expect(newState.get('all')).to.include(fromJS(exampleCard));
    });

    it('replaces duplicates', () => {
      let action = { type: LOAD_CARDS, data: [exampleCard] };
      let state = Map({ all: fromJS([exampleCard]) });
      let newState = CardsReducer(state, action);
      expect(newState.get('all').size).to.equal(1);
    });
  });
});
