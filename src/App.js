import BoardList from './components/BoardList';
import CardList from './components/CardList';
import Card from './components/Card';
import Board from './components/Board';
import CardForm from './components/CardForm';
import BoardForm from './components/BoardForm';
import './App.css';

function App() {
  return (
    <section className="App">
      <Board />
      <Card />
      <BoardList />
      <CardList />
      <BoardForm />
      <CardForm />
    </section>
  );
}

export default App;
