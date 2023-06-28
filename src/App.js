import { useState } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import Card from './components/Card';
import Board from './components/Board';
import CardForm from './components/CardForm';
import BoardForm from './components/BoardForm';
import './App.css';

function App() {

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
