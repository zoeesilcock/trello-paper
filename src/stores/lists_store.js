import Reflux from 'reflux';
import Actions from '../actions/lists_actions';

import BoardsStore from './boards_store';

var Storage = window.localStorage;

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.lists = [];
  },

  getLists() {
    return this.lists;
  },

  onLoad() {
    this.loadLists();
  },

  loadLists() {
    var current_board = BoardsStore.getCurrentBoard();

    Trello.get('boards/' + current_board.id + '/lists', (data) => {
      this.lists = data;
      this.trigger();
    }, (error) => {
      console.log(error);
    });
  }
});

export default Store;
