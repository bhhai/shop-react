import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';
import PropTypes from 'prop-types';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnSubmit = async (values) => {
    try {
      values.username = values.email;

      const action = register(values); //goi tu userSlice
      const resultAction = await dispatch(action); //dispatch
      unwrapResult(resultAction); //lay ket qua

      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      enqueueSnackbar('Register successfully! 😁', { variant: 'success' }); //noti
    } catch {
      enqueueSnackbar('Email is already exist! 😁', { variant: 'error' }); //noti
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleOnSubmit} />
    </div>
  );
}

export default Register;
