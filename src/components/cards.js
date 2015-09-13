import React from 'react';
import Card from './card';

class Cards extends React.Component {
  render() {
    var cards = [];

    this.props.cards.map((card, index) => {
      cards.push(<Card key={index} index={index} id={card.id} name={card.name} />);
    });

    return (
      <div className="flex-column">
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
