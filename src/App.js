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
import EditSettings from './components/SettingsManagement/EditSettings';
import Detection from './components/SettingsManagement/Detection';
import Notification from './components/SettingsManagement/Notification';
import Database from './components/SettingsManagement/Database';

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path='/settings/editsettings' element={<EditSettings />} />
            <Route path='/settings/detection' element={<Detection/>} />
            <Route path='/settings/notification' element={<Notification/>} />
            <Route path='/settings/notification' element={<Notification/>} />
            <Route path="/devices/database" element={<Database />} />
            <Route path="/devices/editdevice" element={<EditDevices />} />
            <Route path="/devices/addline-polygon" element={<AddLinePolygon/>} />
          </Routes>
        </Box>
      </Box>
    </Router>
    </ThemeProvider>
  );
}

export default App;
