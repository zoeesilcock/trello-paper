import Reflux from 'reflux';
import Actions from '../actions/organizations_actions';
import BoardsActions from '../actions/boards_actions';

var Storage = window.localStorage;

var Store = Reflux.createStore({
  listenables: Actions,

  init() {
    this.organizations = [];
    this.current = {};
  },

  getOrganizations() {
    return this.organizations;
  },

  getCurrentOrganization() {
    return this.current;
  },

  getOrganization(id) {
    for (var i = 0; i < this.organizations.length; i++) {
      if (this.organizations[i].id == id) {
        return this.organizations[i];
      }
    }

    return {};
  },

  onLoad() {
    this.loadOrganizations();
  },

  onPick(id) {
    this.current = this.getOrganization(id);
    this.commitCurrent();
    this.trigger();

    BoardsActions.load();
  },

  loadOrganizations() {
    Trello.get('/members/me/organizations', (data) => {
      this.organizations = data;
      this.onPick(this.loadCurrentId());
      this.trigger();
    }, (error) => {
      console.log(error);
    });
  },

  loadCurrentId() {
    return Storage.getItem('current_organization');
  },

  commitCurrent() {
    Storage.setItem('current_organization', this.current.id);
  }
});

export default Store;
