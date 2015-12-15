var expect = require('expect.js');

import { NEXT_SCROLL, PREVIOUS_SCROLL } from '../../src/actions/scroll';
import ScrollReducer from '../../src/reducers/scroll_reducer';

describe('ScrollReducer', () => {
  describe('NEXT_SCROLL', () => {
    it('increases the scroll index', () => {
      expect(ScrollReducer(0, { type: NEXT_SCROLL })).to.be(1);
    });

    it('does not pass the scroll limit', () => {
      expect(ScrollReducer(2, { type: NEXT_SCROLL })).to.be(2);
    });
  });

  describe('PREVIOUS_SCROLL', () => {
    it('decreases the scroll index', () => {
      expect(ScrollReducer(1, { type: PREVIOUS_SCROLL })).to.be(0);
    });

    it('does not pass the scroll limit', () => {
      expect(ScrollReducer(0, { type: PREVIOUS_SCROLL })).to.be(0);
    });
  });
});
