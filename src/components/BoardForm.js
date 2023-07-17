import React from 'react';
import PropTypes from 'prop-types';
import './BoardForm.css';

const INITIAL_FORM_DATA = {
    board_id: '',
    title: '',
    owner: ''
}

const BoardForm = () => {

    return (
        <section>
            <h2>Create a New Board</h2>
            <form>
                <label htmlFor="boardTitle">Title:</label>
                <input 
                id="boardTitle"
                name="title"
                ></input>
                <label htmlFor="boardOwner">Owner's Name:</label>
                <input 
                id="boardOwner"
                name="owners name"
                ></input> 
                <input 
                type="submit"
                ></input> 
            </form>

        </section>
    );


};

export default BoardForm;