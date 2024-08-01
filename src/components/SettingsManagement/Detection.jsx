import React, { useState } from "react";
import DefaultTable from "../../utils/DefaultTable";
import { Box, FormControlLabel, Switch, Typography } from "@mui/material";

const tableHeadings = ['Detection type', 'Raise Alerts', 'Status'];
const settingcolumns = ['detectionType', 'raiseAlertsToggle', 'status'];
const initialRows = [
  { detectionType: 'person', raiseAlertsToggle: 'active', status: 'Inactive' },
  { detectionType: 'vehicle', raiseAlertsToggle: 'Inactive', status: 'active' },
  { detectionType: 'plate', raiseAlertsToggle: 'Inactive', status: 'active' }
];

const Detection = () => {
  const [rows, setRows] = useState(initialRows);
  const PersonIconUrl = process.env.PUBLIC_URL + '/assets/icons/person.svg';
  const VehicleIconUrl = process.env.PUBLIC_URL + '/assets/icons/car.svg';
  const PlateIconUrl = process.env.PUBLIC_URL + '/assets/icons/plate.svg';

  const handleSwitchToggleClick = (rowIndex, column) => {
    const newRows = [...rows];
    if (column === 'raiseAlertsToggle') {
      newRows[rowIndex].raiseAlertsToggle = newRows[rowIndex].raiseAlertsToggle === 'active' ? 'Inactive' : 'active';
    } else if (column === 'status') {
      newRows[rowIndex].status = newRows[rowIndex].status === 'active' ? 'Inactive' : 'active';
    }
    setRows(newRows);
  };

  const getDetectionIcons = (detectionType) => {
    const iconUrl = 
      detectionType === 'person' ? PersonIconUrl : 
      detectionType === 'vehicle' ? VehicleIconUrl : 
      PlateIconUrl;

    const label = detectionType === 'person' ? 'Person Detection' : detectionType === 'vehicle' ? 'Vehicle Detection' : 'Plate Detection';

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src={iconUrl} 
          alt={`${detectionType} Icon`} 
          style={{ width: 22, height: 22, marginRight: 8, marginTop: 2 }} 
        />
        <span>{label}</span>
      </div>
    );
  };

  const renderSwitch = (row, rowIndex, column) => {
    const isChecked = column === 'raiseAlertsToggle' ? row.raiseAlertsToggle === 'active' : row.status === 'active';

    return (
      <FormControlLabel
        control={
          <Switch
            checked={isChecked}
            onChange={() => handleSwitchToggleClick(rowIndex, column)}
            sx={getSwitchStyles(isChecked)}
          />
        }
        label={
          <Typography sx={{ color: isChecked ? '#013A6F' : '#A0A0A0' }}>
            {isChecked ? 'Active' : 'Inactive'}
          </Typography>
        }
        labelPlacement="end"
      />
    );
  };

  const getSwitchStyles = (isChecked) => ({
    '.MuiSwitch-switchBase.Mui-checked': {
      color: '#187BCD',
      '&:hover': {
        backgroundColor: 'rgba(24, 123, 205, 0.1)',
      },
    },
    '.MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#187BCD',
    },
    '.MuiSwitch-switchBase': {
      color: '#A0A0A0',
    },
    '.MuiSwitch-track': {
      backgroundColor: '#A0A0A0',
    },
    ...(isChecked && {
      '.MuiSwitch-switchBase': {
        color: '#187BCD',
      },
      '.MuiSwitch-track': {
        backgroundColor: '#187BCD',
      },
    }),
  });

  return (
    <Box>
      <DefaultTable
        columns={settingcolumns}
        rows={rows}
        tableHeadings={tableHeadings}
        getDetectionIcons={getDetectionIcons}
        onClick={handleSwitchToggleClick}
        renderSwitch={renderSwitch}
      />
    </Box>
  );
};

export default Detection;
