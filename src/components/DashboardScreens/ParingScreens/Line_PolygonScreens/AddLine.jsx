import { Box, Grid, MenuItem, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomTextField from '../../../../utils/CustomTextfield'
import CustomDropdown from '../../../../utils/CustomDropdown'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import CustomButton from '../../../../utils/CustomButton'

const data = [
    { detection: 'person',  status: 'ON', name: "Person Detection" },
    { detection: 'vehicle',  status: 'OFF', name: "Vehicle Detection" },
    { detection: 'plate',  status: 'ON', name: "License Plate Detection" }
  ];
const AddLine = ({getDetectionIcons,handleBack}) => {
    const [toggleData, setToggleData] = useState(data);
    const handleSwitchChange = (index) => {
        setToggleData((prevData) => {
          const updatedData = [...prevData];
          updatedData[index].status = updatedData[index].status === 'ON' ? 'OFF' : 'ON';
          return updatedData;
        });
      };
  return (
    <Grid container spacing={2} sx={{gap:5 }}>
    <Grid item xs={12} md={5}>
      <CustomTextField fullwidth label="Line name" />
      <Box paddingX="10px" paddingTop="10px">
        <Typography variant="h6" color="rgba(88, 122, 156, 1)">Select Metrics</Typography>
      </Box>
      <Table >
        <TableBody >
          {toggleData.map((row, index) => (
            <TableRow key={index} >
              <TableCell display="flex" alignItems="center"> {getDetectionIcons(row.detection)}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell  width="10%">
                <AntSwitch
                  checked={row.status === 'ON'}
                  onChange={() => handleSwitchChange(index)}
                  color="primary"
                />
               
              </TableCell>
              <TableCell width="10%"> 
                 
                    {row.status === 'ON' ? 'ON' : 'OFF'}
                 
                </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomDropdown fullwidth label="Zone Name">
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomDropdown>
    </Grid>
    <Grid item xs={12} md={6.5}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
        <img src="/assets/images/sam_image.png" alt="" width="100%" style={{ borderRadius: "10px" }} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", alignItems: "end", pt: 3, gap: 1 }}>
        <CustomButton variant='outlined' onClick={handleBack}>Back</CustomButton>
        <CustomButton variant='outlined' width='auto'>Save Line</CustomButton>
      </Box>
    </Grid>
  </Grid>
  )
}

export default AddLine

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
  