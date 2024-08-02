import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
  
    try {
        console.log("credentials", credentials)
      const response = await axios.post('/api/login', credentials);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data); 
    }
  }
);
