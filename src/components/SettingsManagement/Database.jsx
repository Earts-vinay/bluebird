import React, { useState } from 'react';
import DefaultTable from "../../utils/DefaultTable";
import { Box, Button, TextField, Typography } from "@mui/material";
import CustomDeleteDialog from '../../utils/CustomDeleteDialog';
import CustomDialog from '../../utils/CustomDialog';
import CustomTextField from '../../utils/CustomTextfield';
import { useDropzone } from 'react-dropzone';

const EditIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit.svg';
const DeleteIconUrl = process.env.PUBLIC_URL + '/assets/icons/delete.svg';
const tableHeadings = ['License Plate', 'Notes', 'Action'];
const databaseColumns = ['licensaPlate', 'notes', 'action'];
const databaseRows = [
  { licensaPlate: 'TS09ER4577', notes: 'Ts Vehcile', action: ['editIcon', 'deleteIcon'] },
  { licensaPlate: 'TS09ER4577', notes: 'Ts Vehcile', action: ['editIcon', 'deleteIcon'] },
];


const Database = ({ modalOpen, handleModalClose }) => {
  const [deletePopup, setDeletePopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [logoFiles, setLogoFiles] = useState([]);

  const handleOpenEditPopup = () => {
    setEditPopup(true)
  }
  const handleEditClose = () => {
    setEditPopup(false)
    handleModalClose()
  }
  const handleDelete = () => {
    setDeletePopup(true)
  }
  const handleClose = () => {
    setDeletePopup(false)
  }
  const handleSave = () => {
    ""
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.csv',
    multiple: false,
    onDrop: (acceptedFiles) => {
      setLogoFiles(acceptedFiles);
    },
  });

  const getActionIcons = (actions) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {actions?.includes('editIcon') && (
          <Box component="img" src={EditIconUrl} alt="Edit Icon" sx={actionsStyle} onClick={handleOpenEditPopup} />
        )}
        {actions?.includes('deleteIcon') && (
          <Box component="img" src={DeleteIconUrl} alt="Delete Icon" sx={actionsStyle} onClick={handleDelete} />
        )}
      </div>
    );
  };

  return (
    <Box>
      {/* Table */}
      <DefaultTable columns={databaseColumns} rows={databaseRows} tableHeadings={tableHeadings} getActionIcons={getActionIcons} />

      {/* Edit & Add Dialog */}
      <CustomDialog open={modalOpen || editPopup} handleClose={handleEditClose} onClick={handleSave} title="Add new License plate">
        <CustomTextField label="License plate ID" />
        <TextField type="text" fullWidth multiline rows={4} id="outlined-multiline" label="Notes" required margin="dense" name="notes" variant="outlined" />
        <Typography textAlign="center" py={3}>OR</Typography>
        <Box sx={{ background: "#E3EBFC", p: 2, borderRadius: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div {...getRootProps()} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2, flexDirection: 'column' }}>
            <input {...getInputProps()} />
            <img src={`${process.env.PUBLIC_URL}/assets/icons/uploadicon.svg`} alt="Upload icon" />
            <Typography sx={{ color: '#2465e9', fontSize: 14 }}>Bulk Upload</Typography>
          </div>
          {logoFiles.some(file => file.name.endsWith('.csv')) && (
            <div>
              <Typography sx={{ mt: 1, fontSize: 12 }}>Uploaded Files:</Typography>
              <ul>
                {logoFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
          <Typography sx={{ fontSize: 12 }}>Preferred file size: 100kb</Typography>
          <Typography sx={{ fontSize: 12 }}>Formatted Support: .csv</Typography>
          <Button sx={{ textTransform: "capitalize", textDecoration: 'underline', fontSize: 12 }}>Download sample.csv</Button>
        </Box>
      </CustomDialog>

      {/* Delete Dialog */}
      <CustomDeleteDialog open={deletePopup} handleClose={handleClose} handleDelete={handleDelete} title="Do you want to delete the Database?" content="Please confirm to delete the Database." confirmText="Delete" cancelText="Cancel" />
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
