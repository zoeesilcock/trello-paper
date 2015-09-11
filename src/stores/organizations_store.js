import Reflux from 'reflux';
import Actions from '../actions/organizations_actions';
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
    this.current = this.loadCurrent();
  },

  onPick(id) {
    this.current = this.getOrganization(id);
    this.commitCurrent();
    this.trigger();
  },

  loadOrganizations() {
    Trello.get('/members/me/organizations', (data) => {
      this.organizations = data;
      this.current = this.loadCurrent();
      this.trigger();
    }, (error) => {
      console.log(error);
    });
  },

  loadCurrent() {
    var id = Storage.getItem('current_organization');
    return this.getOrganization(id);
  },

  commitCurrent() {
    Storage.setItem('current_organization', this.current.id);
  }
});

export default Store;
