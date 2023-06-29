import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';


const Board = (props) => {
  return (
    <section>
      {props.title}
      {/* {props.owner} */}
    </section>

  );
};

Board.propTypes = {
  board_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired
};

export default Board;