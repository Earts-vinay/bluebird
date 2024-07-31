import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const DefaultTable = ({ columns, rows, tableHeadings, getDetectionIcons, getActionIcons, onClick }) => {
  if (!Array.isArray(columns) || !Array.isArray(rows)) {
    console.error('Invalid columns or rows');
    return null;
  }

  // Function to get styles for table cell based on column index
  const getTableCellStyles = (colIndex) => ({
    color: '#3F3F3F',
    fontSize: "13px",
    height: 40,
    border: 'none',
    textAlign: 'center',
    ...(colIndex === 0 && {
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
      '&:hover': {
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
      },
    }),
    ...(colIndex === columns.length - 1 && {
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
      '&:hover': {
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
      },
    }),
  });

  return (
    <TableContainer component={Paper} sx={tablecontainer}>
      <Table>
        <TableHead>
          <TableRow sx={{ position: 'sticky', top: 0, background: "rgba(253, 251, 234, 1)" }}>
            {tableHeadings.map((tableHeading) => (
              <TableCell key={tableHeading}>{tableHeading}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} sx={{
              '&:hover': {
                backgroundColor: 'rgba(233, 244, 251, 1)',
              },
            }}>
              {columns.map((column, colIndex) => {
                let value;
                if (column === 'propertyName') {
                  value = (
                    <>
                      <Typography variant='p' sx={{ fontWeight: 500, marginRight: "15px", fontSize: "14px" }}>{row.propertyName}</Typography><br />
                      <Typography sx={{ fontSize: "12px" }}> <img src="/assets/icons/location.svg" alt="" /> {row.propertyLocation} </Typography>
                    </>
                  );
                } else if (column === 'detection') {
                  value = getDetectionIcons(row[column]);
                } else if (column === 'action') {
                  value = getActionIcons(row[column]);
                } else {
                  value = row[column];
                }

                return (
                  <TableCell
                    key={column}
                    onClick={onClick}
                    sx={getTableCellStyles(colIndex)}
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

// Styles
const tablecontainer = {
  maxHeight: "80vh",
  boxShadow: "none",
  background: "none",
  borderRadius: "10px",
  '& .MuiTableCell-root': {
    border: 'none',
    textAlign: 'center',
  },
};
