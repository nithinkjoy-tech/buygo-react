import React, { Component } from "react";
import Input from "./input";

class Search extends Component {
  state = {
    searchValue: "",
  };

  handleChange = ({ currentTarget: input }) => {
    let searchValue = input.value;
    this.setState({ searchValue });
  };

  handleClick=(e)=>{
    e.preventDefault();
    this.props.onSearch(this.state.searchValue)
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0" >
        <Input
          classname="form-control mr-sm-2"
          type="text"
          placeholder="search product by name"
          onChange={this.handleChange}
          value={this.state.searchValue}
        />
        <button onClick={this.handleClick} className="btn btn-outline-success my-2 my-sm-0">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
