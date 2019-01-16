import React from "react";

class Info extends React.Component {
  render() {
    return <h5>number of clicks; {this.props.counter}</h5>;
  }
}

export default Info;
