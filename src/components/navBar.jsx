import React, { Component } from "react";
import { getCurrentUser } from "../services/authUser";

class NavBar extends Component {
  state = {
    user: getCurrentUser(),
  };

  render() {
    let { cart } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Buygo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Products <span className="sr-only">(current)</span>
                </a>
              </li>
              {this.state.user ? <React.Fragment>
        <li className="nav-item">
          <a className="nav-link" href="/user">
            {this.state.user.name||""}{getCurrentUser()["isAdmin"]?<span className="badge badge-pill badge-danger">admin</span>:null}
          </a>
        </li>
        <li className="nav-item mr-5">
          <a className="nav-link" href="/logout">
            Logout
          </a>
        </li>
      </React.Fragment> : <React.Fragment>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
        <li className="nav-item mr-5">
          <a className="nav-link" href="/register">
            Register
          </a>
        </li>
      </React.Fragment>}
              <li className="nav-item ml-5 cart">
                <a className="nav-link" href="/cart">
                  Cart
                  {cart > 0 ? (
                    <p className="badge badge-pill badge-warning">{cart}</p>
                  ) : (
                    ""
                  )}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
