import React, { useState } from 'react';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Menu,
    MenuItem,
    IconButton,
    Checkbox,
    FormControlLabel
} from '@mui/material';

const CustomTable = ({ columns, data, customStyles, handleEdit, handleClickOpen }) => {
    console.log("calling this");
    const [anchorEl, setAnchorEl] = useState(null);
    const [filterColumn, setFilterColumn] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleClick = (event, columnId) => {
        setAnchorEl(event.currentTarget);
        setFilterColumn(columnId);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setFilterColumn(null);
    };

    const handleOptionChange = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
        );
    };

    const open = Boolean(anchorEl);



    return (
        <Box sx={{ marginTop: '25px' }}>
            <TableContainer
                component={Paper}
                sx={{
                    border: 'none', // Remove border
                    backgroundColor: 'transparent', // Remove background color
                    boxShadow: 'none', // Remove box shadow
                    '& .MuiTableHead-root': {
                        backgroundColor: '#FDFBEA', // Header background color
                        color: '#000000', // Header text color
                        '& th': {
                            padding: '10px 16px',
                            fontWeight: 545, // Adjust padding for equal spacing
                        },
                    },
                    '& .MuiTableCell-root': {
                        border: 'none',
                        textAlign: 'center',
                    },
                    '& .MuiTableRow-root': {
                        '&.Mui-selected': {
                            backgroundColor: '#E9F4FB',
                        },
                    },
                    ...customStyles,
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} sx={{ padding: '8px 16px', textAlign: column.align || 'left' }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px'
                                    }}>
                                        {column.label}
                                        {column.id === 'AccessLevel' && (
                                            <IconButton
                                                onClick={(event) => handleClick(event, column.id)}
                                                sx={{
                                                    padding: 0,
                                                    marginLeft: 1,
                                                    '&:hover': {
                                                        color: '#3275AF',
                                                    },
                                                }}
                                            >
                                                <img
                                                    src="assets/icons/filter.svg"
                                                    alt="Filter Icon"
                                                    style={{ width: '20px', height: '16px' }}
                                                />
                                            </IconButton>
                                        )}
                                    </Box>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={open && filterColumn === column.id}
                                        onClose={handleClose}
                                    >
                                        <MenuItem>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('Property Viewer')}
                                                        onChange={() => handleOptionChange('Property Viewer')}
                                                    />
                                                }
                                                label="Property Viewer"
                                            />
                                        </MenuItem>
                                        <MenuItem>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('Company Viewer')}
                                                        onChange={() => handleOptionChange('Company Viewer')}
                                                    />
                                                }
                                                label="Company Viewer"
                                            />
                                        </MenuItem>
                                        <MenuItem>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('Property Admin')}
                                                        onChange={() => handleOptionChange('Property Admin')}
                                                    />
                                                }
                                                label="Property Admin"
                                            />
                                        </MenuItem>
                                        <MenuItem>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={selectedOptions.includes('Company Admin')}
                                                        onChange={() => handleOptionChange('Company Admin')}
                                                    />
                                                }
                                                label="Company Admin"
                                            />
                                        </MenuItem>
                                    </Menu>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column) => (
                                    <TableCell key={column.id} sx={{  width:"20px" }}>
                                        {column.id === 'pic' ? (
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#E2E8F0',
                                                    border: '2px solid #BDC3C7',
                                                    fontWeight: 'bold',
                                                    color: '#3275AF',
                                                }}
                                            >
                                                {row[column.id]}
                                            </Box>
                                        ) : column.id === 'action' ? (
                                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                                <Box onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleEdit(row);
                                                }}
                                                    sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        '&:hover': {
                                                            backgroundColor: '#AAD8FD',
                                                            borderRadius: '5px'
                                                        },
                                                        padding: '5px',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    <img
                                                        src="assets/icons/edit.svg"
                                                        alt="Edit Icon"
                                                        style={{ width: '20px', height: '16px', marginRight: '4px' }}
                                                    />
                                                </Box>
                                                <Box onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleClickOpen(); // Open the dialog
                                                    // console.log('Delete', row);
                                                }}
                                                    sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        '&:hover': {
                                                            backgroundColor: '#F8D7DA',
                                                            borderRadius: '5px'
                                                        },
                                                        padding: '5px',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    <img
                                                        src="assets/icons/delete.svg"
                                                        alt="Delete Icon"
                                                        style={{ width: '20px', height: '16px', marginRight: '4px' }}
                                                    />
                                                </Box>
                                            </Box>
                                        ) : (
                                            row[column.id]
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default CustomTable;
