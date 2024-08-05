import { Box, Breadcrumbs, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomSearch from '../utils/CustomSearch';
import CustomButton from '../utils/CustomButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink, useNavigate } from 'react-router-dom';
import AddUser from '../components/user/AddUser';
import EditUser from '../components/user/EditUser';
import CustomDeleteDialog from '../utils/CustomDeleteDialog';
import DefaultTable from '../utils/DefaultTable';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Users = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [open, setOpen] = useState(false);

  const breadcrumbs = [
    <NavLink
      key="1"
      style={{ textDecoration: 'none', color: '#7A9AAE', fontSize: "14px" }}
      to="/users"
      onClick={() => {
        setIsAddingUser(false)
        setIsEditingUser(false)
      }}
    >
     {isAddingUser || isEditingUser && "user"}
    </NavLink>,
    ...(isAddingUser || isEditingUser
      ? [
        <NavLink
          key="2"
          style={{ textDecoration: 'none', color: '#187BCD', fontSize: "14px" }}
          to=""
        >
          {isAddingUser ? 'Add User' : 'Edit User'}
        </NavLink>
      ]
      : []
    ),
  ];

  const EditIconUrl = process.env.PUBLIC_URL + '/assets/icons/edit.svg';
  const DeleteIconUrl = process.env.PUBLIC_URL + '/assets/icons/delete.svg';

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleAddUser = () => {
    setIsAddingUser(true);
    setIsEditingUser(false);
  };

  const handleEditUser = () => {
    setIsAddingUser(false);
    setIsEditingUser(true);
  };

  const handleBack = () => {
    navigate('/users');
    setIsAddingUser(false);
    setIsEditingUser(false);
  };

  const rows = [
    { avatarInitials: "AT", userName: "Amruta_Test", property: "Ikea Test", AccessLevel: "Property Viewer", action: ['editIcon', 'deleteIcon'] },
    { avatarInitials: "JD", userName: "John Doe", property: "Ikea Test2", AccessLevel: "Property Admin", action: ['editIcon', 'deleteIcon'] },
    { avatarInitials: "NJ", userName: "Nick Jonas", property: "Ikea Test3", AccessLevel: "Company Viewer", action: ['editIcon', 'deleteIcon'] },
  ];

  const columns = ['avatarInitials', 'userName', 'property', 'AccessLevel', 'action'];
  const tableHeadings = ['', 'User Names', 'Property', 'Access Level', 'Action']

  const filteredData = rows.filter((item) =>
    item.userName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const getActionIcons = (action) => {
    return (
      <div>
        {action.includes('editIcon') && (
          <Box component='img' src={EditIconUrl} alt='Edit_Icon' sx={actions} onClick={handleEditUser} />
        )}
        {action.includes('deleteIcon') && (
          <Box component='img' src={DeleteIconUrl} alt="delete_icon" sx={actions} onClick={handleClickOpen} />
        )}
      </div>
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
          <Box display="flex" alignItems="center">
            <Box onClick={handleBack} className="backButtonStyle">
              <ArrowBackIosIcon sx={{ color: '#3275AF', paddingLeft: 1, fontSize: 18 }} />
            </Box>
            <Typography variant="h6" ml={2} sx={{ color: "#3275AF", fontSize: "18px" }}>
              Users
            </Typography>
          </Box>

          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="14px" color='#7A9AAE' />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Box>

        {!isAddingUser && !isEditingUser && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <CustomSearch
              onChange={handleSearch}
              value={searchValue}
              placeholder="Search"
              width="280px"
            />
            <CustomButton
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleAddUser}
              width="150px"
            >
              Add User
            </CustomButton>
          </Box>
        )}
      </Box>

      {!isAddingUser && !isEditingUser && (
        <Box sx={{ pt: 2 }}>
          <DefaultTable columns={columns} rows={filteredData} tableHeadings={tableHeadings} getActionIcons={getActionIcons} />
        </Box>
      )}

      {isAddingUser && (
        <AddUser setIsAddingUser={setIsAddingUser} />
      )}

      {isEditingUser && (
        <EditUser setIsEditingUser={setIsEditingUser} />
      )}

      {open && <CustomDeleteDialog
        open={open}
        handleClose={handleClose}
        handleConfirm={handleDelete}
        title="Do you want to delete the user?"
        content="Please confirm to delete the user."
        confirmText="Delete" cancelText="Cancel"
      />}
    </>
  );
};

export default Users;

// Styles
const actions = {
  width: '16px',
  height: '16px',
  padding: "10px",
  cursor: "pointer",
  marginRight: '4px',
  '&:hover': {
    backgroundColor: 'rgba(170, 216, 253, 1)',
    borderRadius: "10px",
  },
};
