import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid
} from '@mui/material';
import CustomButton from "../utils/CustomButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import CustomTextField from "../utils/CustomTextfield";
import DropdownTextField from "../utils/CustomDropdown";

const EditDevices = () => {
  const navigate = useNavigate();
  const [deviceName, setDeviceName] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');

  const handleGoBack = () => {
    navigate(-1); 
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handleSaveAndContinue = () => {
    console.log("Save & Continue button clicked");
  };

  const handleDeviceNameChange = (event) => {
    setDeviceName(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

;

  return (
    <Container disableGutters sx={{ maxWidth: '100%' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} sx={{ pl: "0px" }}>
        <Box display="flex" alignItems="center" sx={{ pl: "0px" }}>
          <Button
            onClick={handleGoBack}
            sx={{
              borderRadius: '50%',
              width: 35,
              height: 35,
              minWidth: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E2E8F0',
              color: 'white',
            }}
          >
            <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
          </Button>
          <Typography variant="h6" ml={5} sx={{ color: "#3275AF", fontSize:"18px" }}>
            Devices
          </Typography>
        </Box>
        <Box display="flex">
          <CustomButton 
            label="Cancel" 
            onClick={handleCancel} 
            sx={{ marginRight: '10px', color:"#7A9AAE", backgroundColor:"white", textTransform: 'none', borderRadius:"10px", paddingRight:"20px", paddingLeft:"20px"}} 
          >Cancel</CustomButton>
          <CustomButton 
            label="Save & Continue" 
            onClick={handleSaveAndContinue} 
            sx={{ color:"white", backgroundColor:"#187BCD", textTransform: 'none', borderRadius:"10px"}}
          >Save & Continue</CustomButton>
        </Box>
      </Box>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: '16px' }}>
            <CustomTextField
              value={deviceName}
              onChange={handleDeviceNameChange}
              placeholder="device name"
              sx={{ width: "100%", fontSize:"8px" }}
            />
           <CustomTextField
              value={deviceName}
              onChange={handleDeviceNameChange}
              placeholder="pole name"
              sx={{ width: "100%"}}
            />
            <CustomTextField
              value={deviceName}
              onChange={handleDeviceNameChange}
              placeholder="camera ID"
              sx={{ width: "100%" }}
            />
            <CustomTextField
              value={deviceName}
              onChange={handleDeviceNameChange}
              placeholder="latitude"
              sx={{ width: "100%"}}
            />
             <CustomTextField
              value={deviceName}
              onChange={handleDeviceNameChange}
              placeholder="longitude"
              sx={{ width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} height="90vh">
          <Box sx={{ padding: '16px' }}>
            <Typography variant="h6" sx={{ marginBottom: '16px' }}>
              
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditDevices;
