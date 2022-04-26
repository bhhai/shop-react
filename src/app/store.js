import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Auth/userSlice';

//state tren store
const rootReducer = {
  user: userReducer, //import reducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
