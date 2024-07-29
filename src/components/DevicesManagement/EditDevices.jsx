import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid
} from '@mui/material';
import CustomButton from "../../utils/CustomButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import CustomTextField from "../../utils/CustomTextfield";
import CustomMapContainer from "../../utils/CustomMapContainer";

const EditDevices = () => {
  const navigate = useNavigate();
  const [deviceName, setDeviceName] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [latitude, setLatitude] = useState(17.3850); 
  const [longitude, setLongitude] = useState(78.4867); 
  const [defaultCenter, setDefaultCenter] = useState({ lat: 17.3850, lng: 78.4867 });
  const [zoom, setZoom] = useState(10);

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

  return (
    <>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
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
      </Grid>
      <Grid item xs={12} md={6}>
      <Box display="flex"justifyContent='flex-end'>
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
      </Grid>
      </Grid>
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
              placeholder="pole name"
              sx={{ width: "100%"}}
            />
            <CustomTextField
              value={deviceName}      
              placeholder="camera ID"
              sx={{ width: "100%" }}
            />
            <CustomTextField
              value={deviceName}            
              placeholder="latitude"
              sx={{ width: "100%"}}
            />
            <CustomTextField
              value={deviceName}
              placeholder="longitude"
              sx={{ width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} justifyContent='flex-end'>
          <Box
            sx={{ 
              paddingTop: '16px',
              display: 'flex',
              flexDirection: 'column',
              height: '90vh' 
            }}
          >
            <CustomMapContainer latitude={latitude} longitude={longitude} defaultCenter={defaultCenter} zoom={zoom}  />
          </Box>
        </Grid>
      </Grid>
      </>
  );
};

export default EditDevices;
