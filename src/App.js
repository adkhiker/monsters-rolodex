import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

    //.then(response => )
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
