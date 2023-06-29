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

  console.log(cards);

  return (
    <section className="App">
      <BoardList boards={boards}/>
      <CardList cards={cards} updateDelete={updateDelete}/>
      <BoardForm />
      <CardForm />
    </section>
  );
}

export default App;
