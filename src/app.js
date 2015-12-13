require('./styles/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Organizations from './components/organizations';
import Boards from './components/boards';
import Lists from './components/lists';
import Cards from './components/cards';
import Print from './components/print';
import PrintLayout from './components/print_layout';

import { nextScroll } from './actions/scroll';
import { loadOrganizations } from './actions/organizations';
import { loadBoards } from './actions/boards';
import { loadLists } from './actions/lists';
import { loadCards } from './actions/cards';

var App = React.createClass({
  componentDidMount() {
    this.authorize();
  },

  authorize() {
    Trello.setKey(process.env.TRELLO_API_KEY);
    Trello.authorize({
      name: 'Trello Paper',
      success: this.authorized,
      error: this.authorizationFailed
    });
  },

  authorized() {
    this.props.dispatch(loadOrganizations());

    if (this.props.currentOrganization != undefined) {
      this.props.dispatch(loadBoards(this.props.currentOrganization));
      this.props.dispatch(nextScroll());
    }

    if (this.props.currentBoard != undefined) {
      this.props.dispatch(loadLists(this.props.currentBoard));
      this.props.dispatch(nextScroll());
    }

    if (this.props.currentLists.length > 0) {
      for (var i in this.props.currentLists) {
        this.props.dispatch(loadCards(this.props.currentLists[i]));
      }
      this.props.dispatch(nextScroll());
    }
  },

  authorizationFailed() {
    localStorage.removeItem('trello_token');
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
          <PrintLayout current={this.props.currentPrintLayout} />
          <div className="flex-scroll" ref="scroll">
            <div className="flex-container" ref="container">
              <Boards boards={this.props.boards} current={this.props.currentBoard} />
              <Lists lists={this.props.lists} current={this.props.currentLists} />
              <Cards cards={this.props.cards} cardStates={this.props.cardStates} />
            </div>
          </div>
          <a href="https://github.com/zoeesilcock/trello-paper" target="blank" className="github"><img src="images/github_mark.png" />github</a>
        </div>
        <Print cards={this.props.printCards} layout={this.props.currentPrintLayout} />
      </div>
    );
  }
});

function filterBoards(currentOrganization, boards) {
  return boards.filter((board) => {
    if (board.idOrganization == currentOrganization) {
      return true;
    }
  });
}

function filterLists(currentBoard, lists) {
  return lists.filter((list) => {
    if (list.idBoard == currentBoard) {
      return true;
    }
  });
}

function filterCards(currentLists, cards) {
  return cards.filter((card) => {
    if (currentLists.indexOf(card.idList) != -1) {
      return true;
    }
  });
}

function filterPrintCards(cards, cardStates) {
  return cards.filter((card) => {
    if (cardStates[card.id] == undefined || cardStates[card.id]) {
      return true;
    }
  });
}

function select(state) {
  return {
    currentOrganization: state.organizations.current,
    organizations: state.organizations.all,
    boards: filterBoards(state.organizations.current, state.boards.all),
    currentBoard: state.boards.current,
    lists: filterLists(state.boards.current, state.lists.all),
    currentLists: state.lists.current,
    cards: filterCards(state.lists.current, state.cards.all),
    cardStates: state.cardStates,
    scrollIndex: state.scroll,
    printCards: filterPrintCards(filterCards(state.lists.current, state.cards.all), state.cardStates),
    currentPrintLayout: state.printLayout.current
  }
};

export default connect(select)(App);
