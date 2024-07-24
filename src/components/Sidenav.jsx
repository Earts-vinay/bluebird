import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Divider, Box, Menu, MenuItem, FormControl, TextField, InputAdornment, InputLabel } from '@mui/material';
import { Dashboard, Devices, People, Settings, Logout } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CustomSearch from '../utils/CustomSearch';

const Sidenav = () => {
    const [shrink, setShrink] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeItem, setActiveItem] = useState('/');
    const open = Boolean(anchorEl);
    const now = moment();
    const formattedDate = now.format('ddd-DD/MM/YY');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = (path) => {
        setActiveItem(path);
    };

    const getItemStyle = (path) => ({
        backgroundColor: activeItem === path ? 'rgba(24, 123, 205, 0.6)' : 'transparent',
        color: activeItem === path ? '#fff' : '#fff',
        borderRadius: "10px"
    });

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    background: 'linear-gradient(140deg, #00101E 0%, #023664 100%, #03254C 100%)',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                },
            }}
        >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: 'sticky', top: 0, zIndex: 1, py: 1 }}>
                    <ListItem sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#5BB5FF", gap: 1 }}>
                        <img src="/assets/icons/companylogo.svg" alt="" />
                        <Typography variant="h6">COMPANY NAME</Typography>
                    </ListItem>
                    <ListItem sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <FormControl sx={{ width: "12rem" }}>
                            <TextField
                                select
                                size='small'
                                fullWidth
                                label={
                                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: "14px" }}>
                                        <img src="/assets/icons/propertyicon.svg" alt="" style={{ marginRight: '8px' }} />
                                        Property Name
                                    </Box>
                                }
                                sx={{
                                    backgroundColor: "#1C2E3D",
                                    color: "white",
                                    borderRadius: "5px",
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
                    <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.48)', mx: 3, mt: 3, mb: 2 }} />
                </Box>
                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    <List>
                        <ListItem>
                            <Avatar sx={{ bgcolor: 'grey', width: "65px", height: "65px" }}>JD</Avatar>
                            <div style={{ marginLeft: '16px' }}>
                                <Typography variant='p'>Welcome,<br /> James Dho</Typography> <br />
                                <Typography variant='p'>{formattedDate}</Typography>
                            </div>
                        </ListItem>
                        <Box sx={{ pt: 3, mx: 2 }}>
                            <ListItem
                                button
                                component={Link}
                                to="/"
                                onClick={() => handleItemClick('/')}
                                sx={getItemStyle('/')}
                            >
                                <ListItemIcon><Dashboard style={{ color: '#fff' }} /></ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem
                                button
                                component={Link}
                                to="/devices"
                                onClick={() => handleItemClick('/devices')}
                                sx={getItemStyle('/devices')}
                            >
                                <ListItemIcon><Devices style={{ color: '#fff' }} /></ListItemIcon>
                                <ListItemText primary="Devices" />
                            </ListItem>
                            <ListItem
                                button
                                component={Link}
                                to="/users"
                                onClick={() => handleItemClick('/users')}
                                sx={getItemStyle('/users')}
                            >
                                <ListItemIcon><People style={{ color: '#fff' }} /></ListItemIcon>
                                <ListItemText primary="Users" />
                            </ListItem>
                            <ListItem
                                button
                                component={Link}
                                to="/settings"
                                onClick={() => handleItemClick('/settings')}
                                sx={getItemStyle('/settings')}
                            >
                                <ListItemIcon><Settings style={{ color: '#fff' }} /></ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon><Logout style={{ color: '#fff' }} /></ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItem>
                        </Box>
                    </List>
                </Box>
                <Box sx={{ position: 'sticky', bottom: 0, textAlign: 'center', py: 2 }}>
                    <Box sx={{ py: 2 }}>
                        <img src="/assets/logo.svg" alt="Logo" style={{ maxWidth: '100%', maxHeight: '50px' }} />
                    </Box>
                </Box>
             
            </Box>
        </Drawer>
    );
};

export default Sidenav;
