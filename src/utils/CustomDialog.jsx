import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Box, Typography } from '@mui/material';
import CustomButton from './CustomButton';


const CustomDialog = ({ open, handleClose, onClick, title, children, save = "Save", cancel = "Cancel" }) => {
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { width: '500px', maxWidth: '90%', borderRadius: "10px" } }}>
      <Box sx={{ backgroundColor: "rgba(233, 244, 251, 1)", padding: "10px" }}><Typography>{title}</Typography></Box>
      <DialogContent sx={{ textAlign: "center" }}>
      {children}
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "10px" }}>
        <CustomButton variant='outlined' onClick={handleClose}>{cancel}</CustomButton>
        <CustomButton  onClick={onClick}>{save}</CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;


