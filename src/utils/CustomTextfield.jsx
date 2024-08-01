// src/components/CustomTextField.js
import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const CustomTextField = ({ label, value, onChange, placeholder, type ,size='medium', ...props }) => {
    return (
        <TextField
            label={label}
            size={size}
            fullWidth
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            variant="outlined"
            margin="normal"
            
             InputProps={{
        style: {
         borderRadius:"10px",
          padding: '10px',
          height: '50px',
        },
      }}
            {...props}
        />
    );
};

CustomTextField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};

export default CustomTextField;
