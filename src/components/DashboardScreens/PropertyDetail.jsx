import React from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme, IconButton, Breadcrumbs, Stack } from '@mui/material';
import CustomSearch from '../../utils/CustomSearch';
import CustomMapContainer from '../../utils/CustomMapContainer';
import DefaultTable from '../../utils/DefaultTable';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomButton from '../../utils/CustomButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IoMdAdd } from "react-icons/io";


const EditIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit.svg';
const DeleteIconUrl = process.env.PUBLIC_URL + '/assets/icons/delete.svg';

const tableHeadings = ['Pole Name', 'Lat / Long', 'Cameras', "Actions"];
const columns = ['poleName', 'LatLng', 'cameras', 'action'];
const rows = [
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },
    { poleName: 'Super market 01', LatLng: "37.3585/-121.8768", cameras: 5, action: ['editIcon', 'deleteIcon'] },

];
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
  ];

const markers = [
    { id: 1, latitude: 17.385044, longitude: 78.486671 },
    { id: 2, latitude: 17.391044, longitude: 78.486671 },
    { id: 3, latitude: 17.387044, longitude: 78.486671 },
    { id: 4, latitude: 17.389044, longitude: 78.486671 },
    { id: 5, latitude: 17.383044, longitude: 78.486671 },
];
const getActionIcons = (action) => {
    return (
        <div >
            {action.includes('editIcon') && (
                <Box component="img" src={EditIconUrl} alt="person Icon" sx={actions} />
            )}
            {action.includes('deleteIcon') && (
                <Box component="img" src={DeleteIconUrl} alt="vehicle Icon" sx={actions} />
            )}
        </div>
    );
};

const center = {
    lat: 17.385044,
    lng: 78.486671,
};

const PropertyDetail = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleGoBack = () => {
        navigate(-1);
    };
    const handleAddPole = () => {
        navigate('/dashboard/addpole')
    }
    const handlePair = () => {
        navigate('/dashboard/pairdevice')
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, flexDirection: isSmallScreen ? 'column' : 'row' }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box onClick={handleGoBack} className="backButtonStyle">
                        <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
                    </Box>
                    <Typography variant="h6" sx={{ marginBottom: isSmallScreen ? 2 : 0, color: "rgba(24, 123, 205, 1)" }}>Property Details</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <CustomSearch />
                    <CustomButton variant='outlined' width='auto' onClick={handlePair}><img src="/assets/icons/pairicon.svg" alt="" style={{ paddingRight: "5px", fontSize: "18px" }} />Pair Devices</CustomButton>
                    <CustomButton onClick={handleAddPole} width='auto'><IoMdAdd style={{ paddingRight: "5px", fontSize: "18px" }} />Add New Pole</CustomButton>
                </Box>
            </Box>
            <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="14px" color='#7A9AAE' />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
            <Grid container spacing={2} sx={{ padding: 2 }}>
                <Grid item xs={12} md={6}>
                    <DefaultTable columns={columns} rows={rows} tableHeadings={tableHeadings} getActionIcons={getActionIcons} />
                </Grid>
                <Grid item xs={12} md={6} >
                    <CustomMapContainer defaultCenter={center} markers={markers} zoom={16} height='75vh' />
                    <Typography variant="body2" sx={{ padding: 2 }}>
                        The dots above show how many poles are on the property.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default PropertyDetail;

// Styles
const actions = {
    width: '16px',
    height: '16px',
    padding: "10px",
    cursor: "pointer",
    marginRight: '4px',
    '&:hover': {
        backgroundColor: 'rgba(170, 216, 253, 1)',
        borderRadius: "10px",
    },
}