import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Main from './components/Main'
import Qui from './components/Qui'
import End from './components/End'
import { QuizContext } from './Helpers/Context';

function App() {
  const [gameState,setGameState]=useState("main");
  const [score,setScore]=useState(0);
  return (
    <div className="App">
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        <h1>Quiz App</h1>
      {gameState==='main' && <Main/>}
      {gameState==='quiz' && <Qui/>}
      {gameState==='end' && <End/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
