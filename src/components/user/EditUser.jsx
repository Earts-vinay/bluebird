import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReactCropper from './ReactCropper';
import CustomTextfield from '../../utils/CustomTextfield';
import CustomDropdown from '../../utils/CustomDropdown';
import CustomButton from '../../utils/CustomButton';


const EditUser = ({ setIsEditingUser }) => {
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
    setIsEditingUser(false);
    // setBreadcrumbs([]);
  }

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
            width: { xs: '100%', md: '50%', sm: "60%" },
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
              <CustomButton width='auto'> Upload Image
                <input
                  type="file"
                  hidden
                  onChange={handleImageUpload} /></CustomButton>
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

            }}
          >

            <CustomTextfield label="Name" type="text" onChange={formik.handleChange} value={formik.values.name} />
            <CustomTextfield label="Email" type="email" onChange={formik.handleChange} value={formik.values.email} />

            <CustomDropdown label="Access Level" onChange={formik.handleChange} value={formik.values.accesslevel}>
              <MenuItem>Company Admin</MenuItem>
              <MenuItem>Company Viewer</MenuItem>
              <MenuItem>Property Viewer</MenuItem>
            </CustomDropdown>

            <CustomDropdown label="Access Level" onChange={formik.handleChange} value={formik.values.accesslevel}>
              <MenuItem>Ikea Test</MenuItem>
              <MenuItem>Ikea</MenuItem>
            </CustomDropdown>
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
            <CustomButton variant='outlined' onClick={handleCancel}>Cancel</CustomButton>
            <CustomButton>Save</CustomButton>
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

export default EditUser;
