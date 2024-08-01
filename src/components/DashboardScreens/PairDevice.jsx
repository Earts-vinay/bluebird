import React from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme, IconButton, Breadcrumbs, Stack } from '@mui/material';
import CustomSearch from '../../utils/CustomSearch';
import CustomMapContainer from '../../utils/CustomMapContainer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomButton from '../../utils/CustomButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomTextField from '../../utils/CustomTextfield';
import DefaultTable from '../../utils/DefaultTable';

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
];

const tableHeadings = ['Cameras', 'IP Address', 'Network Type', 'Camera Type', 'Camera Status', 'Actions'];
const columns = ['cameras', 'ipAddress', 'networkType', 'cameraType', 'cameraStatus', 'pairing'];
const rows = [
    { cameras: "Ikea Test 01", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 02", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 03", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 04", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 05", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 06", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 07", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 07", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 07", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 07", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 07", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },
    { cameras: "Ikea Test 07", ipAddress: '10.119.24.86', networkType: 'RSTP', cameraType: 'Entry', cameraStatus: 'Paired', pairing: ['pair', 'unpair'] },

];

const PairDevice = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleGoBack = () => {
        navigate(-1);
    };

    const getPairButtons = (pairing) => {
        return (
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                {pairing.includes('pair') && (
                    <CustomButton variant='outlined'>Pair</CustomButton>
                )}
                {pairing.includes('unpair') && (
                    <CustomButton variant='outlined'>Unpair</CustomButton>
                )}
            </div>
        );
    };
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, flexDirection: isSmallScreen ? 'column' : 'row' }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box onClick={handleGoBack} className="backButtonStyle">
                        <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
                    </Box>
                    <Typography variant="h6" sx={{ marginBottom: isSmallScreen ? 2 : 0, color: "rgba(24, 123, 205, 1)" }}>Discover Devices </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomSearch />

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
            <Box pt={3}>
                <DefaultTable tableHeadings={tableHeadings} columns={columns} rows={rows} getPairButtons={getPairButtons} />
            </Box>
        </>
    );
};

export default PairDevice;

