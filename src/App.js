import React, { Component } from "react";
import "./App.css";

import ToDo from "./components/ToDo";
import response from "./data/response";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      resp: response
    };
    //this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  HandleClickCheckBox = i => {
    //console.log(i);
    const responseCopy = response.map((e, indx) => {
      if (indx === i) {
        e.checked = !e.checked;
      }
      return e;
    });
    this.setState({ resp: responseCopy });

    //console.log(this.state);
  };

  render() {
    const resp = this.state.resp.map((item, i) => (
      <ToDo
        key={item.id}
        resp={item}
        counter={this.state.counter}
        change={() => this.HandleClickCheckBox(i)}
      />
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
