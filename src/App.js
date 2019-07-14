import React from 'react';
import logo from './logo.svg';
import './App.css';

/* constructor() {
  super();

  this.state = {
    string: 'Hello Nemo'
  };
  
}; */

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
        Hello
        </p>

        <button>Change Text</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
