import React, { useState } from 'react';
import DefaultTable from "../../utils/DefaultTable";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import CustomDeleteDialog from '../../utils/CustomDeleteDialog';
import CustomDialog from '../../utils/CustomDialog';
import CustomTextField from '../../utils/CustomTextfield';
import CustomDropdown from '../../utils/CustomDropdown';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';


const EditIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit.svg';
const DeleteIconUrl = process.env.PUBLIC_URL + '/assets/icons/delete.svg';
const tableHeadings = ['Rule Type', 'Location', 'Schedule', 'Time', 'Action'];
const notificationColumns = ['ruleType', 'location', 'schedule', 'time', 'action'];
const notificationRows = [
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon', 'Tue'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },
  { ruleType: 'Sample_rule', location: 'Virginia USA', schedule: ['Mon'], time: "07:20:00 - 09:00:00", action: ['editIcon', 'deleteIcon'] },

];


const formatSchedule = (schedule) => {
  return schedule.map((day, index) => (
    <Box key={index} sx={schedule1}>
      {day}
    </Box>
  ));
};

const Notification = ({ modalOpen, handleModalClose }) => {
  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleOpenEditPopup = () => {
    setEditPopup(true)
  }
  const handleSave = () => {
    ""
  }
  const handleDelete = () => {
    setDeletePopup(true)
  }
  const handleEditClose = () => {
    setEditPopup(false)
    handleModalClose()

  }
  const handleClose = () => {
    setDeletePopup(false)
  }

  const getActionIcons = (actions) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {actions?.includes('editIcon') && (
          <Box component="img" src={EditIconUrl} alt="Edit Icon" sx={actionsStyle} onClick={handleOpenEditPopup} />
        )}
        {actions?.includes('deleteIcon') && (
          <Box component="img" src={DeleteIconUrl} alt="Delete Icon" sx={actionsStyle} onClick={handleDelete} />
        )}
      </div>
    );
  };
  return (
    <Box>
      <DefaultTable
        columns={notificationColumns}
        rows={notificationRows}
        tableHeadings={tableHeadings}
        getActionIcons={(actions) => getActionIcons(actions)}
        getFormattedSchedule={formatSchedule}
      />
      <CustomDialog open={modalOpen || editPopup} handleClose={handleEditClose} onClick={handleSave} title="Add Notification">
        <CustomTextField label="Rule Name" />
        <Box py={1}>
          <Typography pb={1} sx={{ color: '#013A6F', textAlign: "start" }}>Select Days*</Typography>
          <Box display="flex" gap={1} alignItems="start" mb="8px">
            {['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'].map((day) => (
              <Button
                key={day}
                variant={selectedDays.includes(day) ? "contained" : "outlined"}
                sx={{ borderRadius: '50%', minWidth: 36, height: 36, p: 0, textTransform: "capitalize" }}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </Button>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "10px" }}>
          {['Start Time *', 'End Time *'].map((label, index) => (
            <LocalizationProvider key={label} dateAdapter={AdapterDayjs}>
              <TimePicker
                label={label}
                value={index === 0 ? (startTime ? dayjs(startTime, 'HH:mm:ss') : null) : (endTime ? dayjs(endTime, 'HH:mm:ss') : null)}
                onChange={(newValue) => index === 0 ? setStartTime(newValue ? newValue.format('HH:mm:ss') : null) : setEndTime(newValue ? newValue.format('HH:mm:ss') : null)}
                required
                error={index === 0 ? !startTime : !endTime}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={index === 0 ? !startTime : !endTime}
                    helperText={index === 0 ? (!startTime ? 'Start Time is required' : '') : (!endTime ? 'End Time is required' : '')}
                  />
                )}
                viewRenderers={{ hours: renderTimeViewClock, minutes: renderTimeViewClock, seconds: renderTimeViewClock }}
              />
            </LocalizationProvider>
          ))}
        </Box>

        <CustomDropdown label="Receivers Emails">
          {[10, 20, 30].map(value => <MenuItem key={value} value={value}>{value}</MenuItem>)}
        </CustomDropdown>
      </CustomDialog>

      <CustomDeleteDialog open={deletePopup} handleClose={handleClose} handleDelete={handleDelete} title="Do you want to delete the notification?" content="Please confirm to delete the notification." confirmText="Delete" cancelText="Cancel" />

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

const schedule1 = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1167B1',
  color: 'white',
  borderRadius: '50%',
  width: '24px',
  height: '24px',
  fontSize: '12px',
  textAlign: 'center',
  margin: "5px",
  padding: '8px',
}
