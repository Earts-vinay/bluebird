import React from 'react';
import { CssBaseline, Box, createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Devices from './pages/Devices';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Sidenav from './components/Sidenav';
import DeviceDetails from './components/DevicesManagement/DeviceDetails';
import EditDevices from "./components/DevicesManagement/EditDevices";
import AddLinePolygon from './components/DevicesManagement/AddLinePolygon';
import PropertyDetail from './components/DashboardScreens/PropertyDetail';
import AddPole from './components/DashboardScreens/AddPole';
import PairDevice from './components/DashboardScreens/PairDevice';
import DeviceSetUp from './components/DashboardScreens/ParingScreens/DeviceSetUp';


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight:300,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: 3,
            py:2.5
          }}
        >
          <Routes>
             {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/propertydetail" element={<PropertyDetail />} />
            <Route path="/dashboard/addpole" element={<AddPole />} />
            <Route path="/dashboard/pairdevice" element={<PairDevice />} />
            <Route path="/dashboard/devicesetup" element={<DeviceSetUp />} />
            
            {/* Devices */}
            <Route path="/devices" element={<Devices />} />
            <Route path="/devices/devicedetails" element={<DeviceDetails />} />
            <Route path="/devices/editdevice" element={<EditDevices />} />
            {/* Users */}
            <Route path="/users" element={<Users />} />

            <Route path="/settings" element={<Settings />} />
         
            <Route path="/devices/addline-polygon" element={<AddLinePolygon/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
    </ThemeProvider>
  );
}

export default App;
