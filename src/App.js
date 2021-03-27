import React, { Component } from "react";
import "./App.css";
import Mobiles from "./components/mobiles";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login";
import NavBar from "./components/navBar";
import Register from "./components/register";
import MobileForm from "./components/mobileForm";
import MobileDetails from "./components/mobileDetails";
import Cart from "./components/cart";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Checkout from "./components/checkout";
import ProtectedRoute from "./components/common/protectedRoute";
import AdminRoute from "./components/common/adminRoute";
import Logout from './components/logout';
import { addToCart,changeQuantity, getCartItems } from "./services/userService";
import { getCurrentUser } from "./services/authUser";

class App extends Component {
  state = {
    cartLength: "",
    userId:getCurrentUser()["_id"]
  };

  async componentDidMount() {
    let {data:cartItems}=await getCartItems(this.state.userId)
    this.setState({cartLength:cartItems.length,cartId:""})
  }

  
  handleAddToCart = async(mobileId) => {
    try{
      let { cartLength,userId } = this.state;
      await addToCart({mobileId,userId})
      toast.info("Added to cart")
      return this.setState({ cartLength: cartLength + 1 });
  }catch(ex){
    return (window.location = "/cart");
    }
  };

  handleChangeQuantity=async(mobileId,operation)=>{
    await changeQuantity(mobileId,this.state.userId,operation)
    window.location="/cart"
  }

  handleIncrement = (mobileId) => {
    let { cartLength } = this.state;
    this.setState({ cartLength: cartLength + 1 });
    this.handleChangeQuantity(mobileId,"increment")
    toast.info("Quantity Incremented")
  };

  removeLocalCartItems=()=>{
    this.setState({ cartLength: this.state.cartLength - 1 });
  }

  handleDecrement = (mobileId) => {
    let { cartLength } = this.state;
    this.setState({ cartLength: cartLength - 1 });
    this.handleChangeQuantity(mobileId,"decrement")
    toast.warning("Quantity Decremented")
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar cart={this.state.cartLength} />
        <Switch>
          <AdminRoute path="/mobiles/:id" component={MobileForm} />
          <Route path="/mobiles" component={Mobiles} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <ProtectedRoute path="/checkout/:id" component={Checkout} />
          {/* <ProtectedRoute path="/cart" component={<Cart
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              />} /> */}
          <ProtectedRoute
            path="/cart"
            render={(props) => (
              <Cart
                {...props}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              />
            )}
          />
          <Route
            path="/details/:id"
            render={(props) => (
              <MobileDetails
                {...props}
                onAddedToCart={this.state.cart}
                buttonClick={this.handleAddToCart}
              />
            )}
          />
          <Redirect exact from="/" to="/mobiles" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
