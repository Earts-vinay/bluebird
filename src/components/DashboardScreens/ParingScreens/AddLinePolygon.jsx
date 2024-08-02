import { Grid, MenuItem, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import DefaultTable from '../../../utils/DefaultTable'
import { Box } from '@mui/system';
import CustomButton from '../../../utils/CustomButton';
import CustomTextField from '../../../utils/CustomTextfield';
import CustomDropdown from '../../../utils/CustomDropdown';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import AddLine from './Line_PolygonScreens/AddLine';
import AddPolygon from './Line_PolygonScreens/AddPolygon';

const PersonIconUrl = process.env.PUBLIC_URL + '/assets/icons/person.svg';
const VehicleIconUrl = process.env.PUBLIC_URL + '/assets/icons/car.svg';
const PlateIconUrl = process.env.PUBLIC_URL + '/assets/icons/plate.svg';
const EditIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit.svg';
const DeleteIconUrl = process.env.PUBLIC_URL + '/assets/icons/delete.svg';

const tableHeadings = ['Name', 'Line/Polygon', 'Detection', 'Zone', 'Action'];
const columns = ['Name', 'line_polygon',  'detection','zoneName', 'action'];
const rows = [
  { Name: "lineName", line_polygon: 'Line', zoneName: "pole_001", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
  { Name: "lineName", line_polygon: 'Line', zoneName: "pole_001", detection: ['person', 'vehicle', 'plate'], action: ['editIcon', 'deleteIcon'] },
  // ... other rows
];

const AddLinePolygon = () => {
  const [isAdding, setIsAdding] = useState(null); 
 

  const getDetectionIcons = (detections) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: "8px" }}>
        {detections.includes('person') && <img src={PersonIconUrl} alt="person Icon" />}
        {detections.includes('vehicle') && <img src={VehicleIconUrl} alt="vehicle Icon" />}
        {detections.includes('plate') && <img src={PlateIconUrl} alt="plate Icon" />}
      </div>
    );
  };

  const getActionIcons = (action) => {
    return (
      <div>
        {action.includes('editIcon') && (
          <Box component="img" src={EditIconUrl} alt="edit Icon" sx={actions} />
        )}
        {action.includes('deleteIcon') && (
          <Box component="img" src={DeleteIconUrl} alt="delete Icon" sx={actions} />
        )}
      </div>
    );
  };

  const handleAddLineClick = () => setIsAdding('line');
  const handleAddPolygonClick = () => setIsAdding('polygon');

  const handleBack = () => {
     setIsAdding(null);
  }


  return (
    <>
      {isAdding === null && (
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={12} md={5.5}>
            <DefaultTable columns={columns} rows={rows} tableHeadings={tableHeadings} getActionIcons={getActionIcons} getDetectionIcons={getDetectionIcons} />
          </Grid>
          <Grid item xs={12} md={6.5}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
              <img src="/assets/images/sam_image.png" alt="" width="100%" style={{ borderRadius: "10px" }} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", alignItems: "end", pt: 3, gap: 1 }}>
              <CustomButton variant='outlined' onClick={handleAddLineClick}>Add Line</CustomButton>
              <CustomButton variant='outlined' width='auto' onClick={handleAddPolygonClick}>Add Polygon</CustomButton>
            </Box>
          </Grid>
        </Grid>
      )}
      {isAdding === 'line' && (
        <AddLine handleBack={handleBack} getDetectionIcons={getDetectionIcons}  />
      )}
      {isAdding === 'polygon' && (
        <AddPolygon handleBack={handleBack} getDetectionIcons={getDetectionIcons} />
      )}
    </>
  );
};

export default AddLinePolygon;

// Styles
const actions = {
  width: '16px',
  height: '16px',
  padding: "10px",
  cursor: "pointer",
  marginRight: '4px',
  '&:hover': {
    backgroundColor: 'rgba(170, 216, 253, 1)',
    borderRadius: "10px",
  },
}

