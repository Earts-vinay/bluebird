import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import { borderRadius, textTransform } from '@mui/system';



const CustomDeleteDialog = ({ open, handleClose, handleConfirm, title, content, confirmText = "Delete", cancelText = "Cancel" }) => {
  console.log("harish check this");
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { width: '400px', maxWidth: '90%', borderRadius: "10px" } }}>
      <Box sx={{backgroundColor:"rgba(251, 243, 240, 1)",textAlign:"center",padding:"10px"}}><Typography>{title}</Typography></Box>
      <DialogContent sx={{textAlign:"center"}}>
        <Typography>{content}</Typography>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap:"10px" }}>
        <CustomButton variant='outlined' onClick={handleClose}>{cancelText}</CustomButton>
        <CustomButton  sx={{backgroundColor:"rgba(229, 55, 36, 1)",color:"white",borderRadius:"10px",textTransform:"capitalize",}} onClick={handleConfirm}>{confirmText}</CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDeleteDialog;
