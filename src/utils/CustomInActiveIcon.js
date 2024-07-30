import React from 'react';
import { Box } from '@mui/material';

const CustomInActiveStepIcon = ({ icon }) => {
  return (
    <Box
      sx={{
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: '#3275AF',
        fontSize: '14px',
        fontWeight: 'bold',
        backgroundImage: `url(${icon})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    </Box>
  );
};

export default CustomInActiveStepIcon;