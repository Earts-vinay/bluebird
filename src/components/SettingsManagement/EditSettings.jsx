import React, { useState } from "react";
import { Box, Button, Typography, Tab, Tabs, } from "@mui/material";
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
import CustomButton from "../../utils/CustomButton";
import CustomSearch from '../../utils/CustomSearch';



const EditSettings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [openNotificationDialog, setOpenNotificationDialog] = useState(false);
  const [openDatabaseDialog, setOpenDatabaseDialog] = useState(false);

  const handleGoBack = () => navigate(-1);

  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const handleAddNotification = () => setOpenNotificationDialog(true);

  const handleAddDatabase = () => setOpenDatabaseDialog(true);

  const TabPanel = ({ value, index, children }) => (
    <div hidden={value !== index}>
      {value === index && <Box pt={2}>{children}</Box>}
    </div>
  );

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
        <Breadcrumbs separator={<NavigateNextIcon fontSize="14px" color='#7A9AAE' />} aria-label="breadcrumb" >{breadcrumbs} </Breadcrumbs>
      </Stack>
      <Box mt={3}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={tabs}
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
            <Notification  modalOpen={openNotificationDialog} handleModalClose={()=>{
              setOpenNotificationDialog(false)
            }} />
          </TabPanel>
          <TabPanel value={selectedTab} index={2}>
            <Database modalOpen={openDatabaseDialog} handleModalClose={()=>{
              setOpenDatabaseDialog(false)
            }}/>
          </TabPanel>
        </Box>
      </Box>
    </>
  );
};
export default EditSettings;

const tabs ={
  borderBottom: 'none',  '.MuiTabs-flexContainer': {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '5px',
    boxShadow: '0 0 5px 0 rgba(36, 101, 233, 0.5)',
    border:"1px solid rgba(193, 233, 254, 1)",
    fontWeight: 'bold',
},
}