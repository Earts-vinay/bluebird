
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

const LOGIN_API_URL = 'http://sapphire.kamivision.ai/api/login';
const AUTH_API_URL = 'http://sapphire.kamivision.ai/api/auth';
const LOGOUT_API_URL = 'http://sapphire.kamivision.ai/api/logout';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();
      params.append('email', credentials.email);
      params.append('password', credentials.password);

      const loginResponse = await axios.post(LOGIN_API_URL, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (loginResponse.data.code === 200) {
        const token = loginResponse.data.data.token;
        const userId = loginResponse.data.data.user.id;
        const sessionId = `session_${userId}`; // Create a unique session ID

        // Store session data
        sessionStorage.setItem(sessionId, JSON.stringify({ token, userId }));
        localStorage.setItem('activeSessionId', sessionId); // Track active session ID

        // Optionally, store a timestamp of login to handle inactivity
        localStorage.setItem('loginTimestamp', Date.now().toString());

        return {
          loginData: loginResponse.data,
        };
      } else {
        return rejectWithValue(loginResponse.data);
      }
    } catch (error) {
      console.error('Error response:', error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const sessionId = localStorage.getItem('activeSessionId');
      const sessionData = JSON.parse(sessionStorage.getItem(sessionId));

      if (!sessionData) {
        return rejectWithValue({ msg: 'No session data found' });
      }

      const { token } = sessionData;

      const response = await axios.post(LOGOUT_API_URL, {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        sessionStorage.removeItem(sessionId); // Remove session data
        localStorage.removeItem('activeSessionId'); // Remove active session ID
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (error) {
      console.error('Error response:', error.response);
      return rejectWithValue(error.response.data);
    }
  }
);
