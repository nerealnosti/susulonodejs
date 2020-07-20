import React from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import RaitingsApp from './Components/Raitiigs/RaitingsApp';
import RaitingApp from './Components/Raiting/RaitingApp';

function App() {
  return (
    <div className="App">
      <Counter targetCount={150} />
      <RaitingApp Nstarts={5} />
      <RaitingsApp />
    </div>
  );
}

export default App;
