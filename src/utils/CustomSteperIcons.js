import React from 'react';
import { Box } from '@mui/material';

const CustomSteperIcons = ({ icon1, icon2,icon3 }) => {
  return (
    <Box
      sx={{
        width: 60,
        height: 30, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        borderRadius: '50%',
        color: '#3275AF',
        fontSize: '14px',
        fontWeight: 'bold',
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          backgroundImage: `url(${icon1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          width: 30,
          height: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${icon2})`,
          backgroundPosition: 'center',
        }}
      />
    
    <Box
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          backgroundImage: `url(${icon3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
};

export default CustomSteperIcons;
