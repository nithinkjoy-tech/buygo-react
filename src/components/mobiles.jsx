import React, {Component} from "react";
import {Link} from "react-router-dom";
import Mobile from "./mobile";
import Filter from "./filter";
import Search from "./common/search";
import {getMobileDetails} from "../services/mobileService";
import Loading from "../utils/loading";
import {getCurrentUser} from "./../services/authUser";

class Mobiles extends Component {
  state = {
    isAdmin: "",
    selectedMinValue: 1000,
    selectedMaxValue: 10000,
    mobiles: "",
    filtered: "",
    isLoading: true, 
  };

  async componentDidMount() {
    let {data: mobiles} = await getMobileDetails();
    let isAdmin = getCurrentUser()["isAdmin"];
    this.setState({mobiles, filtered: mobiles, isLoading: false, isAdmin});
  }

  handleSearch = input => {
    let mobileName = input.toLowerCase();
    let filtered = this.state.mobiles.filter(mobile =>
      mobile.mobileName.toLowerCase().startsWith(mobileName)
    );
    this.setState({filtered});
  };

  handleChange = ({currentTarget: input}) => {
    let selectedMinValue = "";
    let selectedMaxValue = "";
    if (input["name"] === "min") {
      selectedMinValue = input["value"];
      this.setState({selectedMinValue});
    } else {
      selectedMaxValue = input["value"];
      this.setState({selectedMaxValue});
    }
  };

  handleFilter = () => {
    let {mobiles, selectedMaxValue, selectedMinValue} = this.state;
    let filtered = mobiles.filter(
      mobile =>
        mobile["price"] >= selectedMinValue &&
        mobile["price"] <= selectedMaxValue
    );
    this.setState({filtered});
  };

  render() {
    if (this.state.isLoading) return <Loading/>
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <Filter onChange={this.handleChange} onFilter={this.handleFilter} />
          </div>
          <div className="col">
            <Search onSearch={this.handleSearch} />
            {this.state.isAdmin ? (
              <Link to="mobiles/new" className="btn btn-primary">
                Add Mobile
              </Link>
            ) : null}
            <Mobile mobiles={this.state.filtered} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Mobiles;
