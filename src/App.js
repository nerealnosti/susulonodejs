import React from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import CounterApp from './Components/Counter/CounterApp';
import RaitingApp from './Components/Raiting/RaitingApp';

function App() {
  return (
    <div className="App">
      <Counter targetCount={47} />
      <RaitingApp Nstarts={5} />
      <CounterApp targetCount={60000} />
      <CounterApp targetCount={32} />
      <CounterApp targetCount={127} />
    </div>
  );
}

export default App;
