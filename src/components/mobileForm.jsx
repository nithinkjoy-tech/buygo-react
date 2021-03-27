import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import {
  getMobileDetails,
  addMobileDetails,
  updateMobileDetails,
} from "../services/mobileService";
import { toast } from "react-toastify";

class MobileForm extends Form {
  schema = {
    mobileName: Joi.string().required(),
    feature1: Joi.string().required().min(3),
    feature2: Joi.string().required().min(3),
    feature3: Joi.string().required().min(3),
    feature4: Joi.string().required().min(3),
    price: Joi.number().required().min(0),
    description: Joi.string().required().min(5).max(3000),
    numberInStock: Joi.number().required(),
    imageUrl: Joi.string().required(),
  };

  async componentDidMount() {
    try {
      if (this.props.match.params.id) {
        let mobileId = this.props.match.params.id;
        let { data: mobiles } = await getMobileDetails();
        let mob = mobiles.filter((mobile) => mobile._id === mobileId);
        let data = {};
        let { schema } = this;

        for (let item in schema) data[item] = mob[0][item];
        this.setState({ data });
      }
    } catch (ex) {}
  }

  doSubmit = async () => {
    let { id } = this.props.match.params;
    let { data } = this.state;
    if (id === "new") await addMobileDetails(data);
    else await updateMobileDetails(data, id);
    window.location = "/";
    toast.info(`Mobile details ${id === "new" ? "Added" : "Updated"}`);
  };

  render() {
    return (
      <main className="container">
        <div>
          <h1>Mobile Details</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("mobileName", "Mobile Name")}
            {this.renderInput("feature1", "Feature 1")}
            {this.renderInput("feature2", "Feature 2")}
            {this.renderInput("feature3", "Feature 3")}
            {this.renderInput("feature4", "Feature 4")}
            {this.renderInput("price", "Price")}
            {this.renderInput("description", "Description")}
            {this.renderInput("numberInStock", "NumberInStock")}
            {this.renderInput("imageUrl", "ImgeUrl")}
            {this.renderButton("Save")}
          </form>
        </div>
      </main>
    );
  }
}

export default MobileForm;
