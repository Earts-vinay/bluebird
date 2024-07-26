import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomSearch from '../utils/CustomSearch';
import CustomButton from '../utils/CustomButton';
import CustomTable from '../utils/CustomTable';

const Users = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleAddUser = () => {
    // User logic goes here
  };

  const sampleData = [
    { userName: "Amruta_Test", property: "Ikea Test", AccessLevel: "Property Viewer" },
    { userName: "Amruta_Test2", property: "Ikea Test2", AccessLevel: "Property Admin" },
    { userName: "Amruta_Test3", property: "Ikea Test3", AccessLevel: "Property Viewer" },
  ];

  const filteredData = sampleData.filter((item) =>
    item.userName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const columns = [
    { id: 'userName', label: '' },
    { id: 'property', label: 'Property', align: 'center' },
    { id: 'AccessLevel', label: 'Access Level', align: 'center' },
    { id: 'Action', label: 'Action', align: 'center' },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <img
            src="/assets/icons/left_Arrow.svg"
            alt="Left Arrow"
            style={{
              borderRadius: '50%',
              backgroundColor: "#E2E8F0",
              padding: '10px',
              width: '10px',
              height: '10px',
            }}
          />
          <Typography sx={{ color: "#3275AF" }}>Users</Typography>
        </Box>
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
      </Box>

      <CustomTable
        columns={columns}
        data={filteredData}
        customStyles={{
          // Custom styles can be added here if needed
        }}
      />
    </Box>
  );
};

export default Users;
