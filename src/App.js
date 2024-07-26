import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Devices from './pages/Devices';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Sidenav from './components/Sidenav';
import DeviceDetails from './components/DeviceDetails';
import EditDevices from "./components/EditDevices";

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
            background: 'linear-gradient(10deg, #FFFFFF 0%, #F1FAFF 100%)'
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/devicedetails" element={<DeviceDetails />} />
            <Route path="/editdevice" element={<EditDevices />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
