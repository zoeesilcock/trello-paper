require('./styles/main.scss');

import React from 'react';
import Reflux from 'reflux';

import Boards from './components/boards';
import Organizations from './components/organizations';

import BoardsActions from './actions/boards_actions';
import OrganizationsActions from './actions/organizations_actions';

import BoardsStore from './stores/boards_store';
import OrganizationsStore from './stores/organizations_store';

const App = React.createClass({
  componentDidMount() {
    Trello.setKey(process.env.TRELLO_API_KEY);
    Trello.authorize({ name: 'Trello Paper', success: this.authorized });
    OrganizationsStore.listen(this.onOrganizationsChange);
    BoardsStore.listen(this.onBoardsChange);
  },

  authorized() {
    OrganizationsActions.load();
  },

  getInitialState() {
    return {
      organizations: OrganizationsStore.getOrganizations(),
      current_organization: OrganizationsStore.getCurrentOrganization(),
      boards: BoardsStore.getBoards()
    };
  },

  onBoardsChange() {
    this.setState({ boards: BoardsStore.getBoards() });
  },

  onOrganizationsChange() {
    this.setState({
      organizations: OrganizationsStore.getOrganizations(),
      current_organization: OrganizationsStore.getCurrentOrganization()
    });
  },

  render() {
    return (
      <div>
        <h1>Trello Paper</h1>
        <Organizations organizations={this.state.organizations} current={this.state.current_organization.id} />
        <div className="flex-container">
          <Boards boards={this.state.boards} />
          <div className="flex-column">
            <h2>Lists</h2>
          </div>
          <div className="flex-column">
            <h2>Cards</h2>
          </div>
        </div>
        <a href="https://github.com/zoeesilcock/trello-paper" target="blank" className="github"><img src="images/github_mark.png" />github</a>
      </div>
    );
  }
});

React.render(<App />, document.body);
