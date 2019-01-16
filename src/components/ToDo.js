import React from "react";
import Info from "./Info";

class ToDo extends React.Component {
  constructor() {
    super();
  }

  render() {
    //console.log(this.props)
    return (
      <div className="todos">
        <h3>{this.props.resp.id}</h3>
        <input
          type="checkbox"
          onChange={this.props.change}  
          checked={this.props.resp.checked}        
        />
        <p>
          {this.props.resp.price} - {this.props.resp.desc}
        </p>
        <Info counter={this.props.counter} />
      </div>
    );
  }
}

export default ToDo;
