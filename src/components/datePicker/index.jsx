import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

const DatePicker = ({ selectedDate, handleChange, ...props }) => {
  const [date, setDate] = useState(new Date());
  return (
    <ReactDatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      dateFormat="dd.MM.yyyy"
      showPopperArrow={false}
      {...props}
    />
  );
};

export default DatePicker;
