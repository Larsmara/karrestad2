import React from "react";
import "./index.scss";

const Card = ({
  title,
  body,
  type = "h1",
  width = 300,
  height = 300,
  opacity = 1,
  spacing = "10px",
  background = "#fff",
  actions,
}) => {
  const CustomTag = `${type}`;
  return (
    <div
      className="card"
      style={{
        backgroundColor: `${background}`,
        opacity: opacity,
        height: height,
        width: width,
        margin: `${spacing}`,
      }}
    >
      <CustomTag className="title">{title}</CustomTag>
      <p className="body">{body}</p>

      <div className="actions">{actions}</div>
    </div>
  );
};

export default Card;
