import { NEXT_SCROLL, PREVIOUS_SCROLL } from '../../src/actions/scroll';
import ScrollReducer from '../../src/reducers/scroll_reducer';

describe('ScrollReducer', () => {
  describe('NEXT_SCROLL', () => {
    it('increases the scroll index', () => {
      let action = { type: NEXT_SCROLL };
      expect(ScrollReducer(0, action)).to.equal(1);
    });

    it('does not pass the scroll limit', () => {
      let action = { type: NEXT_SCROLL };
      expect(ScrollReducer(2, action)).to.equal(2);
    });
  });

  describe('PREVIOUS_SCROLL', () => {
    it('decreases the scroll index', () => {
      let action = { type: PREVIOUS_SCROLL };
      expect(ScrollReducer(1, action)).to.equal(0);
    });

    it('does not pass the scroll limit', () => {
      let action = { type: PREVIOUS_SCROLL };
      expect(ScrollReducer(0, action)).to.equal(0);
    });
  });
});
