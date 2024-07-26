// src/components/CustomTable.js
import React from 'react';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

const CustomTable = ({ columns, data, customStyles }) => {
    return (
        <Box sx={{ marginTop: '46px' }}>
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
                        border: 'none', // Remove cell border
                        textAlign: 'center', // Center-align text
                    },
                    '& .MuiTableRow-root': {
                        '&.Mui-selected': {
                            backgroundColor: '#E9F4FB', // Background color for selected row
                        },
                    },
                    ...customStyles, // Apply custom styles if any
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} sx={{ padding: '8px 16px', textAlign: column.align || 'left' }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                <TableCell sx={{ padding: '27px 20px' }}>
                                    {row.userName}
                                </TableCell>
                                <TableCell sx={{ padding: '27px 20px' }}>
                                    {row.property}
                                </TableCell>
                                <TableCell sx={{ padding: '27px 20px' }}>
                                    {row.AccessLevel}
                                </TableCell>
                                <TableCell sx={{ padding: '20px 20px', textAlign: 'center' }}
                                >
                                    <Box onClick={(e) => {
                                        e.stopPropagation();
                                        // editDevices();
                                    }}
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            '&:hover': {
                                                backgroundColor: '#AAD8FD',
                                                borderRadius: '5px'
                                            },
                                            padding: '5px'
                                        }}
                                    >
                                        <img
                                            src="assets/icons/edit.svg"
                                            alt="Edit Icon"
                                            style={{ width: '20px', height: '16px', marginRight: '4px' }}
                                        />
                                    </Box>
                                    <img
                                        src="assets/icons/delete.svg"
                                        alt="Delete Icon"
                                        style={{ width: '20px', height: '16px', marginRight: '4px' }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    );
};

export default CustomTable;
