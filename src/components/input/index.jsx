import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Input = ({ id, label, type, ...other }) => {
  return (
    <div className="group-input">
      <input className="form-input" {...other} id={id} type={type} />
      {label && (
        <label className={`${other.value.length ? "shrink" : ""} form-input-label`}>{label}</label>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
