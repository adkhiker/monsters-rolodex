import React, { Component } from "react";

import { CardList } from './components/card-list/card-list.component'

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
        <CardList name="Yihua">
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
