require('./styles/main.scss');

import React from 'react';
import Reflux from 'reflux';

import Organizations from './components/organizations';
import Boards from './components/boards';
import Lists from './components/lists';
import Cards from './components/cards';

import OrganizationsActions from './actions/organizations_actions';
import BoardsActions from './actions/boards_actions';
import ListsActions from './actions/lists_actions';
import CardsActions from './actions/cards_actions';
import ScrollActions from './actions/scroll_actions';

import OrganizationsStore from './stores/organizations_store';
import BoardsStore from './stores/boards_store';
import ListsStore from './stores/lists_store';
import CardsStore from './stores/cards_store';
import ScrollStore from './stores/scroll_store';

const App = React.createClass({
  componentDidMount() {
    Trello.setKey(process.env.TRELLO_API_KEY);
    Trello.authorize({ name: 'Trello Paper', success: this.authorized });
    OrganizationsStore.listen(this.onOrganizationsChange);
    BoardsStore.listen(this.onBoardsChange);
    ListsStore.listen(this.onListsChange);
    CardsStore.listen(this.onCardsChange);
    ScrollStore.listen(this.onScrollChange);
  },

  authorized() {
    OrganizationsActions.load();
  },

  getInitialState() {
    return {
      organizations: OrganizationsStore.getOrganizations(),
      current_organization: OrganizationsStore.getCurrentOrganization(),
      boards: BoardsStore.getBoards(),
      lists: ListsStore.getLists(),
      cards: CardsStore.getCards(),
      scrollIndex: ScrollStore.getScrollIndex()
    };
  },

  onOrganizationsChange() {
    this.setState({
      organizations: OrganizationsStore.getOrganizations(),
      current_organization: OrganizationsStore.getCurrentOrganization()
    });
  },

  onBoardsChange() {
    this.setState({ boards: BoardsStore.getBoards() });
  },

  onListsChange() {
    this.setState({ lists: ListsStore.getLists() });
  },

  onCardsChange() {
    this.setState({ cards: CardsStore.getCards() });
  },

  onScrollChange() {
    this.setState({ scrollIndex: ScrollStore.getScrollIndex() });

    var node = React.findDOMNode(this.refs.container);
    var targetPosition = -(this.state.scrollIndex * ($(node).width() / 3));
    $(node).animate({'left': targetPosition + "px" }, 150);
  },

  render() {
    return (
      <div>
        <h1>Trello Paper</h1>
        <Organizations organizations={this.state.organizations} current={this.state.current_organization.id} />
        <div className="flex-scroll" ref="scroll">
          <div className="flex-container" ref="container">
            <Boards boards={this.state.boards} />
            <Lists lists={this.state.lists} />
            <Cards cards={this.state.cards} />
          </div>
        </div>
        <a href="https://github.com/zoeesilcock/trello-paper" target="blank" className="github"><img src="images/github_mark.png" />github</a>
      </div>
    );
  }
});

React.render(<App />, document.body);
