import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props; //lấy từ thằng cha
  const { errors } = form;
  const hasErr = errors[name]; //khi focus vao input
  return (
    <Controller
      name={name}
      control={form.control} //hookform
      as={TextField}
      //bo vao TextField

      variant="outlined"
      margin="normal"
      label={label}
      fullWidth
      disable={disable}
      error={!!hasErr}
      helperText={errors[name]?.message}
    />
  );
}

export default InputField;
