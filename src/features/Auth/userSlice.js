import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StorageKeys from 'constants/storage-keys';
import userApi from '../../api/userApi';

export const register = createAsyncThunk('users/register', async (payload) => {
  // call Api to register
  const data = await userApi.register(payload); //lay data - goi ham register() tu folder api

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.data.user));
  return data.data.user;
});

export const login = createAsyncThunk('users/login', async (payload) => {
  // call Api to login
  const data = await userApi.login(payload); //data tra ve
  console.log('data a: ', data.data.jwt);
  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.data.user));

  return data.data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout(state) {
      //clear local storage
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);

      //clear state
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload; // == data.user
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload; // == data.user
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer; //default export
