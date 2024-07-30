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
  { propertyName: "Ikea Test 07", raiseAlerts: 1, camerasInstalled: 0, activeCameras: 3, inactiveCameras: 1, propertyLocation: 'Virginia, USA.' }
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
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} sx={{ pl: "0px" }}>
        <Box display="flex" alignItems="center" sx={{ pl: "0px" }}>
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
              backgroundColor: '#E2E8F0',
              color: 'white',
              // '&:hover': { backgroundColor: 'darkblue' }
            }}
          >
            <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
          </Button>
          <Typography variant="h6" ml={5} sx={{ color: "#3275AF", fontSize:"18px" }}>
            Devices
          </Typography>
        </Box>
        <CustomSearch
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </Box>

      <DefaultTable columns={columns} rows={filteredData} tableHeadings={tableHeadings} onClick={handleRowClick}/>
      {/* <Box sx={{ marginTop: '46px' }}>
        <TableContainer
          component={Paper}
          sx={{
            border: 'none',
            backgroundColor: 'transparent', 
            boxShadow: 'none', 
            '& .MuiTableHead-root': {
              backgroundColor: '#FDFBEA', 
              color: '#000000', 
              '& th': {
                padding: '10px 16px',
                fontWeight: "545",
                fontSize: '14px',
                textAlign: 'center',
                '&:first-of-type': {
                  borderTopLeftRadius: '10px', 
                },
                '&:last-of-type': {
                  borderTopRightRadius: '10px',
                },
              },
            },
            '& .MuiTableCell-root': {
              border: 'none', 
              fontSize: '12px',
            },
          }}
        >
          <Table>
            <TableHead>
              <TableRow >
                <TableCell sx={{ textAlign: 'center', padding: '10px 16px' }}>Property Name</TableCell>
                <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Raise Alerts</TableCell>
                <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Cameras Installed</TableCell>
                <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Active Cameras</TableCell>
                <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Inactive Cameras</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} sx={{ padding: '5px', backgroundColor: 'transparent' }} />
              </TableRow>
              {filteredData.map((row, index) => (
                <TableRow
                  key={row.propertyName}
                  onClick={() => handleRowClick(index)}
                  selected={index === selectedRowIndex}
                  sx={{
                    backgroundColor: index === selectedRowIndex ? '#E9F4FB' : 'inherit',
                    borderRadius: index === selectedRowIndex ? '10px' : '0',
                    marginTop: index === 0 ? '10px' : '0', // Add margin-top to the first row
                  }}
                >
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography sx={{ marginBottom: '4px' }}>{row.propertyName}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src={LocationIconUrl}
                          alt="Location Icon"
                          style={{ width: '16px', height: '16px', marginRight: '4px' }}
                        />
                        <Typography sx={{ color: "#7A9AAE", fontSize: '13px' }}>
                          {row.propertyLocation}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>{row.raiseAlerts}</TableCell>
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>{row.camerasInstalled}</TableCell>
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>{row.activeCameras}</TableCell>
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>{row.inactiveCameras}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box> */}
    </>
  );
};

export default Devices;
