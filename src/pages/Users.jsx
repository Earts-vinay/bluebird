import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomSearch from '../utils/CustomSearch';
import CustomButton from '../utils/CustomButton';
import CustomTable from '../utils/CustomTable';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import AddUser from '../components/user/AddUser';
import EditUser from '../components/user/EditUser';
import CustomDeleteDialog from '../utils/CustomDeleteDialog';

const Users = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [open, setOpen] = useState(false);


  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleAddUser = () => {
    setIsAddingUser(true);
    setIsEditingUser(false);
    setBreadcrumbs([
      { key: "1", label: "Users", href: "/users" },
      { key: "2", label: "Add User", href: "", isActive: true }
    ]);
  };

  const handleEditUser = (user) => {
    setIsAddingUser(false);
    setIsEditingUser(true);
    setBreadcrumbs([
      { key: "1", label: "Users", href: "/users" },
      { key: "2", label: 'Edit User', href: '', isActive: true }
    ]);
  };

  const handleBack = () => {
    navigate('/users');
    setIsAddingUser(false);
    setIsEditingUser(false);
    setBreadcrumbs([]);
  }

  const sampleData = [
    {pic:"jd", userName: "Amruta_Test", property: "Ikea Test", AccessLevel: "Property Viewer", },
    {pic:"jd", userName: "Amruta_Test2", property: "Ikea Test2", AccessLevel: "Property Admin", },
    {pic:"jd", userName: "Amruta_Test3", property: "Ikea Test3", AccessLevel: "Property Viewer", },
  ];

  const columns = [
    { id: 'pic', label: '', align: 'center' },
    { id: 'userName', label: 'User Name' },
    { id: 'property', label: 'Property', align: 'center' },
    { id: 'AccessLevel', label: 'Access Level', align: 'center' },
    { id: 'action', label: 'Action', align: 'center' },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }} onClick={handleBack}
          >
            <img
              src="/assets/icons/left_Arrow.svg"
              alt="Left Arrow"
              style={{
                borderRadius: '50%',
                backgroundColor: "#E2E8F0",
                padding: '10px',
                width: '10px',
                height: '10px',
                cursor: 'pointer'
              }}
            />
            <Typography sx={{ color: "#3275AF" }}>Users</Typography>
          </Box>


          <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              {breadcrumbs.map(({ key, label, href, isActive }) => (
                isActive ? (
                  <Typography key={key} sx={{ color: '#187BCD', fontSize: '14px' }}>
                    {label}
                  </Typography>
                ) : (
                  <Link
                    underline="hover"
                    key={key}
                    color="inherit"
                    href={href}
                    sx={{ color: '#7A9AAE', fontSize: '14px' }}
                  >
                    {label}
                  </Link>
                )
              ))}
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
        <CustomTable
          columns={columns}
          data={sampleData}
          handleEdit={handleEditUser}
          customStyles={{
            // Custom styles can be added here if needed
          }}
          handleClickOpen={handleClickOpen}
        />
      )}



      {isAddingUser && (
        <AddUser setIsAddingUser={setIsAddingUser} setBreadcrumbs={setBreadcrumbs} />
      )}

      {isEditingUser && (
        <EditUser setIsEditingUser={setIsEditingUser} setBreadcrumbs={setBreadcrumbs} />
      )}

      {open && <CustomDeleteDialog
        open={open}
        handleClose={handleClose}
        handleConfirm={handleDelete}
        title="Do you want to delete the user?"
        content="Please confirm to delete the user."
        confirmText="Delete" cancelText="Cancel"
      />}
    </Box>


  );
};

export default Users;
