import React from 'react';
import { CssBaseline, Box, createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Devices from './pages/Devices';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Sidenav from './components/Sidenav';
import DeviceDetails from './components/DevicesManagement/DeviceDetails';
import PropertyDetail from './components/DashboardScreens/PropertyDetail';
import AddPole from './components/DashboardScreens/AddPole';
import PairDevice from './components/DashboardScreens/DiscoverDevice';
import DeviceSetUp from './components/DashboardScreens/ParingScreens/DeviceSetUp';
import ForgotPassword from './components/login/ForgotPassword';
import Login from './pages/Login';
import EditSettings from './components/SettingsManagement/EditSettings';
import Detection from './components/SettingsManagement/Detection';
import Notification from './components/SettingsManagement/Notification';
import Database from './components/SettingsManagement/Database';
import DiscoverDevice from './components/DashboardScreens/DiscoverDevice';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 300,
  },
});

const AppContent = () => {
  const location = useLocation();

  const showSidebar = !['/login', '/test', '/forgot-password'].includes(location.pathname);

  return (
    <Box sx={{ display: 'flex' }}>
      {showSidebar && <Sidenav />}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 3,
          py: 2.5
        }}
      >
        <Routes>
          {/* Dashboard */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/propertydetail" element={<PropertyDetail />} />
          <Route path="/dashboard/addpole" element={<AddPole />} />
          <Route path="/dashboard/discoverdevice" element={<DiscoverDevice />} />
          {/* Devices */}
          <Route path="/devices" element={<Devices />} />
          <Route path="/dashboard/devicesetup" element={<DeviceSetUp />} />
          <Route path='/settings/editsettings' element={<EditSettings />} />
            <Route path='/settings/detection' element={<Detection/>} />
            <Route path='/settings/notification' element={<Notification/>} />
            <Route path='/settings/notification' element={<Notification/>} />
            <Route path="/devices/database" element={<Database />} />
          <Route path="/devices/devicedetails" element={<DeviceDetails />} />
          {/* Users */}
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
