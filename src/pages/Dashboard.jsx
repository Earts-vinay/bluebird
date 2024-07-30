import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, useMediaQuery, useTheme, IconButton } from '@mui/material';
import CustomSearch from '../utils/CustomSearch';
import MapComponent from '../utils/MapComponent';
import CustomMapContainer from '../utils/CustomMapContainer';

const tableData = [
  { id: 1, name: 'Super market 01', location: 'Virginia, USA', poles: 5 },
  { id: 2, name: 'Super market 01', location: 'Virginia, USA', poles: 5 },
  { id: 3, name: 'Super market 01', location: 'Virginia, USA', poles: 5 },
  { id: 4, name: 'Super market 01', location: 'Virginia, USA', poles: 5 },
  { id: 5, name: 'Super market 01', location: 'Virginia, USA', poles: 5 },
];

const markers = [
  { id: 1,  latitude: 17.385044, longitude: 78.486671} ,
  { id: 2,  latitude: 17.391044, longitude: 78.486671 },
  { id: 3, latitude: 17.387044, longitude: 78.486671  },
  { id: 4, latitude: 17.389044, longitude: 78.486671  },
  { id: 5,  latitude: 17.383044, longitude: 78.486671  },
];

const center = {
  lat: 17.385044,
  lng: 78.486671,
};

const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1, flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ justifyContent: "center", display: "flex", p: 1, width: '30px', backgroundColor: '#000', borderRadius: '50%', }}><img src="/assets/icons/dashboard.svg" alt="dashboard icon" /></Box>
          <Typography variant="h6" sx={{ marginBottom: isSmallScreen ? 2 : 0 }}>Dashboard</Typography>
        </Box>
        <CustomSearch />
      </Box>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} md={6}>
          <TableContainer component={Paper} sx={{boxShadow: "none"}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{width:"60%"}}>Property name</TableCell>
                  <TableCell>Poles</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow 
                    key={row.id}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(233, 244, 251, 1)',
                      },
                      border:"none"
                    }}
                  >
                    <TableCell>{row.name}<br /><img src="/assets/icons/location.svg" alt="location icon" />{row.location}</TableCell>
                    <TableCell>{row.poles}</TableCell>
                    <TableCell>
                      <IconButton><img src="/assets/icons/edit.svg" alt="edit icon" /></IconButton>
                      <IconButton><img src="/assets/icons/delete.svg" alt="delete icon" /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomMapContainer defaultCenter={center} markers={markers} zoom={16} />
          <Typography variant="body2" sx={{ padding: 2 }}>
            The dots above show how many poles are on the property.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
