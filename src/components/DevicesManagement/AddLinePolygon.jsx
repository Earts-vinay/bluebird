import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, Button, Stack, Breadcrumbs, Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomButton from '../../utils/CustomButton';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from '@mui/material/Link';
import CustomSteperIcons from '../../utils/CustomSteperIcons';
import CustomConnector from '../../utils/CustomConnector';

const steps = [
  { label: '1.Pair device', icon1: '/assets/icons/steperactive.svg', description: 'Add devices details and save.' },
  { label: '2.Set-up device', icon1: '/assets/icons/steperactive.svg', description: 'Set the camera angle using the joystick' },
  { label: '3.Add line/polygon', icon3: '/assets/icons/steper-progress.svg', description: 'Click on Add line/Add polygon to set your angle on the camera view.' },
  { label: '4.Finish set-up', icon2: '/assets/icons/steperinactive.svg', description: 'Done adding line/polygon? Now click on Finish to complete set-up' },
];

const sampleData = [
  { name: "Testdata", linePoly: "Line", zone: "Testing"},
  { name: "Testdata", linePoly: "Line", zone: "Testing" },
  { name: "Testdata", linePoly: "Line", zone: "Testing"},
  { name: "Testdata", linePoly: "Line",zone: "Testing"},
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
  const [open, setOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0); 
  const navigate = useNavigate();
  const EditIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit.svg';
  const DeleteIconUrl= process.env.PUBLIC_URL + '/assets/icons/delete.svg';
  const PersonIconUrl =process.env.PUBLIC_URL + '/assets/icons/person.svg';
  const VehicleIconUrl =process.env.PUBLIC_URL + '/assets/icons/car.svg';
  const PlateIconUrl = process.env.PUBLIC_URL + '/assets/icons/plate.svg';
  const SampleImage = process.env.PUBLIC_URL+ '/assets/images/sam_image.png';
  const ResetIconUrl = process.env.PUBLIC_URL + '/assets/icons/reset.svg';
  const EditBackgroundIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit-background.svg'

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handleFinish = () => {
    console.log("Finish button clicked");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" flexDirection="column" alignItems="stretch">
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
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
          <Box sx={{border:"2px solid #8080801a", backgroundColor:"white", mb: 2 }}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              connector={<CustomConnector />}
            >
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel sx={{paddingTop:"10px",paddingLeft:"20px"}}
                    StepIconComponent={() => <CustomSteperIcons icon1={step.icon1} icon2={step.icon2} icon3={step.icon3}/>}
                  >
                    {step.label}
                  </StepLabel>
                  <Box sx={{ ml:10, mb:"10px" }}>
                    <Typography sx={{ color:"#7A9AAE", fontSize:"10px" }}>{step.description}</Typography>
                  </Box>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Grid container spacing={2} sx={{ height: '100%' }}>
            <Grid item xs={12} md={5.5} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ border: "2px solid #8080801a", backgroundColor: "white", flex: 1 }}>
                <TableContainer
                  component={Paper}
                  sx={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '& .MuiTableHead-root': {
                      backgroundColor: '#FDFBEA',
                      color: '#000000',
                      '& th': {
                        padding: '10px 16px',
                        fontWeight: "545",
                        fontSize: '14px',
                        textAlign: 'center',
                        '&:first-of-type': {
                          borderTopLeftRadius: '10px',
                        },
                        '&:last-of-type': {
                          borderTopRightRadius: '10px',
                        },
                      },
                    },
                    '& .MuiTableCell-root': {
                      border: 'none',
                      fontSize: '14px',
                    },
                  }}
                >
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ textAlign: 'center', padding: '10px 16px' }}>Name</TableCell>
                        <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Line/Polygon</TableCell>
                        <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Detection</TableCell>
                        <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Zone</TableCell>
                        <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={7} sx={{ padding: '5px', backgroundColor: 'transparent' }} />
                      </TableRow>
                      {sampleData.map((row, index) => (
                        <TableRow
                          key={index}
                          selected={index === selectedRowIndex}
                          sx={{
                            backgroundColor: index === selectedRowIndex ? '#E9F4FB' : 'inherit',
                            borderRadius: index === selectedRowIndex ? '10px' : '0',
                            marginTop: index === 0 ? '10px' : '0',
                          }}
                        >
                          <TableCell sx={{ padding: '20px 20px', textAlign: 'center', borderRadius: index === 0 ? '10px 0 0 10px' : '0', }} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <Typography sx={{ marginBottom: '4px' }}>{row.name}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>{row.linePoly}</TableCell>
                          <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>
                            <img
                              src={PersonIconUrl}
                              alt="person Icon"
                              style={{ width: '16px', height: '16px', marginRight: '4px' }}
                            />
                            <img
                              src={VehicleIconUrl}
                              alt="car Icon"
                              style={{ width: '16px', height: '16px', marginRight: '4px' }}
                            />
                            <img
                              src={PlateIconUrl}
                              alt="plate Icon"
                              style={{ width: '20px', height: '20px', marginRight: '4px' }}
                            />
                          </TableCell>
                          <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>{row.zone}</TableCell>
                          <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>
                            <Box
                              onClick={(e) => {
                                e.stopPropagation();
                                // editDevices();
                              }}
                              sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                  backgroundColor: '#AAD8FD',
                                  borderRadius: '5px'
                                },
                                padding: '5px'
                              }}
                            >
                              <img
                                src={EditIconUrl}
                                alt="Edit Icon"
                                style={{ width: '20px', height: '16px', marginRight: '4px' }}
                              />
                            </Box>
                            <img
                              src={DeleteIconUrl}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleClickOpen();
                              }}
                              alt="Delete Icon"
                              style={{ width: '20px', height: '16px', marginRight: '4px' }}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
            <Grid item xs={12} md={6.5} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ position: 'relative', border: "2px solid #8080801a", padding: 2, flex: 1 }}>
                {/* Container for image and icons */}
                <Box sx={{ position: 'relative' }}>
                  <img
                    src={SampleImage}
                    alt="Sample Image"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: "white" }}
                  />
                  {/* Icons inside the image */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      display: 'flex',
                    }}
                  >
                    <img
                      src={EditBackgroundIconUrl}
                      alt="Edit Icon"
                      style={{ width: 50, height: 50, cursor: 'pointer' }}
                      onClick={() => console.log("Edit icon clicked")}
                    />
                    <img
                      src={ResetIconUrl}
                      alt="Reset Icon"
                      style={{ width: 50, height: 50, cursor: 'pointer' }}
                      onClick={() => console.log("Reset icon clicked")}
                    />
                  </Box>
                </Box>
                <Box display="flex" justifyContent="flex-end" pt={3}>
                  <CustomButton
                    label="Add Line"
                    onClick={handleCancel}
                    sx={{ marginRight: '10px', color: "#187BCD", backgroundColor: "white", textTransform: 'none', borderRadius: "10px", paddingRight: "20px", paddingLeft: "20px", border: "1px solid #187BCD" }}
                  >
                    Add Line
                  </CustomButton>
                  <CustomButton
                    label="Add Polygon"
                    onClick={handleFinish}
                    sx={{ color: "#187BCD", backgroundColor: "white", textTransform: 'none', borderRadius: "10px", border: "1px solid #187BCD" }}
                  >
                    Add Polygon
                  </CustomButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AddLinePolygon;
