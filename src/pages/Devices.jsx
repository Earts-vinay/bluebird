import React, { useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CustomSearch from '../utils/CustomSearch'; 
import { useNavigate } from 'react-router-dom';
import DefaultTable from '../utils/DefaultTable';

const tableHeadings =['Property Name', 'Raise Alerts', 'Cameras Installed', 'Active Cameras', 'Inactive Cameras',];
const columns = ['propertyName', 'raiseAlerts', 'camerasInstalled', 'activeCameras', 'inactiveCameras', ];
const rows = [
  { propertyName: "Ikea Test 01", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 02", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 03", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 04", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 05", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 06", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' },


];

const Devices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRowIndex, setSelectedRowIndex] = useState(0); 
  const navigate = useNavigate();
  const LocationIconUrl =  process.env.PUBLIC_URL + '/assets/icons/location.svg';
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = rows.filter((item) =>
    item.propertyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGoBack  = () => {
    navigate(-1); 
  };

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);    
    navigate("/devices/devicedetails")
    
  };

  return (
    < >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" >
          <Button
            onClick={handleGoBack }
            sx={{
              borderRadius: '50%',
              width: 35,
              height: 35,
              minWidth: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(233, 244, 251, 1)',
              color: 'white',
              // '&:hover': { backgroundColor: 'darkblue' }
            }}
          >
            <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
          </Button>
          <Typography variant="h6" ml={2} sx={{ color: "#3275AF", fontSize:"18px" }}>
            Devices
          </Typography>
        </Box>
        <CustomSearch
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </Box>

      <Box sx={{pt:4}}>
      <DefaultTable columns={columns} rows={filteredData} tableHeadings={tableHeadings} onClick={handleRowClick}/>
      </Box>
    
    </>
  );
};

export default Devices;
