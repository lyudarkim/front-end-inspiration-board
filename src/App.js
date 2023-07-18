import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import Board from './components/Board';
import CardForm from './components/CardForm';
import BoardForm from './components/BoardForm';
import './App.css';

function App() {

  const CARDS_URL = 'https://inspiration-board-api-uv33.onrender.com/cards';
  const BOARDS_URL = 'https://inspiration-board-api-uv33.onrender.com/boards';

  const [cards, setCards] = useState([]);
  const [boards, setBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState([]);

  const currentBoardID = (boardId, boardOwner, boardTitle) => {
    const updatedBoard = {
    "board_id": boardId,
    "title": boardTitle,
    "owner": boardOwner
    };
    setCurrentBoard(updatedBoard);
  };

  const createCard = (newCard) => {
    const updatedNewCard = {
      ...newCard,
      "board_id": 8,
      "card_id": null
    };

    axios.post(`${CARDS_URL}`, updatedNewCard)
    .then( (response) => {
  
      const newCardsArray = [...cards];
      newCardsArray.push(updatedNewCard);
      setCards(newCardsArray);
    })
    .catch( (error) => {
      console.log('error', error);
    });
  };

  const createBoard = (newBoard) => {

    const updatedNewBoard = {
      ...newBoard,
      "board_id": null
    };

    // There's a lag for board_id updating in the state
    axios.post(`${BOARDS_URL}`, updatedNewBoard)
    .then( (response) => {
  
      const newBoardsArray = [...boards];
      newBoardsArray.push(updatedNewBoard);
      setBoards(newBoardsArray);
    })
    .catch( (error) => {
      console.log('error', error);
    });
  };

  const updateDelete = (cardId) => {
    axios.delete(`${CARDS_URL}/${cardId}`)

    .then( (response) => {

      const updatedCards = cards.filter(function (cards) {
        return cards.card_id !== cardId;
      });

      console.log('success!', response.data);
      setCards(updatedCards);
    })
    .catch( (error) => {
      console.log('could not delete card', error, error.response)
    });
  };

  
  const getCards = () => {
    axios
    .get(CARDS_URL)
    .then((response) => {
      const newCards = response.data.map((card) => {
        return {
          'message': card.message,
          'board_id': card.board_id,
          'card_id': card.card_id
        };
      });
      setCards(newCards);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response.data);
    });
  };
  
  const getBoards = () => {
    axios
    .get(BOARDS_URL)
    .then((response) => {
      const newBoards = response.data.map((board) => {
        return {
          'title': board.title,
          'board_id': board.board_id,
          'owner': board.owner
        };
      });
      setBoards(newBoards);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response.data);
    });
  };

  useEffect(() => {
    getCards();
    getBoards();
  }, []);

  return (
    <section className="App">
      <BoardList boards={boards} currentBoardID={currentBoardID}/>
      <CardList cards={cards} updateDelete={updateDelete}/>
      <BoardForm createBoard={createBoard}/>
      <CardForm createCard={createCard}/>
    </section>
  );
}

export default App;
