import React from 'react';
import { connect } from 'react-redux';

import Card from './card';
import { previousScroll } from '../actions/scroll';
import { changeAll } from '../actions/card_states';

class Cards extends React.Component {
  backHandler(event) {
    this.props.dispatch(previousScroll());
  }

  printHandler(event) {
    var cardIds = this.props.cards.map((card) => { return card.get('id') });
    this.props.dispatch(changeAll(cardIds, false));

    window.print();
  }

  render() {
    var cards = [];

    this.props.cards.forEach((card, index) => {
      var checked = true;
      if (this.props.cardStates && this.props.cardStates.has(card.get('id'))) {
        checked = this.props.cardStates.get(card.get('id'));
      }

      cards.push(<Card key={index} index={index} id={card.get('id')} name={card.get('name')} checked={checked} />);
    });

    return (
      <div className="flex-column cards">
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
  cards: React.PropTypes.object.isRequired,
  cardStates: React.PropTypes.object
};

export default connect(null)(Cards);
