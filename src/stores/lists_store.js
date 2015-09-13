import Reflux from 'reflux';
import Actions from '../actions/lists_actions';

import BoardsStore from './boards_store';
import CardsActions from '../actions/cards_actions';

var Storage = window.localStorage;

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.lists = [];
    this.current = {};
  },

  getLists() {
    return this.lists;
  },

  getCurrentList() {
    return this.current;
  },

  getList(id) {
    for (var i = 0; i < this.lists.length; i++) {
      if (this.lists[i].id == id) {
        return this.lists[i];
      }
    }

    return {};
  },

  onLoad() {
    this.loadLists();
  },

  onPick(id) {
    this.current = this.getList(id);
    this.commitCurrent();
    this.trigger();

    CardsActions.load();
  },

  loadLists() {
    var current_board = BoardsStore.getCurrentBoard();

    if (current_board.id !== undefined) {
      Trello.get('boards/' + current_board.id + '/lists', (data) => {
        this.lists = data;
        this.onPick(this.loadCurrentId());
        this.trigger();
      }, (error) => {
        console.log(error);
      });
    } else {
      this.lists = [];
      this.trigger();
    }
  },

  loadCurrentId() {
    return Storage.getItem('current_list');
  },

  commitCurrent() {
    Storage.setItem('current_list', this.current.id);
  }
});

export default Store;
