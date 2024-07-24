// src/components/CustomSearch.js

import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const CustomSearch = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
      size='small'
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        borderRadius: '10px',
        border: 'none',
        backgroundColor: 'white',
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          backgroundColor: 'white',
          '& fieldset': {
            border: 'none',
          },
        },
      }}
    />
  );
};

export default CustomSearch;
