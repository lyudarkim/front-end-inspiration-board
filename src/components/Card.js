import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {

    // const toggleDelete = () => {
    //     props.updateDelete(props.id)
    //   }    

    return (
    <section>
      <div>
          {props.message}
      </div>
      <button
        onClick={}
        >delete</button>
    </section>

);
};

Card.propTypes = {
  
};

export default Card;