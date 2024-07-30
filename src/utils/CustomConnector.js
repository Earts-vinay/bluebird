import React from 'react';
import { StepConnector } from '@mui/material';
import { styled } from '@mui/system';

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  '&.MuiStepConnector-alternativeLabel': {
    top: 25,
  },
  '&.MuiStepConnector-active .MuiStepConnector-line': {
    borderColor: '#FE9A84',
  },
  '&.MuiStepConnector-completed .MuiStepConnector-line': {
    borderColor: '#187BCD',
  },
  '.MuiStepConnector-line': {
    borderColor: '#E2E8F0',
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

export default CustomConnector;
