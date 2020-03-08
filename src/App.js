import React from 'react';
import './App.css';
import Game from './Game.js'
import gol from './gol.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gol} className="App-logo" alt="logo" />
        <p>
            GAME OF LIFE
        </p>
          <Game />
      </header>
    </div>
  );
}

export default App;
