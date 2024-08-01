import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box, Stack, Breadcrumbs, useMediaQuery } from '@mui/material';
import FinishSetUp from './FinishSetUp';
import AddLinePolygon from './AddLinePolygon';
import SetUpDevice from './SetUp';
import PairingDevice from './PairingDevice';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTheme } from '@emotion/react';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomSearch from '../../../utils/CustomSearch';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomButton from '../../../utils/CustomButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FaDotCircle } from "react-icons/fa";




const steps = ['Pair device', 'Set-up device', 'Add line/polygon', 'Finish set-up'];
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
        key="2"
        style={{ textDecoration: 'none', color: '#187BCD', fontSize: "14px" }}
        to="/dashboard/pairdevice"
    >
        Discover Devices
    </NavLink>,
    <NavLink
        key="2"
        style={{ textDecoration: 'none', color: '#187BCD', fontSize: "14px" }}
        to="/dashboard/devicesetup"
    >
        Pair a device
    </NavLink>,

];

function DeviceSetUp() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
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
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <PairingDevice />;
            case 1:
                return <SetUpDevice />;
            case 2:
                return <AddLinePolygon />;
            case 3:
                return <FinishSetUp />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, flexDirection: isSmallScreen ? 'column' : 'row' }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box onClick={handleGoBack} className="backButtonStyle">
                        <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
                    </Box>
                    <Typography variant="h6" sx={{ marginBottom: isSmallScreen ? 2 : 0, color: "rgba(24, 123, 205, 1)" }}>Pair a device </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>

                    <CustomButton variant='outlined' disabled={activeStep === 0} onClick={handleBack}>
                        cancel
                    </CustomButton>
                    <CustomButton onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'save'}
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

            <Box sx={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
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
                        <Step>
                            <StepLabel StepIconComponent={CustomStepIcon}>1. Pair device</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={CustomStepIcon}>2. Set-up device</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={CustomStepIcon}>3. Add line/polygon</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={CustomStepIcon}>4. Finish set-up</StepLabel>
                        </Step>
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
