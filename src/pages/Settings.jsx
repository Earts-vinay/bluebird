import react,{useState} from 'react'
import {Box,Button, Typography} from '@mui/material';
import CustomSearch from '../utils/CustomSearch';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from "react-router-dom";
import DefaultTable from '../utils/DefaultTable';


const tableHeadings =['Property Name', 'Raise Alert', 'Vehicle Detection ', 'status', 'Time',];
const settingcolumns = ['propertyName', 'raiseAlertscount', 'VehicleDetection', 'statuscount', 'Time', ];
const settingrows = [
  { propertyName: "Ikea Test 01", raiseAlertscount: 1, VehicleDetection: 0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 02", raiseAlertscount: 1, VehicleDetection: 0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 03", raiseAlertscount: 1,VehicleDetection: 0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 04", raiseAlertscount: 1, VehicleDetection:0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 05", raiseAlertscount: 1, VehicleDetection:0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 06", raiseAlertscount: 1, VehicleDetection:0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlertscount: 1, VehicleDetection:0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlertscount: 1, VehicleDetection: 0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlertscount: 1, VehicleDetection:0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlertscount: 1, VehicleDetection:0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlertscount: 1, VehicleDetection: 0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },
  { propertyName: "Ikea Test 07", raiseAlertscount: 1, VehicleDetection: 0, statuscount: 3, Time: 1, propertyLocation: 'Virginia, USA.' },


];
const Settings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleGoBack  = () => {
    navigate(-1); 
  };

 
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }; 

  const filteredData = settingrows.filter((item) =>
    item.propertyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = () => {
    navigate("/settings/editsettings")
  };

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
            <Typography variant="h6" ml={2} sx={{ color: "#3275AF", fontSize: "18px" }}>
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
      <Box mt={8}>
      <DefaultTable columns={settingcolumns} rows={filteredData} tableHeadings={tableHeadings} onClick={handleRowClick}/>
      </Box>
   </>
  )
}

export default Settings