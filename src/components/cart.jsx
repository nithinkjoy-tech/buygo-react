import React from "react";
import { Link } from "react-router-dom";
import ConfirmBuy from "./../utils/confirmBuy";
import { getCurrentUser } from "../services/authUser";
import { getCartItems, removeCartItem } from "./../services/userService";
import { toast } from "react-toastify";

class Cart extends ConfirmBuy {
  state = {
    total: 0,
    mobiles: [],
    address: getCurrentUser()["address"],
    currentUserId: getCurrentUser()["_id"],
  };

  updateTotal=(mobiles)=>{
    let total = mobiles.map(
      (mobile) => (this.state.total += Number(mobile["total"]))
    );
    this.setState({ mobiles, total: total[total.length - 1]||0 });
  }

  async componentDidMount() {
    let { data: mobiles } = await getCartItems(this.state.currentUserId);
    this.updateTotal(mobiles)
  }

  removeMobile = async (mobileId) => {
    let { temp, tempTotal } = this.state;
    let mobiles = [...this.state.mobiles];
    this.setState({ total: 0 });
    let edited = mobiles.filter((mobile) => mobile._id !== mobileId);
    setTimeout(()=>{
      this.updateTotal(edited)
    },0)
    this.removeLocalCartItems()
    
    
    try {
      await removeCartItem(this.state.currentUserId, mobileId);
    
    } catch (ex) {
      this.setState({ mobiles: temp, total: tempTotal });
      toast.error("Something Went wrong");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2" />
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Mobile</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mobiles.map((mobile) => (
                  <tr key={mobile._id}>
                    <td>
                      <img
                        src={mobile["imageUrl"]}
                        style={{ width: "30px", height: "30px" }}
                        alt="mobile"
                      />
                    </td>
                    <td>
                      <Link to={`details/${mobile._id}`}>
                        {mobile["mobileName"]}
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          this.props.onDecrement(mobile._id, "decrement")
                        }
                        className="btn btn-warning btn-sm mr-2"
                        disabled={mobile["quantity"] <= 1 ? true : false}
                      >
                        -
                      </button>
                      <span className="badge badge-secondary mr-2">
                        {mobile["quantity"]}
                      </span>
                      <button
                        onClick={() =>
                          this.props.onIncrement(mobile._id, "increment")
                        }
                        className="btn btn-success btn-sm"
                      >
                        +
                      </button>
                    </td>
                    <td>{mobile["price"]}</td>
                    <td>{mobile["total"]}</td>
                    <td>
                      <button
                        onClick={() => this.removeMobile(mobile["_id"])}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Total:$ {this.state.total}</h3>
            <button onClick={this.submit} className="btn btn-danger">
              Buy
            </button>
          </div>
        </div>
        <center>
          <p>
            <b>Address: </b>
            {this.state.address}
          </p>
        </center>
      </React.Fragment>
    );
  }
}

export default Cart;
