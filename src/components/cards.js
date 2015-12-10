import React from 'react';
import { connect } from 'react-redux';

import Card from './card';
import { previousScroll } from '../actions/scroll';
import { changeAll } from '../actions/cards';

class Cards extends React.Component {
  backHandler(event) {
    this.props.dispatch(previousScroll());
  }

  printHandler(event) {
    window.print();
    this.props.dispatch(changeAll(false));
  }

  render() {
    var cards = [];

    this.props.cards.map((card, index) => {
      cards.push(<Card key={index} index={index} id={card.id} name={card.name} print={card.print} />);
    });

    return (
      <div className="flex-column cards">
        <button onClick={this.backHandler.bind(this)} className="back-button">&lang;</button>
        <button onClick={this.printHandler} className="print-button">print</button>
        <h2>Cards</h2>
        <ul className="miller-column">
          {cards}
        </ul>
      </div>
    );
  }
}

Cards.propTypes = {
  cards: React.PropTypes.array.isRequired
};

export default connect(null)(Cards);
