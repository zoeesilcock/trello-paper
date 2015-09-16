import Reflux from 'reflux';
import Actions from '../actions/cards_actions';
import ListsStore from './lists_store';

var Storage = window.localStorage;

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.cards = [];
    this.cardStates = {};
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

  onChange(id, checked) {
    this.cardStates[id] = checked;
    this.commitCardStates();
  },

  loadCards() {
    var current_list = ListsStore.getCurrentList();

    if (current_list.id !== undefined) {
      Trello.get('lists/' + current_list.id + '/cards', (data) => {
        this.cards = data;
        this.loadCardStates();
        this.trigger();
      }, (error) => {
        console.log(error);
      });
    } else {
      this.cards = [];
      this.trigger();
    }
  },

  loadCardStates() {
    var data = Storage.getItem('card_states');

    if (data !== 'undefined') {
      this.cardStates = JSON.parse(data);
    }

    for (var i = 0; i < this.cards.length; i++) {
      this.cards[i].print = this.cardStates[this.cards[i].id];
    }
  },

  commitCardStates() {
    Storage.setItem('card_states', JSON.stringify(this.cardStates));
  }
});

export default Store;
