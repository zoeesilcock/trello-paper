import React from 'react';
import PrintCard from './print_card';

class Print extends React.Component {
  render() {
    var cards = [];

    this.props.cards.map((card, index) => {
      cards.push(<PrintCard key={index} index={index} id={card.id} name={card.name} description={card.desc} />);
    });

    return (
      <div className="print">
        <ul>
          {cards}
        </ul>
      </div>
    );
  }
}

Print.propTypes = {
  cards: React.PropTypes.array.isRequired
};

export default Print;
