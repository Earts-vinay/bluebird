import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const CustomSearch = ({ value, onChange, placeholder = 'Search...', width = 'auto' }) => {
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
            <SearchIcon sx={{ color: '#9EA6B6' }} />
          </InputAdornment>
        ),
      }}
      sx={{
        borderRadius: '10px',
        width: width,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
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
