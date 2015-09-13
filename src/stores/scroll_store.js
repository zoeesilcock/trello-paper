import Reflux from 'reflux';
import Actions from '../actions/scroll_actions';

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.scrollIndex = 0;
  },

  getScrollIndex() {
    return this.scrollIndex;
  },

  onNext() {
    this.scrollIndex += 1;

    if (this.scrollIndex > 2) {
      this.scrollIndex = 2;
    }

    this.trigger();
  },

  onBack() {
    this.scrollIndex -= 1;

    if (this.scrollIndex < 0) {
      this.scrollIndex = 0;
    }

    this.trigger();
  }
});

export default Store;
