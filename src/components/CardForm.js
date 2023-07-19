import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CardForm.css';

const INITIAL_FORM_DATA = {
    message: ''
}

const CardForm = (props) => {
    const [cardFormData, setCardFormData] = useState(INITIAL_FORM_DATA);

    const anInputChanged = (event) => {
        const newCardFormData = {
            ...cardFormData,
            [event.target.name]: event.target.value
        };

        setCardFormData(newCardFormData);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (cardFormData.message.length > 40) {
            // Display an error message 
            alert('The message should be 40 characters or less.');
            return;
        }
        
        props.createCard(cardFormData);

        setCardFormData(INITIAL_FORM_DATA);
    };


    return (
        <div className="new-card-form__container">
          <h2 className="new-card-form-title">Create a New Card</h2>
          <form className="new-card-form__form" onSubmit={onFormSubmit}>
            <label htmlFor="cardMessage" className="new-card-form-message">
              Message:
            </label>
            <input
              id="cardMessage"
              name="message"
              type="text"
              className="new-card-form-textarea"
              value={cardFormData.message}
              onChange={anInputChanged}
            />
            <input
              disabled={!cardFormData.message}
              type="submit"
              value="add a card!"
              className="new-card-form-submit-btn"
            />
          </form>
        </div>
      );

};

CardForm.propTypes = {
    createCard: PropTypes.func
};

export default CardForm;