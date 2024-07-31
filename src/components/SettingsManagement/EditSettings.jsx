
import {Box,Button,Typography,Tab, Tabs} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import CustomSearch from '../../utils/CustomSearch';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';
import Detection from "./Detection";
import Database from "./Database";
import Notification from "./Notification";

const EditSettings = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(0);
  
    const handleGoBack  = () => {
      navigate(-1); 
    };
  
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
   
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    }; 

    const TabPanel = ({ value, index, children }) => (
        <div hidden={value !== index}>
            {value === index && <Box pt={2}>{children}</Box>}
        </div>
    );


    const breadcrumbs = [
        <Link component={RouterLink} underline="hover" key="1" color="#7A9AAE" to="/settings">
        Settings
      </Link>,
      <Link component={RouterLink} underline="hover" key="2" color="#187BCD" to="/settings/editsettings">
       Edit Settings
      </Link>,
      ];
    return(
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
           Settings
            </Typography>
          </Box>
        </Box>
        <CustomSearch
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </Box>
      <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" color='#7A9AAE' />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    <Box mt={5}>
                <Tabs 
                    value={selectedTab}
                    onChange={handleTabChange}
                    sx={{
                        borderBottom: 'none',
                        '.MuiTabs-flexContainer': {
                            backgroundColor: 'white',
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderRadius: '10px',
                            boxShadow: '0 0 5px 0 rgba(36, 101, 233, 0.5)',
                             border:"1px solid #C1E9FE" ,
                            fontWeight: 'bold',
                        },
                    }}
                    TabIndicatorProps={{ style: { display: 'none' } }}
                    size="small"
                >
                    {['Detection', 'Notification', 'Database'].map((label, index) => (
                        <Tab
                            key={index}
                            label={label}
                            sx={{
                                textTransform: 'capitalize',
                                backgroundColor: selectedTab === index && '#1167B1',
                                color: selectedTab === index && 'white !important',
                                width: { xs: '80%', sm: '30%' }, 
                                borderRadius: '5px',
                               
                            }}
                        />

                    ))}
                </Tabs>

                <Box mt={0} sx={{ padding: "0px Important" }}>
                    <TabPanel value={selectedTab} index={0} >
                        <Detection />
                    </TabPanel>
                    <TabPanel value={selectedTab} index={1}>
                        <Notification />
                    </TabPanel>
                    <TabPanel value={selectedTab} index={2}>
                        <Database/>
                    </TabPanel>
                </Box>
                </Box>
            
        </>
    )
}
export default EditSettings;