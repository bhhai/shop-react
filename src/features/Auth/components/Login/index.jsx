import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnSubmit = async (values) => {
    try {
      const action = login(values); //goi tu userSlice
      const resultAction = await dispatch(action); //dispatch
      unwrapResult(resultAction); //lay ket qua

      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
    } catch {
      enqueueSnackbar('Login failded! 😁', { variant: 'error' }); //noti
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleOnSubmit} />
    </div>
  );
}

export default Login;
