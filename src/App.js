import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

/* constructor() {
  super();

  this.state = {
    string: 'Hello Nemo'
  };
  
}; */

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json())
      .then(users => this.setState({ monsters: users }));
    
    //.then(response => )
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;
