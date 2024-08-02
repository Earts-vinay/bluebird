import React, { useState } from "react";
import { Box, Button, Typography, Tab, Tabs, TextField, IconButton, Popover, MenuItem, FormControlLabel, Checkbox, } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';
import Detection from "./Detection";
import Database from "./Database";
import Notification from "./Notification";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CustomTextField from '../../utils/CustomTextfield';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import CustomButton from "../../utils/CustomButton";
import { useDropzone } from "react-dropzone";
import CustomDeleteDialog from "../../utils/CustomDeleteDialog";
import CustomSearch from '../../utils/CustomSearch';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const EditSettings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [openNotificationDialog, setOpenNotificationDialog] = useState(false);
  const [openDatabaseDialog, setOpenDatabaseDialog] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [logoFiles, setLogoFiles] = useState([]);
  const [editingNotification, setEditingNotification] = useState(null);
  const [editingDatabase, setEditingDatabase] = useState(null);
  const [open, setOpen] = useState(false);
  const [databseopen, setDatabaseOpen] = useState(false);

  const handleGoBack = () => navigate(-1);

  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const handleAddNotification = () => setOpenNotificationDialog(true);


  const handleEditNotification = (notification) => {
    setEditingNotification(notification);
    setOpenNotificationDialog(true);
  };
  const handleEditDatabase = (database) => {
    setEditingDatabase(database)
    setOpenDatabaseDialog(true)
  }

  const handleCloseNotificationDialog = () => setOpenNotificationDialog(false);

  const handleClosDatabaseDialog = () => setOpenDatabaseDialog(false);

  const handleAddDatabase = () => setOpenDatabaseDialog(true);

  const handleDeleteNotification = () => setOpen(true);

  const handleDeleteDatabase = () => setDatabaseOpen(true);

  const handleClose = () => setOpen(false);

  const handleDatabaseClose = () => setDatabaseOpen(false);

  const handleDelete = () => setOpen(false);

  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const isPopoverOpen = Boolean(anchorEl);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleSelectAll = () => {
    const allEmails = usersData.map(user => user.email);
    setSelectedEmails(allEmails);
  };

  const handleClearAll = () => {
    setSelectedEmails([]);
  };

  const TabPanel = ({ value, index, children }) => (
    <div hidden={value !== index}>
      {value === index && <Box pt={2}>{children}</Box>}
    </div>
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.csv',
    multiple: false,
    onDrop: (acceptedFiles) => {
      setLogoFiles(acceptedFiles);
    },
  });

  const handleEmailSelect = (email) => {
    setSelectedEmails(prevSelectedEmails => {
      if (prevSelectedEmails.includes(email)) {
        return prevSelectedEmails.filter(e => e !== email);
      } else {
        return [...prevSelectedEmails, email];
      }
    });
  };

  const breadcrumbs = [
    <Link component={RouterLink} underline="hover" key="1" color="#7A9AAE" to="/settings">Settings</Link>,
    <Link component={RouterLink} underline="hover" key="2" color="#187BCD" to="/settings/editsettings">Edit Settings</Link>,
  ];

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Box display="flex" alignItems="center" >
        <Box onClick={handleGoBack} className="backButtonStyle">
            <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
          </Box>
          <Box>
            <Typography variant="h6" ml={2} sx={{ color: "#3275AF", fontSize: "18px" }}>
              Settings
            </Typography>
          </Box>
        </Box>

        {selectedTab === 1 ? (
          <CustomButton width="auto" onClick={handleAddNotification}> Add Notification</CustomButton>
        ) : selectedTab === 2 ? (
          <CustomButton width="auto" onClick={handleAddDatabase}> Add Database</CustomButton>
        ) : (
          <CustomSearch value={searchTerm} onChange={handleSearchChange}  />
        )}
      </Box>
      <Stack spacing={2}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" color='#7A9AAE' />} aria-label="breadcrumb" >{breadcrumbs} </Breadcrumbs>
      </Stack>
      <Box mt={3}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{ borderBottom: 'none',  '.MuiTabs-flexContainer': {
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '5px',
            boxShadow: '0 0 5px 0 rgba(36, 101, 233, 0.5)',
            border:"1px solid rgba(193, 233, 254, 1)",
            fontWeight: 'bold',
        }, }}
          TabIndicatorProps={{ style: { display: 'none' } }}
          size="small"
        >
          {['Detection', 'Notification', 'Database'].map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                textTransform: 'capitalize',
                backgroundColor: selectedTab === index && 'rgba(17, 103, 177, 1)',
                color: selectedTab === index && 'white !important',
                width: { xs: '100%', sm: '30%' },
                borderRadius: '5px',
              }}
            />
          ))}
        </Tabs>

        <Box mt={0} sx={{ padding: "0px Important" }}>
          <TabPanel value={selectedTab} index={0}>
            <Detection />
          </TabPanel>
          <TabPanel value={selectedTab} index={1}>
            <Notification onEdit={handleEditNotification} onDelete={handleDeleteNotification} />
          </TabPanel>
          <TabPanel value={selectedTab} index={2}>
            <Database onEditDatabase={handleEditDatabase} onDeleteDatabase={handleDeleteDatabase} />
          </TabPanel>
        </Box>
      </Box>
      
      <BootstrapDialog
        onClose={handleCloseNotificationDialog}
        aria-labelledby="customized-dialog-title"
        open={openNotificationDialog}
      >
        <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#E9F4FB', color: "#013A6F", fontSize: '14px' }} id="customized-dialog-title">     <Typography sx={{ fontSize: "14px", color: "#013A6F", fontWeight: "bold" }}>{editingNotification ? 'Edit Notification' : 'Add Notification'}</Typography> </DialogTitle>
        <IconButton
          aria-label="close" onClick={handleCloseNotificationDialog}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500], }} />
        <DialogContent>
          <CustomTextField sx={{ width: "100%" }} label="Rule Name" required />
          <Box py={1}>
            <Typography pb={1} sx={{ color: '#013A6F' }}>Select Days*</Typography>
            <Box display="flex" gap={1} alignItems="center" marginBottom="8px">
              {['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'].map((day) => (
                <Button
                  key={day}
                  variant={selectedDays.includes(day) ? "contained" : "outlined"}
                  color="primary"
                  style={{ borderRadius: '50%', minWidth: '36px', height: '36px', padding: '0', textTransform: "capitalize" }}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: "10px" }}>
            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Start Time *"
                  value={startTime ? dayjs(startTime, 'HH:mm:ss') : null}
                  onChange={(newValue) => setStartTime(newValue ? newValue.format('HH:mm:ss') : null)}
                  fullWidth
                  margin="dense"
                  size="small"
                  required
                  error={!startTime}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={!startTime}
                      helperText={!startTime ? 'Start Time is required' : ''}
                    />
                  )}
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                />
              </LocalizationProvider>
            </Box>

            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="End Time *"
                  value={endTime ? dayjs(endTime, 'HH:mm:ss') : null}
                  onChange={(newValue) => setEndTime(newValue ? newValue.format('HH:mm:ss') : null)}
                  fullWidth
                  margin="dense"
                  size="small"
                  required
                  error={!endTime}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={!endTime}
                      helperText={!endTime ? 'End Time is required' : ''}
                    />
                  )}
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", paddingTop: "20px", justifyContent: "center" }}>
              <CustomTextField variant="outlined" label="Select Emails" size="small" fullWidth required sx={{ height: "60px" }} value={selectedEmails.join(', ')} onClick={handlePopoverOpen} />
              <Popover open={isPopoverOpen} anchorEl={anchorEl} onClose={handlePopoverClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                transformOrigin={{ vertical: 'top', horizontal: 'left', }} >
                <Box sx={{ minWidth: '200px', maxHeight: '400px', overflowY: 'auto' }}>
                  <div style={{ margin: "10px", display: "flex", gap: "10px" }}>
                    <CustomButton onClick={handleSelectAll} variant="outlined" color="primary" >Select All</CustomButton>
                    <CustomButton onClick={handleClearAll} variant="outlined" color="secondary"> Clear All</CustomButton>
                  </div>
                  {usersData.map(user => (
                    <MenuItem key={user.id} value={user.email}>
                      <FormControlLabel
                        control={<Checkbox checked={selectedEmails.includes(user.email)} onChange={() => handleEmailSelect(user.email)} />} label={user.email} />
                    </MenuItem>
                  ))} </Box>
              </Popover>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <CustomButton onClick={handleCloseNotificationDialog} variant="outlined"> Cancel</CustomButton>
            <CustomButton>Save</CustomButton>
          </Box>
        </DialogContent>
      </BootstrapDialog>
      <BootstrapDialog onClose={handleClosDatabaseDialog} aria-labelledby="customized-dialog-title" open={openDatabaseDialog} >
        <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#E9F4FB', color: "#013A6F", fontSize: '14px' }} id="customized-dialog-title">
          <Typography sx={{ fontSize: "14px", color: "#013A6F", fontWeight: "bold" }}>{editingNotification ? 'Edit License Plate' : 'Add New License Plate'}</Typography>
        </DialogTitle>
        <DialogContent>
          <CustomTextField sx={{ width: "100%" }} label="License plate ID" required />
          <TextField type="text" fullWidth Textarea multiline rows={4} id="outlined-multiline" label="Notes" requiredmargin="dense" name="notes" variant="outlined" />
          <Typography textAlign="center" pb={1}>
            OR
          </Typography>
          <Box sx={{ background: "#E3EBFC", padding: "20px", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div><div {...getRootProps()}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '20px', flexDirection: 'column', }} >
              <input {...getInputProps()} />
              <img src={process.env.PUBLIC_URL + "/assets/icons/uploadicon.svg"} alt="" />
              <Typography sx={{ color: '#2465e9', fontSize: '14px' }}>  Bulk Upload </Typography>
            </div> {logoFiles.some(file => file.name.endsWith('.csv')) && (
              <div> <Typography sx={{ marginTop: '10px', fontSize: '12px' }}> Uploaded Files: </Typography><ul>
                {logoFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}</ul> </div>)} </div>
            <Typography sx={{ marginTop: '10px', fontSize: "10px", fontWeight: 'bold' }}>Preferred file size: 100kb</Typography>
            <Typography sx={{ marginTop: '5px', fontSize: "10px" }}>Formatted Support: .csv</Typography>
            <Button sx={{ marginTop: '5px', textDecoration: 'underline', fontSize: "12px" }} > Download sample.csv</Button>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", justifyContent: "center", pt: 5 }}>
            <CustomButton onClick={handleClosDatabaseDialog} sx={{ backgroundColor: 'white', color: "#187BCD", border: "1px solid #187BCD", borderRadius: "5px" }}> Cancel </CustomButton>
            <CustomButton>Save</CustomButton>
          </Box>
        </DialogContent>
      </BootstrapDialog>
      <CustomDeleteDialog open={databseopen} handleClose={handleDatabaseClose} handleConfirm={handleDelete} title="Do you want to delete the Database?" content="Please confirm to delete the Database." confirmText="Delete" cancelText="Cancel" />
    </>
  );
};
export default EditSettings;
