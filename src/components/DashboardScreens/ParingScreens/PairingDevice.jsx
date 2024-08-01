import React from 'react'
import CustomTextField from '../../../utils/CustomTextfield'
import CustomDropdown from '../../../utils/CustomDropdown'

import { Grid, MenuItem, Typography } from '@mui/material'
import CustomMapContainer from '../../../utils/CustomMapContainer'

const markers = [
    { id: 1, latitude: 17.385044, longitude: 78.486671 },
    { id: 2, latitude: 17.391044, longitude: 78.486671 },
    { id: 3, latitude: 17.387044, longitude: 78.486671 },
    { id: 4, latitude: 17.389044, longitude: 78.486671 },
    { id: 5, latitude: 17.383044, longitude: 78.486671 },
];

const center = {
    lat: 17.385044,
    lng: 78.486671,
};

const PairingDevice = () => {

    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid item xs={12} md={6}>
                <CustomTextField fullwidth label="Device name" />
                <CustomDropdown fullwidth label="Pole Name">
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </CustomDropdown>
                <CustomTextField fullwidth label="Latitude" />
                <CustomTextField fullwidth label="Longitude" />
            </Grid>
            <Grid item xs={12} md={6} >
                <CustomMapContainer defaultCenter={center} markers={markers} zoom={16} height='75vh' />
                <Typography variant="body2" sx={{ padding: 2 }}>
                    You can mark your location on the map accurately by clicking on the map.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default PairingDevice