import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import './BoardList.css';

const BoardList = (props) => {
    
    const boards = props.boards;

    const getBoardListJSX = (boards) => {
        return boards.map((board) => {
            return (
                <Board 
                    key={board.board_id}
                    board_id={board.board_id}
                    title={board.title}
                    owner={board.owner}
                    currentBoardID={props.currentBoardID}
                    getCards={props.getCards}
                />
            );
        })
    };
    return <ol className='boards_list no-bullet'>{getBoardListJSX(boards)}</ol>;
};

BoardList.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
          board_id: PropTypes.number,
          title: PropTypes.string.isRequired,
          owner: PropTypes.string.isRequired
          })
    ).isRequired
};

export default BoardList;