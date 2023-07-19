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
        <div className="new-board-form__container">
          <h2 className="new-board-form-title">Create a New Board</h2>
          <form className="new-board-form__form" onSubmit={onFormSubmit}>
            <label htmlFor="boardTitle" className="new-board-form-title">
              Title:
            </label>
            <input
              id="boardTitle"
              name="title"
              className="new-board-form-input"
              value={boardFormData.title}
              onChange={anInputChanged}
            />
            <label htmlFor="boardOwner" className="new-board-form-owner">
              Owner's Name:
            </label>
            <input
              id="boardOwner"
              name="owner"
              className="new-board-form-input"
              value={boardFormData.owner}
              onChange={anInputChanged}
            />
            <input
              disabled={!boardFormData.title || !boardFormData.owner}
              type="submit"
              className="new-board-form-submit-btn"
            />
          </form>
        </div>
      );
};

BoardForm.propTypes = {
    creatBoard: PropTypes.func
};

export default BoardForm;