import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = (props) => {
    const cards = props.cards;

    const getCardListJSX = (cards) => {
      return cards.map((card) => {
        return (
          <Card
            key={card.card_id}
            card_id={card.card_id}
            message={card.message}
            board_id={card.board_id}
            updateDelete={props.updateDelete}
          />
        );
      });
    };

    return <div className="card_list">{getCardListJSX(cards)}</div>;
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        card_id: PropTypes.number,
        board_id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired
        })
    ).isRequired,
    updateDelete: PropTypes.func,
};

export default CardList;