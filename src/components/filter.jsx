import React from "react";
import Form from "./common/form"

class Filter extends Form { 
  render() {
    return (
      <React.Fragment>
        <p>Enter min and max amount</p>
        {this.renderSelect("1000")}
        {this.renderSelect("10000")}
        <button className="btn btn-primary btn-sm" onClick={()=>this.props.onFilter()} >Apply</button>
      </React.Fragment>
    );
  }
}

export default Filter;
