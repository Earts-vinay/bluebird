import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box, Stack, Breadcrumbs, useMediaQuery } from '@mui/material';
import SetUpDevice from './SetUp';
import PairingDevice from './PairingDevice';
import AddLinePolygon from './AddLinePolygon';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from '@emotion/react';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomButton from '../../../utils/CustomButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { FaDotCircle } from "react-icons/fa";

const steps = ['Pair device', 'Set-up device', 'Add line / polygon'];
const breadcrumbs = [
    <NavLink
        key="1"
        style={{ textDecoration: 'none', color: '#7A9AAE', fontSize: "14px" }}
        to="/dashboard"
    >
        Dashboard
    </NavLink>,
    <NavLink
        key="2"
        style={{ textDecoration: 'none', color: '#187BCD', fontSize: "14px" }}
        to="/dashboard/propertydetail"
    >
        Property Details
    </NavLink>,
    <NavLink
        key="3"
        style={{ textDecoration: 'none', color: '#187BCD', fontSize: "14px" }}
        to="/dashboard/discoverdevice"
    >
        Discover Devices
    </NavLink>,
    <NavLink
        key="4"
        style={{ textDecoration: 'none', color: '#187BCD', fontSize: "14px" }}
        to="/dashboard/devicesetup"
    >
        Pair a device
    </NavLink>,
];

function DeviceSetUp() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [currentScreen, setCurrentScreen] = useState(0); // State for screen index
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const CustomStepIcon = (props) => {
        const { active, completed, icon } = props;

        return (
            <>
                {completed ? (
                    <FaDotCircle color='FE9A84' fontSize={25} />
                ) : (
                    active ? <FaDotCircle color='FE9A84' fontSize={25} /> : <FaDotCircle color='BFC0C0' fontSize={25} />
                )}
            </>
        );
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleNext = () => {
        if (activeStep === 2) {
            if (currentScreen < 1) {
                setCurrentScreen(currentScreen + 1);
            } else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                setCurrentScreen(0); // Reset screen index when moving to the next step

                // Redirect to device detail page when the last step is completed
                navigate('/devices/devicedetails');
            }
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep === 2) {
            if (currentScreen > 0) {
                setCurrentScreen(currentScreen - 1);
            } else {
                setActiveStep((prevActiveStep) => prevActiveStep - 1);
            }
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <PairingDevice />;
            case 1:
                return <SetUpDevice />;
            case 2:
                return <AddLinePolygon />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: isSmallScreen ? 'column' : 'row' }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box onClick={handleGoBack} className="backButtonStyle">
                        <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
                    </Box>
                    <Typography variant="h6" sx={{ marginBottom: isSmallScreen ? 2 : 0, color: "rgba(24, 123, 205, 1)" }}>
                        Pair a device
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomButton variant='outlined' disabled={activeStep === 0} onClick={handleBack}>
                        Cancel
                    </CustomButton>
                    <CustomButton onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Save'}
                    </CustomButton>
                </Box>
            </Box>
            <Stack spacing={2} px={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="14px" color='#7A9AAE' />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

            {/* Stepper begins */}

            <Box sx={{ display: 'flex', flexDirection: 'column', height: '86.28vh' }}>
                <Box sx={{
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    borderRadius: "10px",
                    paddingY: "15px",
                    margin: "20px",
                    position: 'fixed',
                    width: '80%', // Adjust width to account for margins
                    zIndex: 1000
                }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => (
                            <Step key={index}>
                                <StepLabel StepIconComponent={CustomStepIcon}>{index + 1}. {label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <Box sx={{
                    marginTop: '120px', // Adjust this value based on the height of the Stepper
                    overflowY: 'auto',
                    flexGrow: 1,
                    padding: '20px'
                }}>
                    {activeStep === steps.length ? (
                        <Box>
                            <Typography>All steps completed</Typography>
                        </Box>
                    ) : (
                        <Box>
                            {getStepContent(activeStep)}
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
}

export default DeviceSetUp;
