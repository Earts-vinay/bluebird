// src/components/CommonButton.js

import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({
  children,
  onClick,
  variant = 'contained',
  color,
  size = 'medium',
  disabled = false,
  startIcon,
  position,
  endIcon,
  width = '100px',
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      
      sx={{
        borderRadius: "10px",
        textTransform: 'capitalize',
        width: width,
        position:{position}
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
