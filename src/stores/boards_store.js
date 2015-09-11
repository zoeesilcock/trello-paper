import Reflux from 'reflux';
import Actions from '../actions/boards_actions';
import OrganizationsStore from './organizations_store';

var Storage = window.localStorage;

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.boards = [];
  },

  getBoards() {
    return this.boards;
  },

  onLoad() {
    this.loadBoards();
  },

  loadBoards() {
    var current_organization = OrganizationsStore.getCurrentOrganization();

    Trello.get('organizations/' + current_organization.name + '/boards', (data) => {
      this.boards = data;
      this.trigger();
    }, (error) => {
      console.log(error);
    });
  }
});

export default Store;
