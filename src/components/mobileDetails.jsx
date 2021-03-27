import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { getMobileDetails } from "../services/mobileService";
import Loading from "../utils/loading";
import { getCartItems } from "../services/userService";
import { getCurrentUser } from "./../services/authUser";

class MobileDetails extends Component {
  state = {
    filtered: [],
    isLoading: true,
    cartId: "",
  };

  async componentDidMount() {
    let { data: mobiles } = await getMobileDetails();
    let { data: cart } = await getCartItems(getCurrentUser()["_id"]);
    let mobileId = this.props.match.params.id;
    let filtered = mobiles.filter((mobile) => mobile._id === mobileId);
    let cartId = "";
    for (let cartItem of cart)
      if (cartItem._id === filtered[0]._id)
        cartId = cartItem._id;

    this.setState({ filtered, isLoading: false, cartId });
  }

  handleBuy = (mobileId) => {
    window.location = `/checkout/${mobileId}`;
  };

  handleClick=(mobileId)=>{
    if(!getCurrentUser()) return window.location="/login"
    this.props.buttonClick(mobileId, "addtocart")
    this.setState({cartId:mobileId})
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    return (
      <React.Fragment>
        {this.state.filtered.map((mobile) => (
          <React.Fragment key={uuidv4()}>
            <div key={uuidv4()} className="m-2">
              <img
                key={uuidv4()}
                className="img"
                src={mobile["imageUrl"]}
                alt="Card"
              />
            </div>
            <div key={uuidv4()} className="m-2">
              <h5 key={uuidv4()} className="card-title">
                {mobile["mobileName"]}
              </h5>
              <ul>
                <li key={uuidv4()}>{mobile["feature1"]}</li>
                <li key={uuidv4()}>{mobile["feature2"]}</li>
                <li key={uuidv4()}>{mobile["feature3"]}</li>
                <li key={uuidv4()}>{mobile["feature4"]}</li>
              </ul>
              <h2 key={uuidv4()}>price: ${mobile["price"]}</h2>
              <p>{mobile["description"]}</p>
              <p key={uuidv4()} style={{ color: "red" }}>
                Only {mobile["numberInStock"]} left in stock
              </p>
              <button
                key={uuidv4()}
                style={{ backgroundColor: "orangered" }}
                className="btn m-2"
                onClick={() => this.handleBuy(mobile["_id"])}
              >
                BUY NOW
              </button>
              <button
                key={uuidv4()}
                style={{ backgroundColor: "orange" }}
                onClick={()=>this.handleClick(mobile._id)}
                className="btn"
              >
                {this.state.cartId.includes(mobile._id)
                  ? "GO TO CART"
                  : "ADD TO CART"}
              </button>
            </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

export default MobileDetails;
