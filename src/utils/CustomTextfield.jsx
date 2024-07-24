// src/components/CustomTextField.js
import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const CustomTextField = ({ label, value, onChange, placeholder, type , ...props }) => {
    return (
        <TextField
            label={label}
            size='small'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            variant="outlined"
            margin="normal"
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
