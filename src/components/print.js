import React from 'react';
import PrintCard from './print_card';

class Print extends React.Component {
  render() {
    var cards = [];
    var layout = this.props.layout + '-columns';

    this.props.cards.map((card, index) => {
      cards.push(<PrintCard key={index} index={index} id={card.get('id')} name={card.get('name')} description={card.get('desc')} />);
    });

    return (
      <div className="print">
        <ul className={layout}>
          {cards}
        </ul>
      </div>
    );
  }
}

Print.propTypes = {
  cards: React.PropTypes.object.isRequired,
  layout: React.PropTypes.string
};

export default Print;
