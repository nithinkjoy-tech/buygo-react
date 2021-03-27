import React, { Component } from "react";

class Select extends Component {
  state = {
    selectedValue:"",
    values: [1000, 3000, 6000, 9000, 10000],
  };

  render() {
    let { defaultValue,...rest } = this.props;
    return (
      <React.Fragment>
        <div className="form-group">
          <select className="form-control" {...rest} defaultValue={defaultValue}>
            {this.state.values.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default Select;
