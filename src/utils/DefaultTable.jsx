// components/DefaultTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const DefaultTable = ({ columns, rows, tableHeadings, onClick }) => {
  if (!Array.isArray(columns) || !Array.isArray(rows)) {
    console.error('Invalid columns or rows');
    return null;
  }

  return (
    <TableContainer component={Paper} sx={{
      boxShadow: "none", background: "none", borderRadius: "10px",
      
      '& .MuiTableCell-root': {
        border: 'none',
        textAlign: 'center',
        
      },
    }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "rgba(253, 251, 234, 1)" }}>
            {tableHeadings.map((tableHeadings) => (
              <TableCell key={tableHeadings}>{tableHeadings}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}  sx={{
              
              '&:hover': {
                backgroundColor: 'rgba(233, 244, 251, 1)',
              },
              
            }}>
              {columns.map((column) => {
                let value;
                if (column === 'propertyName') {
                  value = (
                    <>
                      {row.propertyName}<br />

                      <img src="/assets/icons/location.svg" alt="" /> {row.propertyLocation}
                    </>
                  );
                } else {
                  value = row[column];
                }
                return (
                  <TableCell key={column} onClick={onClick}  >
                    {value !== undefined ? value : 'N/A'}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DefaultTable;
