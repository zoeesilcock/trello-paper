import { LOAD_CARDS } from '../../src/actions/cards';
import CardsReducer from '../../src/reducers/cards_reducer';

describe('CardsReducer', () => {
  var exampleCard = { name: 'example', idList: 'list_id' };

  describe('LOAD_BOARDS', () => {
    it('adds the cards to the list', () => {
      let action = { type: LOAD_CARDS, data: [exampleCard] };
      let newState = CardsReducer({ all: [] }, action);
      expect(newState.all).to.eql([exampleCard]);
    });

    it('replaces duplicates', () => {
      let action = { type: LOAD_CARDS, data: [exampleCard] };
      let newState = CardsReducer({ all: [exampleCard] }, action);
      expect(newState.all.length).to.eql(1);
    });
  });
});
