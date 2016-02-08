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

    if (this.props.currentLists.size > 0) {
      this.props.currentLists.forEach((list) => {
        this.props.dispatch(loadCards(list));
      })
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
    if (board.get('idOrganization') == currentOrganization) {
      return true;
    }
  });
}

function filterLists(currentBoard, lists) {
  return lists.filter((list) => {
    if (list.get('idBoard') == currentBoard) {
      return true;
    }
  });
}

function filterCards(currentLists, cards) {
  return cards.filter((card) => {
    if (currentLists.indexOf(card.get('idList')) != -1) {
      return true;
    }
  });
}

function filterPrintCards(cards, cardStates) {
  return cards.filter((card) => {
    if (cardStates.get(card.get('id')) == undefined || cardStates.get(card.get('id'))) {
      return true;
    }
  });
}

function select(state) {
  return {
    currentOrganization: state.get('organizations').get('current'),
    organizations: state.get('organizations').get('all'),
    boards: filterBoards(state.get('organizations').get('current'), state.get('boards').get('all')),
    currentBoard: state.get('boards').get('current'),
    lists: filterLists(state.get('boards').get('current'), state.get('lists').get('all')),
    currentLists: state.get('lists').get('current'),
    cards: filterCards(state.get('lists').get('current'), state.get('cards').get('all')),
    cardStates: state.get('cardStates'),
    scrollIndex: state.get('scroll'),
    printCards: filterPrintCards(filterCards(state.get('lists').get('current'), state.get('cards').get('all')), state.get('cardStates')),
    currentPrintLayout: state.get('printLayout').get('current')
  }
};

export default connect(select)(App);
