require('./styles/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Organizations from './components/organizations';
import Boards from './components/boards';
import Lists from './components/lists';
import Cards from './components/cards';
import Print from './components/print';

import { loadOrganizations } from './actions/organizations';

var App = React.createClass({
  componentDidMount() {
    Trello.setKey(process.env.TRELLO_API_KEY);
    Trello.authorize({ name: 'Trello Paper', success: this.authorized });
  },

  authorized() {
    this.props.dispatch(loadOrganizations());
  },

  updateScroll() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    var targetPosition = -(this.props.scrollIndex * ($(node).width() / 3));
    $(node).animate({'left': targetPosition + "px" }, 150);
  },

  componentDidUpdate() {
    this.updateScroll();
  },

  render() {
    return (
      <div>
        <div className="web">
          <h1>Trello Paper</h1>
          <Organizations organizations={this.props.organizations} current={this.props.currentOrganization} />
          <div className="flex-scroll" ref="scroll">
            <div className="flex-container" ref="container">
              <Boards boards={this.props.boards} current={this.props.currentBoard} />
              <Lists lists={this.props.lists} current={this.props.currentList} />
              <Cards cards={this.props.cards} />
            </div>
          </div>
          <a href="https://github.com/zoeesilcock/trello-paper" target="blank" className="github"><img src="images/github_mark.png" />github</a>
        </div>
        <Print cards={this.props.printCards} />
      </div>
    );
  }
});

function select(state) {
  return {
    currentOrganization: state.organizations.current,
    organizations: state.organizations.all,
    boards: state.boards.all,
    currentBoard: state.boards.current,
    lists: state.lists.all,
    currentList: state.lists.current,
    cards: state.cards.all,
    scrollIndex: state.scroll,
    printCards: state.cards.all
  }
};

export default connect(select)(App);
