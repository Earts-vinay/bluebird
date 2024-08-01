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
import EditDevices from "./components/DevicesManagement/EditDevices";
import AddLinePolygon from './components/DevicesManagement/AddLinePolygon';
import PropertyDetail from './components/DashboardScreens/PropertyDetail';
import AddPole from './components/DashboardScreens/AddPole';
import PairDevice from './components/DashboardScreens/PairDevice';
import ForgotPassword from './components/login/ForgotPassword';
import Login from './pages/Login';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 300,
  },
});

const AppContent = () => {
  const location = useLocation();

  const showSidebar = !['/', '/test', '/forgot-password'].includes(location.pathname);

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
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/propertydetail" element={<PropertyDetail />} />
          <Route path="/dashboard/addpole" element={<AddPole />} />
          <Route path="/dashboard/pairdevice" element={<PairDevice />} />
          {/* Devices */}
          <Route path="/devices" element={<Devices />} />
          <Route path="/devices/devicedetails" element={<DeviceDetails />} />
          <Route path="/devices/editdevice" element={<EditDevices />} />
          {/* Users */}
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/devices/addline-polygon" element={<AddLinePolygon />} />
        </Routes>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
