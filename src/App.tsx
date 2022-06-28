import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{color: 'white'}}>
      Hello Emm, creías que sería tan sencillo? Pues nope, primero tendrás que realizar este quizz, si aciertas todas de manera correcta tendrás un regalo extra, GL HF!
      (un consejo, la única lógica válida es la mía, por lo que te recomiendo que pienses como yo)

      <Link to='question-1'>Comenzar</Link>
    </div>
  );
}

export default App;
