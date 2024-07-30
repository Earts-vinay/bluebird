import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Divider, Box, FormControl, TextField, MenuItem, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Sidenav = () => {
    const location = useLocation();
    const [shrink, setShrink] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(true);  // New state for sidebar open/close
    const now = moment();
    const formattedDate = now.format('ddd-DD/MM/YY');

    const isActive = (path) => {
        return location.pathname.startsWith(path);
    };

    const getItemStyle = (path) => ({
        backgroundColor: isActive(path) ? 'rgba(24, 123, 205, 0.6)' : 'transparent',
        color: '#fff',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: 'rgba(24, 123, 205, 0.6)',
        },
    });

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = (path) => {
        setAnchorEl(null);
    };

    const handleToggle = () => {
        setOpen(!open);  // Toggle the open state
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: open ? 240 : 90,  // Adjust width based on the open state
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: open ? 240 : 90,
                    boxSizing: 'border-box',
                    background: 'linear-gradient(140deg, #00101E 0%, #023664 100%, #03254C 100%)',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'width 0.3s',  // Smooth transition for width change
                },
            }}
        >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: 'sticky', top: 0, zIndex: 1, py: 1 }}>
                <Box sx={{ display:"flex", justifyContent:"end", }}>
                        <button  onClick={handleToggle} style={{ justifyContent: 'end', minWidth: '10px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%', mx: 1,}}>
                            {open ? <ChevronLeftIcon style={{ color: '#fff',width:"10px",height:"10px" }} /> : <ChevronRightIcon style={{ color: '#fff' }} />}
                        </button>
                    </Box>
                    <ListItem sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#5BB5FF', gap: 1,}}>
                        <img src="/assets/icons/companylogo.svg" alt="" />
                        {open && <Typography variant="h6">COMPANY NAME</Typography>}  {/* Conditional rendering */}
                    </ListItem>
                    <ListItem sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FormControl sx={{ width: '12rem' }}>
                            <TextField
                                select
                                size='small'
                                fullWidth
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '14px' }}>
                                        <img src="/assets/icons/propertyicon.svg" alt="" style={{ marginRight: '8px' }} />
                                        Property Name
                                    </Box>
                                }
                                sx={{
                                    backgroundColor: '#1C2E3D',
                                    color: 'white',
                                    borderRadius: '5px',
                                    '& .MuiInputBase-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                    },
                                }}
                                InputLabelProps={{
                                    shrink: shrink || false,
                                }}
                                SelectProps={{
                                    IconComponent: (props) => <KeyboardArrowDownIcon {...props} style={{ color: 'white' }} />
                                }}
                                onFocus={() => setShrink(true)}
                                onBlur={(event) => setShrink(event.target.value !== '')}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </TextField>
                        </FormControl>
                    </ListItem>
                    <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.48)', flex: 1, py: 2, mx: 2 }} />
                   
                </Box>
                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <List>
                        <ListItem>
                            <Avatar sx={{ bgcolor: 'grey', width: '65px', height: '65px' }}>JD</Avatar>
                            <div style={{ marginLeft: '16px' }}>
                                {open && <Typography variant='p' sx={{fontFamily:"Montserrat, sans-serif"}}>Welcome,<br /> James Dho</Typography>}  <br/>
                               {open && <Typography variant='p'>{formattedDate}</Typography>}
                            </div>
                        </ListItem>
                        <Box sx={{ pt: 3, mx: 2, gap: 1, display: "flex", flexDirection: "column" }}>
                            <ListItem
                                button
                                component={Link}
                                to="/dashboard"
                                onClick={() => handleItemClick('/dashboard')}
                                sx={getItemStyle('/dashboard')}
                            >
                                <ListItemIcon><img src="/assets/icons/dashboard.svg" alt="" /></ListItemIcon>
                                {open && <ListItemText primary="Dashboard" />}  {/* Conditional rendering */}
                            </ListItem>
                            <ListItem
                                button
                                component={Link}

                                to="/devices"
                                onClick={() => handleItemClick('/devices')}
                                sx={getItemStyle('/devices')}
                            >
                                <ListItemIcon><img src="/assets/icons/devices.svg" alt="" /></ListItemIcon>
                                {open && <ListItemText primary="Devices" />}  {/* Conditional rendering */}
                            </ListItem>
                            <ListItem
                                button
                                component={Link}
                                to="/users"
                                onClick={() => handleItemClick('/users')}
                                sx={getItemStyle('/users')}
                            >
                                <ListItemIcon><img src="/assets/icons/users.svg" alt="" /></ListItemIcon>
                                {open && <ListItemText primary="Users" />}  {/* Conditional rendering */}
                            </ListItem>
                            <ListItem
                                button
                                component={Link}
                                to="/settings"
                                onClick={() => handleItemClick('/settings')}
                                sx={getItemStyle('/settings')}
                            >
                                <ListItemIcon><img src="/assets/icons/settings.svg" alt="" /></ListItemIcon>
                                {open && <ListItemText primary="Settings" />}  {/* Conditional rendering */}
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><img src="/assets/icons/logout.svg" alt="" style={{ color: "#fffff" }} /></ListItemIcon>
                                {open && <ListItemText primary="Logout" />}  {/* Conditional rendering */}
                            </ListItem>
                        </Box>
                    </List>
                </Box>
                <Box sx={{ position: 'sticky', bottom: 0, textAlign: 'center', py: 2 }}>
                    <Box sx={{ py: 2 }}>
                        <img src="/assets/logo.svg" alt="Logo" style={{ maxWidth: '100%', maxHeight: '50px' }} />
                    </Box>
                    {/* Button to toggle open/close */}

                </Box>
            </Box>
        </Drawer>
    );
};

export default Sidenav;
