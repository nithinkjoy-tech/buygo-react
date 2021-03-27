import React, { Component } from "react";
import ReactLoading from "react-loading"

class Loading extends Component {
  render() {
    return (
        <center>
          <ReactLoading
            type={"bars"}
            color={"#fff025"}
            height={"10%"}
            width={"50%"}
          />
        </center>
    );
  }
}

export default Loading;
