import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReactCropper from './ReactCropper';

const AddUser = ({ setIsAddingUser }) => {
    console.log("Add user re-rendered");
    const navigate = useNavigate();
    const [uploadedImage, setUploadedImage] = useState(null);
    const [showCropper, setShowCropper] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            accesslevel: '',
            propertyname: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleCancel = () => {
        navigate('/users');
        setIsAddingUser(false);
        // setBreadcrumbs([]);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setUploadedImage(reader.result);
            setShowCropper(true);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSaveCroppedImage = (croppedImage) => {
        setUploadedImage(croppedImage);
        setShowCropper(false);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                boxSizing: 'border-box',
                position: "relative",
                flexDirection: 'column',
                width: '100%',
                maxWidth: '1200px',
                margin: 'auto',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    gap: '30px',
                    margin: 'auto 10%',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 5,
                        width: { xs: '100%', md: '50%' },
                        margin: 'auto',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                        }}
                    >
                        <Box
                            sx={{
                                width: '150px',
                                height: '150px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#EEF7FF',
                                color: '#013A6F',
                                borderRadius: '50%',
                                textAlign: 'center',
                                fontSize: '50px',
                                overflow: 'hidden',
                            }}
                        >
                            {uploadedImage ? (
                                <img
                                    src={uploadedImage}
                                    alt="Uploaded"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                                />
                            ) : (
                                'JD'
                            )}
                        </Box>

                        <Box
                            sx={{
                                width: '100%',
                                backgroundColor: '#FDFBEA',
                                borderRadius: '8px',
                                padding: 3,
                                textAlign: 'center',
                            }}
                        >
                            <Button
                                variant="contained"
                                component="label"
                                sx={{
                                    height: '40px',
                                    borderRadius: '8px',
                                    backgroundColor: '#187BCD',
                                    color: '#FFFFFF',
                                    margin: '10px auto',
                                    '&:hover': {
                                        backgroundColor: '#1569A8',
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    width: '70%',
                                }}
                            >
                                Upload Image
                                <input
                                    type="file"
                                    hidden
                                    onChange={handleImageUpload}
                                />
                            </Button>
                            <Typography sx={{ fontSize: '15px', marginTop: '10px', color: '#013A6F' }}>
                                Preferred File: 512x512 <br />
                                Format Supported: .jpg & .png
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        borderRight: '1px solid #ddd',
                        height: 'auto',
                    }}
                />

                <form
                    onSubmit={formik.handleSubmit}
                    style={{ width: '100%' }}
                >
                    <Box
                        sx={{
                            width: '90%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 5,
                            margin: 'auto',
                            gap: '15px',
                        }}
                    >
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            sx={{
                                mb: 2,
                                borderRadius: "60px",
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#013A6F',
                                        borderRadius: '10px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#013A6F',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#013A6F',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#013A6F',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#013A6F',
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            sx={{
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#013A6F',
                                        borderRadius: '10px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#013A6F',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#013A6F',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#013A6F',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#013A6F',
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            id="accesslevel"
                            name="accesslevel"
                            label="Access Level"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.accesslevel}
                            sx={{
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#013A6F',
                                        borderRadius: '10px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#013A6F',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#013A6F',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#013A6F',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#013A6F',
                                },
                            }}
                        />
                        <TextField
                            fullWidth
                            id="propertyname"
                            name="propertyname"
                            label="Property Name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.propertyname}
                            sx={{
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#013A6F',
                                        borderRadius: '10px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#013A6F',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#013A6F',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#013A6F',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#013A6F',
                                },
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2,
                            position: 'absolute',
                            bottom: '-40%',
                            left: "35%",
                        }}
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                borderRadius: '8px',
                                border: '1px solid #3275AF',
                                color: '#3275AF',
                                backgroundColor: 'transparent',
                                '&:hover': {
                                    backgroundColor: '#f2f2f2',
                                },
                            }}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                                borderRadius: '8px',
                                backgroundColor: '#3275AF',
                                '&:hover': {
                                    backgroundColor: '#285a8a',
                                },
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                </form>
            </Box>

            {showCropper && (
                <ReactCropper
                    showModal={showCropper}
                    onModalClose={() => setShowCropper(false)}
                    imgURL={uploadedImage}
                    onSaveHandler={handleSaveCroppedImage}
                />
            )}
        </Box>
    );
};

export default AddUser;
