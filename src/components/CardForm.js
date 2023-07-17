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

        props.createCard(cardFormData);

        setCardFormData(INITIAL_FORM_DATA);
    };

    return (
        <section>
            <h2>Create a New Card</h2>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="cardMessage">Message: </label>
                <input
                id="cardMessage"
                name="message"
                type="text"
                value={cardFormData.message}
                onChange={anInputChanged}
                ></input>
                <input type="submit" value="add a card!"></input> 
            </form>

        </section>
    );

};

CardForm.propTypes = {
    createCard: PropTypes.func
};

export default CardForm;