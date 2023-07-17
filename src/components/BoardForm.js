import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BoardForm.css';

const INITIAL_FORM_DATA = {
    board_id: '',
    title: '',
    owner: ''
}

const BoardForm = (props) => {

    const [boardFormData, setBoardFormData] = useState(INITIAL_FORM_DATA);

    const anInputChanged = (event) => {
        const newBoardFormData = {
            ...boardFormData,
            [event.target.name]: event.target.value
        };
        setBoardFormData(newBoardFormData);
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        props.createBoard(boardFormData);

        setBoardFormData(INITIAL_FORM_DATA);
    };

    return (
        <section>
            <h2>Create a New Board</h2>
            <form onSubmit={onFormSubmit}>
                <label htmlFor="boardTitle">Title:</label>
                <input 
                id="boardTitle"
                name="title"
                onChange={anInputChanged}
                ></input>
                <label htmlFor="boardOwner">Owner's Name:</label>
                <input 
                id="boardOwner"
                name="owner"
                onChange={anInputChanged}
                ></input> 
                <input 
                type="submit"
                ></input> 
            </form>

        </section>
    );


};

export default BoardForm;