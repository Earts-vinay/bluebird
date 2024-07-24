// DropdownTextField.js
import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const DropdownTextField = ({ label, options, value, onChange, helperText, error,children,width }) => {
  return (
    <TextField
      select
      size='small'
      sx={{ width:width}}
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
    >
      {children}
    </TextField>
  );
};

export default DropdownTextField;
