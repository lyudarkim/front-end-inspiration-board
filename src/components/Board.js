import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';


const Board = (props) => {

  const handleClick = () => {
    props.currentBoardID(props.board_id, props.owner, props.title);
    props.getCards(props.board_id);
  };

  return (
    <section className="Board" onClick={handleClick}>
      {props.title}
    </section>

  );
};

Board.propTypes = {
  board_id: PropTypes.number,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired
};

export default Board;