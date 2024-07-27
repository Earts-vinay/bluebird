import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Devices from './pages/Devices';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Sidenav from './components/Sidenav';
import DeviceDetails from './components/DevicesManagement/DeviceDetails';
import EditDevices from "./components/DevicesManagement/EditDevices";

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            background: 'linear-gradient(87deg, #FFFFFF 0%, #F1FAFF 100%)',
            height:"92vh"
          }}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/devices/devicedetails" element={<DeviceDetails />} />
            <Route path="/devices/editdevice" element={<EditDevices />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
