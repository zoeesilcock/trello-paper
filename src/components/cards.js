import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Card from './card';
import AllCardsCheckbox from './all_cards_checkbox';
import { previousScroll } from '../actions/scroll';
import { changeAll } from '../actions/card_states';

export class Cards extends React.Component {
  backHandler(event) {
    this.props.dispatch(previousScroll());
  }

  printHandler(event) {
    var cardIds = this.getAllCardIds();
    this.props.dispatch(changeAll(cardIds, false));

    window.print();
  }

  getAllCardIds() {
    return this.props.cards.map((card) => { return card.get('id') });
  }

  getAllCheckedState() {
    var allChecked = true;

    if (this.props.cardStates) {
      this.props.cards.forEach((card, index) => {
        if (!this.props.cardStates.get(card.get('id'))) {
          allChecked = false;
        }
      });
    } else {
      allChecked = false;
    }

    return allChecked;
  }

  render() {
    var cards = [];

    this.props.cards.forEach((card, index) => {
      var checked = true;
      if (this.props.cardStates && this.props.cardStates.has(card.get('id'))) {
        checked = this.props.cardStates.get(card.get('id'));
      }

      cards.push(
        <Card
          key={index}
          index={index}
          id={card.get('id')}
          name={card.get('name')}
          checked={checked} />
      );
    });

    return (
      <div className="flex-column cards">
        <AllCardsCheckbox checked={this.getAllCheckedState()} cardIds={this.getAllCardIds()} />
        <button onClick={this.backHandler.bind(this)} className="back-button">&lang;</button>
        <button onClick={this.printHandler.bind(this)} className="print-button">print</button>
        <h2>Cards</h2>
        <ul className="miller-column">
          {cards}
        </ul>
      </div>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.object.isRequired,
  cardStates: PropTypes.object
};

export default connect()(Cards);
