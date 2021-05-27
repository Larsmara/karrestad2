import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';

const DatePicker = ({ selectedDate, handleChange, ...props }) => {
  const [date, setDate] = useState(new Date());

  const returnHandleChange = (date) => {
    if (handleChange) {
      handleChange(date);
    }
  };
  return (
    <ReactDatePicker
      selected={date}
      onChange={(date) => {
        setDate(date);
        returnHandleChange(date);
      }}
      dateFormat='dd.MM.yyyy'
      showPopperArrow={true}
      {...props}
    />
  );
};

export default DatePicker;
