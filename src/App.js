import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import Card from './components/Card';
import Board from './components/Board';
import CardForm from './components/CardForm';
import BoardForm from './components/BoardForm';
import './App.css';

function App() {

  const CARDS_URL = 'https://inspiration-board-api-uv33.onrender.com/cards';

  const [cards, setCards] = useState([]);

  // const updateDelete = (cardId) => {
  //   axios.delete(`https://inspiration-board-api-uv33.onrender.com/${cardId}`)
  //   .then( (response) => {
  //     const updatedTasks = cards.map(card => {
  //       if (card.id !== cardId) {
  //         return {...card};
  //     }
  //   });
  //   const filteredUpdatedTasks = updatedTasks.filter(function (element) {
  //     return element !== undefined;
  //   });

  //   console.log('sucess!', response.data);
  //   setCards(filteredUpdatedTasks);
  //   })
  //   .catch( (error) => {
  //     console.log('could not delete card', error, error.response)
  //   });
  // };

  
  const getCards = () => {
    axios
    .get(CARDS_URL)
    .then((response) => {
      const newCards = response.data.map((card) => {
        return {
          'message': card.message,
          'board_id': card.board_id
        };
      });
      setCards(newCards);
    })
    .catch((error) => {
      console.log(error.response.status);
      console.log(error.response.data);
    });
  };
  

  useEffect(() => {
    getCards();
  }, []);

  console.log(cards);

  return (
    <section className="App">
      <Board/>
      <Card />
      <BoardList />
      <CardList />
      <BoardForm />
      <CardForm />
    </section>
  );
}

export default App;
