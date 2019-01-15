import React, { Component } from "react";
import "./App.css";

import ToDo from "./components/ToDo";
import response from "./data/response";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  render() {
    const resp = response.map(item => (
      <ToDo key={item.id} resp={item} counter={this.state.counter} />
    ));
    return (
      <div className="App">
        <h1 onClick={this.HandleClick}>{this.state.counter}</h1>
        {resp}
      </div>
    );
  }
}

export default App;
