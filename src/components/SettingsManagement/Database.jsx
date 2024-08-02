import React from 'react';
import DefaultTable from "../../utils/DefaultTable";
import { Box, Typography } from "@mui/material";

const EditIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit.svg';
const DeleteIconUrl = process.env.PUBLIC_URL + '/assets/icons/delete.svg';

const tableHeadings = ['License Plate', 'Notes',  'Action'];
const databaseColumns = ['licensaPlate', 'notes', 'action'];
const databaseRows = [
  { licensaPlate: 'TS09ER4577', notes: 'Ts Vehcile', action: ['editIcon', 'deleteIcon'] },
  { licensaPlate: 'TS09ER4577', notes: 'Ts Vehcile', action: ['editIcon', 'deleteIcon'] },
];


const Database = ({onEditDatabase,onDeleteDatabase}) => {

  const getActionIcons = (actions) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {actions?.includes('editIcon') && (
          <Box component="img" src={EditIconUrl} alt="Edit Icon" sx={actionsStyle} onClick={onEditDatabase} />
        )}
        {actions?.includes('deleteIcon') && (
          <Box component="img" src={DeleteIconUrl} alt="Delete Icon" sx={actionsStyle} onClick={onDeleteDatabase} />
        )}
      </div>
    );
  };
  const handleActionClick = (rowIndex, actions) => {
    if (actions?.includes('editIcon')) {
      onEditDatabase(rowIndex);
    }
    if (actions?.includes('deleteIcon')) {
      onDeleteDatabase(rowIndex);
    }
  };
  
  return (
    <Box>
      <DefaultTable
        columns={databaseColumns}
        rows={databaseRows}
        tableHeadings={tableHeadings}
        getActionIcons={getActionIcons}
        onClick={handleActionClick}
      />
    </Box>
  );
};

export default Database;

const actionsStyle = {
  width: '16px',
  height: '16px',
  padding: '10px',
  cursor: 'pointer',
  marginRight: '4px',
  '&:hover': {
    backgroundColor: 'rgba(170, 216, 253, 1)',
    borderRadius: '10px',
  },
};
