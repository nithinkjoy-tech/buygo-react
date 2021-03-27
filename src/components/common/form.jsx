import React, { Component } from "react";
import Select from "./select";
import Input from "./input";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let options = { abortEarly: false };
    let { data } = this.state;
    let errors = {};
    let { error } = Joi.validate(data, this.schema, options);
    if (error) {
      for (let item in error.details) {
        let { path, message } = error.details[item];
        errors[path] = message;
      }
    }
    this.setState({ errors });
    if(!error) this.doSubmit()
  };

  validateProperty = (name) => {
    let obj = { [name]: this.state.data[name] };
    let errors = {};
    let schema = { [name]: this.schema[name] };
    let { error } = Joi.validate(obj, schema);
    if (error) errors[name] = error.details[0].message;
    this.setState({ errors });
  };

  handleChange = ({ currentTarget: input }) => {
    let { data } = { ...this.state };
    let { name } = input;
    data[name] = input.value;
    this.setState({ data });
    this.validateProperty(name);
  };

  renderSelect(defaultValue) {
    return (
      <React.Fragment>
        <Select
          name={defaultValue === "1000" ? "min" : "max"}
          onChange={this.props.onChange}
          defaultValue={defaultValue}
        />
        <br />
      </React.Fragment>
    );
  }

  renderInput(name, placeholder, type = "text") {
    let { data, errors } = this.state;
    return (
      <React.Fragment>
        <Input
          error={errors[name]}
          value={data[name] || ""}
          name={name}
          type={type}
          label={placeholder}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
      </React.Fragment>
    );
  }

  renderButton(name) {
    return (
      <button className="btn btn-primary btn-sm">
        {name}
      </button>
    );
  }
}

export default Form;
