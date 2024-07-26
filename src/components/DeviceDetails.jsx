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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomSearch from '../utils/CustomSearch'; 
import { useNavigate } from 'react-router-dom';

const sampleData = [
  { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon" },
  { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon" },
  { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon" },
  { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon" },
  { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon" },
  { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon" },
  { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon" }
];

const DeviceDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRowIndex, setSelectedRowIndex] = useState(0); 
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = sampleData.filter((item) =>
    item.cameraName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGoBack  = () => {
    navigate(-1); 
  };


  const handleRowClick = (index) => {
    setSelectedRowIndex(index);    
    navigate("/devicedetails")
  };

  const callDevices = () =>{
    navigate("/devices")
  }

  const editDevices = () =>{
    navigate("/editdevice")
  }

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} sx={{ pl: "0px" }}>
        <Box display="flex" alignItems="center" sx={{ pl: "0px" }}>
          <Button
            onClick={handleGoBack}
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
            }}
          >
            <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
          </Button>
          <Box>
            <Typography variant="h6" ml={5} sx={{ color: "#3275AF", fontSize: "18px" }}>
              Devices Details
            </Typography>
          </Box>
        </Box>
        <CustomSearch
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: 'row' }}> 
        <Typography sx={{ color: "#7A9AAE", fontSize: 14 }}  onClick={callDevices}>Devices</Typography>
        <img
                      src="assets/icons/forward.svg"
                      alt="forward Icon"
                      style={{ width: '8px', height: '8px', marginRight: '4px', paddingLeft: "5px", paddingTop: "6px" }}
                    /> 
        <Typography sx={{ color: "#187BCD", fontSize: 14,marginLeft:"5px" }}> Device details</Typography>
      </Box>
      <Box sx={{ marginTop: '46px' }}>
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
                // Apply border radius to first and last cells
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
              fontSize: '14px',
            },
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: 'center', padding: '10px 16px' }}>Camera Name</TableCell>
                <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Latitude/Longitude</TableCell>
                <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Pole Name</TableCell>
                <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Lines</TableCell>
                <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Polygons</TableCell>
                <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Detection</TableCell>
                <TableCell sx={{ padding: '10px 16px', textAlign: 'center' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={7} sx={{ padding: '5px', backgroundColor: 'transparent' }} />
              </TableRow>
              {filteredData.map((row, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(index)}
                  selected={index === selectedRowIndex}
                  sx={{
                    backgroundColor: index === selectedRowIndex ? '#E9F4FB' : 'inherit',
                    borderRadius: index === selectedRowIndex ? '10px' : '0',
                    marginTop: index === 0 ? '10px' : '0',
                  }}
                >
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center',   borderRadius: index === 0 ? '10px 0 0 10px' : '0',  }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Typography sx={{ marginBottom: '4px' }}>{row.cameraName}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>{row.LatLng}</TableCell>
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>{row.poleName}</TableCell>
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>{row.lines}</TableCell>
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>{row.polygons}</TableCell>
                  <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}>
                    <img
                      src="assets/icons/person.svg"
                      alt="person Icon"
                      style={{ width: '16px', height: '16px', marginRight: '4px' }}
                    /> 
                    <img
                      src="assets/icons/car.svg"
                      alt="car Icon"
                      style={{ width: '16px', height: '16px', marginRight: '4px' }}
                    />
                    <img
                      src="assets/icons/plate.svg"
                      alt="plate Icon"
                      style={{ width: '20px', height: '20px', marginRight: '4px' }}
                    />
                  </TableCell>
                  <TableCell  sx={{ padding: '20px 20px', textAlign: 'center' }}
                  >
                  <Box     onClick={(e) => {
                        e.stopPropagation(); 
                        editDevices();
                      }}
                      sx={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        '&:hover': {
                          backgroundColor: '#AAD8FD',
                          borderRadius: '5px'
                        },
                        padding: '5px' 
                      }}
                    >
                      <img  
                        src="assets/icons/edit.svg"
                        alt="Edit Icon"
                        style={{ width: '20px', height: '16px', marginRight: '4px' }}
                      />
                    </Box>
                    <img
                      src="assets/icons/delete.svg"
                      alt="Delete Icon"
                      style={{ width: '20px', height: '16px', marginRight: '4px' }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default DeviceDetails;
