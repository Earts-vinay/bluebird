import React, { useState } from 'react';
import { Typography, Box, Button} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CustomSearch from '../../utils/CustomSearch';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomDeleteDialog from "../../utils/CustomDeleteDialog";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DefaultTable from '../../utils/DefaultTable';

const DeviceDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const PersonIconUrl = process.env.PUBLIC_URL + '/assets/icons/person.svg';
  const VehicleIconUrl = process.env.PUBLIC_URL + '/assets/icons/car.svg';
  const PlateIconUrl = process.env.PUBLIC_URL + '/assets/icons/plate.svg';
  const EditIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit.svg';
  const DeleteIconUrl = process.env.PUBLIC_URL + '/assets/icons/delete.svg';
  const ForwardIconUrl = process.env.PUBLIC_URL + '/assets/icons/forward.svg';


  const tableHeadings = ['Camera Name', 'Latitude/Longitude', 'Pole Name', 'Lines', 'Polygons', 'Detection', 'Action'];
  const columns = ['cameraName', 'LatLng', 'poleName', 'lines', 'polygons', 'detection', 'action'];
  const rows = [
    { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
    { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
    { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
    { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
    { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
    { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
    { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
    { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
    { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
    { cameraName: "dev_248_cam_0", LatLng: "37.3585/-121.8768", poleName: "pole_001", lines: "Test Line", polygons: "polygon", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },

  ];

  const getDetectionIcons = (detections) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center",gap:"8px" }}>
        {detections.includes('person') && (
          <img src={PersonIconUrl}  alt="person Icon"/>
        )}
        {detections.includes('vehicle') && (
          <img src={VehicleIconUrl} alt="vehicle Icon"/>
        )}
        {detections.includes('plate') && (
          <img src={PlateIconUrl} alt="plate Icon"/>
        )}
      </div>
    );
  };

  const getActionIcons = (action) => {
    return (
      <div >
        {action.includes('editIcon') && (
            <Box component="img" src={EditIconUrl} alt="person Icon" sx={actions} onClick={editDevices}/>
        )}
        {action.includes('deleteIcon') && (
             <Box component="img"  src={DeleteIconUrl} alt="vehicle Icon" sx={actions} onClick={handleClickOpen}/>
        )}
      </div>
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = rows.filter((item) =>
    item.cameraName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGoBack = () => {
    navigate(-1);
  };

  const editDevices = () => {
    navigate("/dashboard/devicesetup")
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
  }
  
  const breadcrumbs = [
    <NavLink 
      key="1" 
      style={{ textDecoration: 'none', color: '#7A9AAE',fontSize:"14px" }} 
      to="/devices"
    >
      Devices
    </NavLink>,
    <NavLink 
      key="2" 
      style={{ textDecoration: 'none', color: '#187BCD',fontSize:"14px" }} 
      to="/devices/devicedetails"
    >
      Devices details
    </NavLink>,
  ];

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Box display="flex" alignItems="center">
          <Box onClick={handleGoBack} className="backButtonStyle">
            <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
          </Box>
          <Typography variant="h6" ml={2} sx={{ color: "#3275AF", fontSize: "18px" }}>
              Devices Details
            </Typography>
        </Box>
        <CustomSearch
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </Box>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="14px" color='#7A9AAE' />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      <Box sx={{ pt: 2 }}>
        <DefaultTable columns={columns} rows={filteredData} tableHeadings={tableHeadings} getDetectionIcons={getDetectionIcons} getActionIcons={getActionIcons} />
      </Box>

      <CustomDeleteDialog
        open={open}
        handleClose={handleClose}
        handleConfirm={handleDelete}
        title="Do you want to delete the device?"
        content="Please confirm to delete the device."
        confirmText="Delete" cancelText="Cancel"
      />
    </>
  );
};

export default DeviceDetails;

// Styles
const actions = {
  width: '16px',
  height: '16px',
  padding:"10px",
  cursor:"pointer",
  marginRight: '4px',
  '&:hover': {
    backgroundColor: 'rgba(170, 216, 253, 1)',
    borderRadius:"10px",
  },
}