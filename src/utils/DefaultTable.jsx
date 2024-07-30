// components/DefaultTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const DefaultTable = ({ columns, rows, tableHeadings, onClick }) => {
  if (!Array.isArray(columns) || !Array.isArray(rows)) {
    console.error('Invalid columns or rows');
    return null;
  }

  return (
    <TableContainer component={Paper} sx={{
      maxHeight: "80vh",
      boxShadow: "none", background: "none", borderRadius: "10px",
      '& .MuiTableCell-root': {
        border: 'none',
        textAlign: 'center',
      },
      
    }}>
      <Table  >
        <TableHead >
          <TableRow sx={{ position: 'sticky', top: 0, background: "rgba(253, 251, 234, 1)", }} >
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
              {columns.map((column,colIndex) => {
                let value;
                if (column === 'propertyName') {
                  value = (
                    <>
                      <Typography variant='p' sx={{ fontWeight:500, marginRight:"15px",fontSize:"14px"}}>{row.propertyName}</Typography><br />
                      <Typography sx={{fontSize:"12px"}}> <img src="/assets/icons/location.svg" alt="" />  {row.propertyLocation} </Typography>
                    </>
                  );
                } else {
                  value = row[column];
                }
                const isFirstColumn = colIndex === 0;
                const isLastColumn = colIndex === columns.length - 1;
                return (
                  <TableCell
                    key={column}
                    onClick={onClick}
                    sx={{
                      color: '#3F3F3F',
                      fontSize:"13px",
                      fontWeight:550,
                      '&:first-of-type': isFirstColumn && {
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
                        '&:hover': {
                          borderTopLeftRadius: '10px',
                          borderBottomLeftRadius: '10px',
                        },
                      },
                      '&:last-of-type': isLastColumn && {
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                        '&:hover': {
                          borderTopRightRadius: '10px',
                          borderBottomRightRadius: '10px',
                        },
                      },
                    }}
                  >
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
