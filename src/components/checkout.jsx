import React from "react";
import { getCurrentUser } from "../services/authUser";
import { getOneMobileDetails } from "../services/mobileService";
import ConfirmBuy from "../utils/confirmBuy";
import Loading from "../utils/loading";

class Checkout extends ConfirmBuy {
  state = {
    address: getCurrentUser()["address"],
    mobile: "",
    isLoading:true
  };

  async componentDidMount() {
    let { data: mobile } = await getOneMobileDetails(
      this.props.match.params.id
    );
    this.setState({ mobile,isLoading:false });
  }

  render() {
    let { address, mobile } = this.state;
    if(!mobile) return <Loading/>
    return (
      <div>
        <p className="mt-2 breadcrumb">
          <b style={{ color: "red" }}>Delivery Address: </b> {address}
        </p>
        <p className="mt-2 breadcrumb">
          <b style={{ color: "red" }}>Mobile Name: </b> {mobile["mobileName"]}
        </p>
        <p className="mt-2 breadcrumb">
          <b style={{ color: "blue" }}>Delivery Within 7 days of order</b>
        </p>
        <p className="mt-2 breadcrumb">
          <b style={{ color: "red",fontWeight:'bold' }}>Total Amount Payable: </b>$
          {mobile["price"]}
        </p>
        <button className="btn btn-success" onClick={this.submit}>Buy</button>
      </div>
    );
  }
}

export default Checkout;
