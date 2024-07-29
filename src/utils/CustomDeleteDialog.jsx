import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const StyledDialogTitle = styled(DialogTitle)({
  backgroundColor: "#FBF3F0",
  color: "#013A6F",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "bold",
});

const StyledDialogContentText = styled(DialogContentText)({
  paddingTop: "25px",
  textAlign: "center",
});

const StyledDialogActions = styled(DialogActions)({
  justifyContent: 'center',
  paddingBottom: "25px",
});

const StyledButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: "10px",
  textTransform: "capitalize",
  ...(variant === 'cancel' && {
    border: "2px solid #D4E4EA",
    color: "#7A9AAE",
  }),
  ...(variant === 'delete' && {
    backgroundColor: "#E53724",
    color: "white",
  }),
}));

const CustomDeleteDialog = ({ open, handleClose, handleConfirm, title, content, confirmText = "Delete", cancelText = "Cancel" }) => {
  console.log("harish check this");
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { width: '400px', maxWidth: '90%', borderRadius: "10px" } }}>
      <StyledDialogTitle>{title}</StyledDialogTitle>
      <DialogContent>
        <StyledDialogContentText>{content}</StyledDialogContentText>
      </DialogContent>
      <StyledDialogActions>
        <StyledButton variant="cancel" onClick={handleClose}>{cancelText.toLowerCase()}</StyledButton>
        <StyledButton variant="delete" onClick={handleConfirm}>{confirmText.toLowerCase()}</StyledButton>
      </StyledDialogActions>
    </Dialog>
  );
};

export default CustomDeleteDialog;
