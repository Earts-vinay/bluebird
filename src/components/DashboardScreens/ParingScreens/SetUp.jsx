import { Grid, Typography, Box, IconButton } from '@mui/material';
import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SetUpDevice = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12} md={5} style={{backgroundColor:"white",borderRadius:"10px", alignContent:"center"}}>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            paddingY: '30px',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* Compass Image */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ position: 'relative',  }}>
              <img src={`${process.env.PUBLIC_URL}/assets/icons/compass.svg`} alt="Compass" />

              {/* Arrows */}
              <IconButton
                sx={{
                  position: 'absolute',
                  left: '-40px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  borderRadius: '50%',
                  backgroundColor: '#2E3137',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#2E3137', // Change to the same color as normal state
                  },
                }}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
              <IconButton
                sx={{
                  position: 'absolute',
                  right: '-50px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  borderRadius: '50%',
                  backgroundColor: '#2E3137',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#2E3137', // Change to the same color as normal state
                  },
                }}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: '-40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: '50%',
                  backgroundColor: '#2E3137',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#2E3137', // Change to the same color as normal state
                  },
                }}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: '-40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: '50%',
                  backgroundColor: '#2E3137',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#2E3137', // Change to the same color as normal state
                  },
                }}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={7} sx={{backgroundColor:"white",}}>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center",pt:3}}>
          <img src="/assets/images/sam_image.png" alt="" width="80%" style={{borderRadius:"10px"}}/>
        </Box>
        <Typography variant="body2" sx={{ padding: 2 ,textAlign:"center"}}>
         Note: You can use the joystick on the left to adjust the camera angle and click on next to go ahead.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SetUpDevice;
