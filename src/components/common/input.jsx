import React from "react";

const Input = ({error,name,label, placeholder, type, value,onChange}) => {
  return (
    <React.Fragment>
      <div className="form-group">
      <label htmlFor={name}>{label}</label>
        <input
          onChange={onChange}
          className="form-control"
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          aria-label="Search"
        />
      </div>
      {error&&<div className="alert alert-danger" >{error}</div>}
    </React.Fragment>
  );
};

export default Input;
