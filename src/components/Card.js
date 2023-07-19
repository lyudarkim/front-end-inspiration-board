import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {

    const toggleDelete = () => {
        props.updateDelete(props.card_id)
    }    

    return (
      <section className="card">
        <div className="card_message">{props.message}</div>
        <button onClick={toggleDelete}> 🗑 delete</button>
      </section>
    );

};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  updateDelete: PropTypes.func.isRequired
};

export default Card;