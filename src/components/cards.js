import React from 'react';
import Card from './card';

import ScrollActions from '../actions/scroll_actions';

class Cards extends React.Component {
  backHandler(event) {
    ScrollActions.back();
  }

  render() {
    var cards = [];

    this.props.cards.map((card, index) => {
      cards.push(<Card key={index} index={index} id={card.id} name={card.name} />);
    });

    return (
      <div className="flex-column cards">
        <button onClick={this.backHandler}className="back">&lang;</button>
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

export default Cards;
