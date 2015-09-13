import Reflux from 'reflux';
import Actions from '../actions/boards_actions';
import OrganizationsStore from './organizations_store';

import ListActions from '../actions/lists_actions';

var Storage = window.localStorage;

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.boards = [];
    this.current = {};
  },

  getBoards() {
    return this.boards;
  },

  getCurrentBoard() {
    return this.current;
  },

  getBoard(id) {
    for (var i = 0; i < this.boards.length; i++) {
      if (this.boards[i].id == id) {
        return this.boards[i];
      }
    }

    return {};
  },

  onLoad() {
    this.loadBoards();
  },

  onPick(id) {
    this.current = this.getBoard(id);
    this.commitCurrent();
    this.trigger();

    ListActions.load();
  },

  loadBoards() {
    var current_organization = OrganizationsStore.getCurrentOrganization();

    Trello.get('organizations/' + current_organization.name + '/boards', (data) => {
      this.boards = data;
      this.onPick(this.loadCurrentId());
      this.trigger();
    }, (error) => {
      console.log(error);
    });
  },

  loadCurrentId() {
    return Storage.getItem('current_board');
  },

  commitCurrent() {
    Storage.setItem('current_board', this.current.id);
  }
});

export default Store;