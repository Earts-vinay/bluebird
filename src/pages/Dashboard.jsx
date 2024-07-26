import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, useMediaQuery, useTheme } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import CustomSearch from '../utils/CustomSearch';

const tableData = [
  { id: 1, name: 'Item 1', description: 'Description 1' },
  { id: 2, name: 'Item 2', description: 'Description 2' },
  { id: 3, name: 'Item 3', description: 'Description 3' },
  { id: 4, name: 'Item 4', description: 'Description 4' },
];

const markers = [
  { id: 1, position: { lat: 17.385044, lng: 78.486671 } },
  { id: 2, position: { lat: 17.391044, lng: 78.486671 } },
  { id: 3, position: { lat: 17.387044, lng: 78.486671 } },
  { id: 4, position: { lat: 17.389044, lng: 78.486671 } },
  { id: 5, position: { lat: 17.383044, lng: 78.486671 } },
];

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 17.385044,
  lng: 78.486671,
};

const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2, flexDirection: isSmallScreen ? 'column' : 'row' }}>
        <Typography variant="h4" sx={{ marginBottom: isSmallScreen ? 2 : 0 }}>Dashboard</Typography>
        <CustomSearch />
      </Box>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Table with Dummy Content</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Map with Default Locations</Typography>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
            >
              {markers.map((marker) => (
                <Marker key={marker.id} position={marker.position} />
              ))}
            </GoogleMap>
          </LoadScript>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
