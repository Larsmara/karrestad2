import React from "react";
import "./index.scss";

const Button = ({ children, inverted, ...other }) => {
  return (
    <button className={`${inverted ? "inverted" : ""} custom-button`} {...other}>
      {children}
    </button>
  );
};

export default Button;
