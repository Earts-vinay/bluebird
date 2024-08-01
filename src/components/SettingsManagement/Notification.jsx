import React from 'react';
import DefaultTable from "../../utils/DefaultTable";
import { Box, Typography } from "@mui/material";

const EditIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit.svg';
const DeleteIconUrl = process.env.PUBLIC_URL + '/assets/icons/delete.svg';

const tableHeadings = ['Rule Type', 'Location', 'Schedule', 'Time', 'Action'];
const notificationColumns = ['ruleType', 'location', 'schedule', 'time', 'action'];
const notificationRows = [
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon', 'Tue'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
];


const formatSchedule = (schedule) => {
  return schedule.map((day, index) => (
    <Box
      key={index}
      sx={{
       display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1167B1',
        color: 'white',
        borderRadius: '50%', 
        width: '24px', 
        height: '24px',
        fontSize: '10px',
        textAlign: 'center',
        margin: '2px',
        padding: '4px',
      }}
    >
      {day}
    </Box>
  ));
};

const Notification = ({onEdit, onDelete}) => {

  const getActionIcons = (actions) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {actions.includes('editIcon') && (
          <Box component="img" src={EditIconUrl} alt="Edit Icon" sx={actionsStyle} onClick={onEdit} />
        )}
        {actions.includes('deleteIcon') && (
          <Box component="img" src={DeleteIconUrl} alt="Delete Icon" sx={actionsStyle} onClick={onDelete} />
        )}
      </div>
    );
  };
  

  const handleActionClick = (rowIndex, actions) => {
    // Implement action handling based on actions array
    if (actions.includes('editIcon')) {
      onEdit(rowIndex);
    }
    if (actions.includes('deleteIcon')) {
      onDelete(rowIndex);
    }
  };
  return (
    <Box>
    
      <DefaultTable
        columns={notificationColumns}
        rows={notificationRows}
        tableHeadings={tableHeadings}
        getActionIcons={(actions) => getActionIcons(actions)} 
        getFormattedSchedule={formatSchedule}
        onClick={handleActionClick}
      />
    </Box>
  );
};

export default Notification;

const actionsStyle = {
  width: '16px',
  height: '16px',
  padding: '10px',
  cursor: 'pointer',
  marginRight: '4px',
  '&:hover': {
    backgroundColor: 'rgba(170, 216, 253, 1)',
    borderRadius: '10px',
  },
};
