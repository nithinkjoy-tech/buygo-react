import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { getCurrentUser } from "../services/authUser";

class Mobile extends Component {
  state = {
    admin: getCurrentUser()["isAdmin"],
  };
  
  
  render() {
    let { mobiles } = this.props;
    if(mobiles.length===0) return <p>There are no mobile phones available</p>
    return (
      <React.Fragment>
        {mobiles.map((mobile) => (
          <a
            key={uuidv4()}
            href={
              this.state.admin
                ? `/mobiles/${mobile["_id"]}`
                : `/details/${mobile["_id"]}`
            }
          >
            <div key={uuidv4()} className="card bg-white text-black m-4">
              <img
                key={uuidv4()}
                className="img"
                src={mobile["imageUrl"]}
                alt="Card"
              />
              <div key={uuidv4()} className="card-img-overlay details-position">
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
              </div>
            </div>
          </a>
        ))}
      </React.Fragment>
    );
  }
}

export default Mobile;
