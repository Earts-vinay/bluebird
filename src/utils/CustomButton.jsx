// src/components/CommonButton.js

import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({
  children,
  onClick,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  startIcon,
  endIcon,
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
        backgroundColor: 'rgba(24, 123, 205, 1)',
       borderRadius:"10px"
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
