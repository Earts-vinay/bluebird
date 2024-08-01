import React from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme, IconButton, Breadcrumbs, Stack } from '@mui/material';
import CustomSearch from '../../utils/CustomSearch';
import CustomMapContainer from '../../utils/CustomMapContainer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomButton from '../../utils/CustomButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomTextField from '../../utils/CustomTextfield';

const breadcrumbs = [
    <NavLink 
      key="1" 
      style={{ textDecoration: 'none', color: '#7A9AAE',fontSize:"14px" }} 
      to="/dashboard"
    >
      Dashboard
    </NavLink>,
    <NavLink 
      key="2" 
      style={{ textDecoration: 'none', color: '#187BCD',fontSize:"14px" }} 
      to="/dashboard/propertydetail"
    >
      Property Details
    </NavLink>,
    <NavLink 
    key="2" 
    style={{ textDecoration: 'none', color: '#187BCD',fontSize:"14px" }} 
    to="/dashboard/addpole"
  >
    Add Pole
  </NavLink>,
  ];

const markers = [
    { id: 1, latitude: 17.385044, longitude: 78.486671 },
    { id: 2, latitude: 17.391044, longitude: 78.486671 },
    { id: 3, latitude: 17.387044, longitude: 78.486671 },
    { id: 4, latitude: 17.389044, longitude: 78.486671 },
    { id: 5, latitude: 17.383044, longitude: 78.486671 },
];


const center = {
    lat: 17.385044,
    lng: 78.486671,
};

const AddPole = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleGoBack = () => {
        navigate(-1);
    };
    const handleSave = () => {
        navigate("/dashboard/propertydetail")
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, flexDirection: isSmallScreen ? 'column' : 'row' }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box onClick={handleGoBack} className="backButtonStyle">
                        <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
                    </Box>
                    <Typography variant="h6" sx={{ marginBottom: isSmallScreen ? 2 : 0, color: "rgba(24, 123, 205, 1)" }}>Add New Pole</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomSearch />
                    <CustomButton variant='outlined' onClick={handleGoBack}>Cancel</CustomButton>
                    <CustomButton onClick={handleSave}>Save</CustomButton>
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
            <Grid container spacing={2} sx={{ padding: 2 }}>
                <Grid item xs={12} md={6}>
                    <CustomTextField fullwidth label="Property Name"/>
                    <CustomTextField fullwidth label="Pole Name"/>
                    <CustomTextField fullwidth label="Latitude"/>
                    <CustomTextField fullwidth label="Longitude"/>
                </Grid>
                <Grid item xs={12} md={6} >
                    <CustomMapContainer defaultCenter={center} markers={markers} zoom={16} height='75vh' />
                    <Typography variant="body2" sx={{ padding: 2 }}>
                      You can mark your location on the map accurately by clicking on the map.  
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default AddPole;

