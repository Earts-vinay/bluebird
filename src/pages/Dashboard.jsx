import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, useMediaQuery, useTheme } from '@mui/material';
import CustomSearch from '../utils/CustomSearch';
import MapComponent from '../utils/MapComponent';

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
          <Box sx={{ justifyContent: "center", display: "flex", p: 1, width: '30px', backgroundColor: '#000', borderRadius: '50%', }}><img src="/assets/icons/dashboard.svg" alt="" /></Box>
          <Typography variant="h6" sx={{ marginBottom: isSmallScreen ? 2 : 0 }}>Dashboard</Typography>
        </Box>
        <CustomSearch />
      </Box>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} md={6}>
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
          <MapComponent center={center} markers={markers} zoom={16}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
