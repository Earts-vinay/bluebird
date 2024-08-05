import React, { useState } from "react";
import DefaultTable from "../../utils/DefaultTable";
import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import { styled } from "@mui/system";

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
      <div style={{ display: 'flex',gap:"10px",alignItems:"center" }}>
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
          <AntSwitch
            checked={isChecked}
            onChange={() => handleSwitchToggleClick(rowIndex, column)}
            color="primary"
          />
        }
        label={
          <Typography sx={{ color: isChecked ? '#013A6F' : '#A0A0A0', marginLeft:"10px" }}>
            {isChecked ? 'Active' : 'Inactive'}
          </Typography>
        }
        labelPlacement="end"
      />
    );
  };


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

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
