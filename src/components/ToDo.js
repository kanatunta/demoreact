import React from "react";
import Info from "./Info";

class ToDo extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.resp.id}</h3>
        <p>
          {this.props.resp.price} - {this.props.resp.desc}
        </p>
        <Info counter={this.props.counter} />
      </div>
    );
  }
}

export default ToDo;
