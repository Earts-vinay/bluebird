import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, Button, Stack, Breadcrumbs } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomButton from '../../utils/CustomButton';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from '@mui/material/Link';
import CustomActiveStepIcon from '../../utils/CustomActiveStepIcon';
import CustomConnector from '../../utils/CustomConnector'; 

const steps = [
  { label: '1.Pair device', icon: '/assets/icons/steperactive.svg' , description: 'Add devices details and save.'},
  { label: '2.Set-up device', icon: '/assets/icons/steperactive.svg', description:'Set the camera angle using the joystick' },
  { label: '3.Add line/polygon', icon: '/assets/icons/steperactive.svg',description:'Click on Add line/Add polygon to set you angle on the camera view.' },
  { label: '4.Finish set-up', icon: '/assets/icons/steperactive.svg',description:'Done adding line/polygon? Now click on Finish to complete set-up' },
];

const breadcrumbs = [
  <Link underline="hover" key="1" color="#7A9AAE" href="/dashboard">
    Dashboard
  </Link>,
  <Link underline="hover" key="2" color="#7A9AAE" href="/devices/devicedetails">
    Property details
  </Link>,
  <Link underline="hover" key="3" color="#7A9AAE" href="/devices/devicedetails">
    Discover devices
  </Link>,
  <Link underline="hover" key="4" color="#187BCD" href="/devices/devicedetails">
    Pair a device
  </Link>,
];

const AddLinePolygon = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handleFinish = () => {
    console.log("Finish button clicked");
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display="flex" flexDirection="column" alignItems="stretch">
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
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
                <Typography variant="h6" ml={2} sx={{ color: "#3275AF", fontSize: "18px" }}>
                  Add line / polygon
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <CustomButton
                  label="Cancel"
                  onClick={handleCancel}
                  sx={{ marginRight: '10px', color:"#7A9AAE", backgroundColor:"white", textTransform: 'none', borderRadius:"10px", paddingRight:"20px", paddingLeft:"20px" }}
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  label="Finish"
                  onClick={handleFinish}
                  sx={{ color:"white", backgroundColor:"#187BCD", textTransform: 'none', borderRadius:"10px" }}
                >
                  Finish
                </CustomButton>
              </Box>
            </Box>
            <Stack spacing={2} pt={"15px"} pb={"10px"}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" color='#7A9AAE' />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
            <Box sx={{border:"2px solid #8080801a", backgroundColor:"white"}} >
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              connector={<CustomConnector />}
            >
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    StepIconComponent={() => <CustomActiveStepIcon icon={step.icon} />}
                  >
                    {step.label}
                  </StepLabel>
                    <Box sx={{  ml:10,mb:"10px" }}>
                      <Typography sx={{color:"#7A9AAE",fontSize:"10px"}}>{step.description}</Typography>
                    </Box>
                </Step>
              ))}
            </Stepper>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AddLinePolygon;
