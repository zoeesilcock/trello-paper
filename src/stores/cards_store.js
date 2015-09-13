import Reflux from 'reflux';
import Actions from '../actions/cards_actions';
import ListsStore from './lists_store';

var Storage = window.localStorage;

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.cards = [];
    this.current = {};
  },

  getCards() {
    return this.cards;
  },

  getCard(id) {
    for (var i = 0; i < this.cards.length; i++) {
      if (this.cards[i].id == id) {
        return this.cards[i];
      }
    }

    return {};
  },

  onLoad() {
    this.loadCards();
  },

  loadCards() {
    var current_list = ListsStore.getCurrentList();

    if (current_list.id !== undefined) {
      Trello.get('lists/' + current_list.id + '/cards', (data) => {
        this.cards = data;
        this.trigger();
      }, (error) => {
        console.log(error);
      });
    } else {
      this.cards = [];
      this.trigger();
    }
  }
});

export default Store;
