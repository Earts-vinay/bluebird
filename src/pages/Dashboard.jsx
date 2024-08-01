import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, useMediaQuery, useTheme, IconButton } from '@mui/material';
import CustomSearch from '../utils/CustomSearch';
import MapComponent from '../utils/MapComponent';
import CustomMapContainer from '../utils/CustomMapContainer';
import DefaultTable from '../utils/DefaultTable';
import { useNavigate } from 'react-router-dom';


const EditIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit.svg';
const DeleteIconUrl = process.env.PUBLIC_URL + '/assets/icons/delete.svg';

const tableHeadings = ['Property Name', 'Poles',"Actions"];
const columns = ['propertyName', 'poles','action'];
const rows = [
  {  propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },
  { propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },
  { propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },
  { propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },
  { propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },
  { propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },
  { propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },
  { propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },
  { propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },
  { propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },
  { propertyName: 'Super market 01', propertyLocation: 'Virginia, USA', poles: 5,action: ['editIcon', 'deleteIcon'] },

];

const markers = [
  { id: 1,  latitude: 17.385044, longitude: 78.486671} ,
  { id: 2,  latitude: 17.391044, longitude: 78.486671 },
  { id: 3, latitude: 17.387044, longitude: 78.486671  },
  { id: 4, latitude: 17.389044, longitude: 78.486671  },
  { id: 5,  latitude: 17.383044, longitude: 78.486671  },
];
const getActionIcons = (action) => {
  return (
    <div >
      {action.includes('editIcon') && (
          <Box component="img" src={EditIconUrl} alt="person Icon" sx={actions} />
      )}
      {action.includes('deleteIcon') && (
           <Box component="img"  src={DeleteIconUrl} alt="vehicle Icon" sx={actions} />
      )}
    </div>
  );
};

const center = {
  lat: 17.385044,
  lng: 78.486671,
};

const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleRowClick = (index) => {
    navigate("/dashboard/propertydetail")

  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{  }} className="backButtonStyle"><img src="/assets/icons/dashboard.svg" alt="dashboard icon" width={20}/></Box>
          <Typography variant="h6" sx={{ marginBottom: isSmallScreen ? 2 : 0, color:"rgba(24, 123, 205, 1)" }}>Dashboard</Typography>
        </Box>
        <CustomSearch />
      </Box>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} md={6}>
         <DefaultTable columns={columns} rows={rows} tableHeadings={tableHeadings} getActionIcons={getActionIcons} onClick={handleRowClick}/>
        </Grid>
        <Grid item xs={12} md={6} >
          <CustomMapContainer defaultCenter={center} markers={markers} zoom={16} height='75vh'/>
          <Typography variant="body2" sx={{ padding: 2 }}>
            The dots above show how many poles are on the property.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

// Styles
const actions = {
  width: '16px',
  height: '16px',
  padding:"10px",
  cursor:"pointer",
  marginRight: '4px',
  '&:hover': {
    backgroundColor: 'rgba(170, 216, 253, 1)',
    borderRadius:"10px",
  },
}