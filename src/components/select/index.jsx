import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Select = ({ options, id, label, ...other }) => {
  const [open, setOpen] = useState(false);

  const handleBlur = (e) => {
    if (e.target.value) {
      setOpen(true);
    } else {
      setOpen(!open);
    }
  };

  return (
    <div className='group'>
      {label && (
        <label htmlFor={id} className={`${open ? 'shrink' : ''} form-label`}>
          {label}
        </label>
      )}
      <select
        className='custom-select'
        {...other}
        onFocus={handleBlur}
        onBlur={handleBlur}
      >
        <option defaultValue disabled hidden></option>
        {options &&
          options.map(({ oppgang, nummer }, i) => (
            <option value={nummer} key={i}>
              {`Oppgang ${oppgang}, ${nummer}`}
            </option>
          ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
