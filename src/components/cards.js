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
    var cardIds = this.props.cards.map((card) => { return card.id });
    this.props.dispatch(changeAll(cardIds, false));

    window.print();
  }

  render() {
    var cards = [];

    this.props.cards.map((card, index) => {
      var checked = true;
      if (this.props.cardStates && (card.id in this.props.cardStates)) {
        checked = this.props.cardStates[card.id];
      }

      cards.push(<Card key={index} index={index} id={card.id} name={card.name} checked={checked} />);
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
  cards: React.PropTypes.array.isRequired,
  cardStates: React.PropTypes.object
};

export default connect(null)(Cards);
