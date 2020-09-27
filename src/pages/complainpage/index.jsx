import React, { useState } from "react";
import "./index.scss";
import { Select, Input, TextArea, Button } from "../../components";
import units from "../../assets/units";

const ComplainPage = () => {
  const [state, setState] = useState({
    unitSelect: "",
    name: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="item">
        <h3>Send in your complaint here</h3>
        <form onSubmit={handleSubmit}>
          <Select
            id="at-complainUnitSelect"
            options={units}
            label="Select unit"
            value={state.unitSelect}
            name="unitSelect"
            onChange={handleChange}
            required
          />
          <Input
            label="Name"
            value={state.name}
            onChange={handleChange}
            name="name"
            required
            id="at-complainInput"
          />

          <TextArea
            label="Your text"
            name="text"
            value={state.text}
            required
            onChange={handleChange}
            id="at-complainTextArea"
          />

          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default ComplainPage;
