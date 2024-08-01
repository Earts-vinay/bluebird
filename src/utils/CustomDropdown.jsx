// DropdownTextField.js
import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const DropdownTextField = ({ label, options, value, onChange, helperText,size='medium', error,children,width }) => {
  return (
    <TextField
      select
      size={size}
      fullWidth
      sx={{ width:width}}
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
        margin="normal"
        InputProps={{
          style: {
           borderRadius:"10px",
            padding: '10px',
            height: '50px',
          },
        }}
    >
      {children}
    </TextField>
  );
};

export default DropdownTextField;
