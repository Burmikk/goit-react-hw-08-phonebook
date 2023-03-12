import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'shared/api/authApi';

export const register = createAsyncThunk(
  'auth/register',
  async (value, { rejectWithValue }) => {
    try {
      const result = await api.register(value);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (value, { rejectWithValue }) => {
    try {
      const result = await api.login(value);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logOut();
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);

      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
