import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ showModal, onSaveHandler, onModalClose, children }) => {
    if (!showModal) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#fff',
                    padding: 4,
                    borderRadius: 2,
                    position: 'relative',
                }}
            >
                <IconButton
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    onClick={onModalClose}
                >
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" align="center" sx={{ mb: 2 }}>
                    Edit Photo
                </Typography>
                {children}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 2,
                    }}
                >
                    <Button
                        onClick={onModalClose}
                        sx={{
                            backgroundColor: '#fff',
                            color: '#000',
                            border: '1px solid #000',
                            '&:hover': { backgroundColor: '#f2f2f2' },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onSaveHandler}
                        sx={{
                            backgroundColor: '#1976d2',
                            color: '#fff',
                            '&:hover': { backgroundColor: '#1569A8' },
                        }}
                    >
                        Update
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Modal;
