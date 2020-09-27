import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TextArea = ({ id, label, ...other }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    if (e.target.value) {
      setOpen(true);
    } else {
      setOpen(!open);
    }
  };

  return (
    <div className='group-text-area'>
      {label && (
        <label className={`${open ? 'shrink' : ''} form-area-label`}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        {...other}
        className='text-area'
        onFocus={handleOpen}
        onBlur={handleOpen}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextArea;
