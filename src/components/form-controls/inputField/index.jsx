import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';



// * InputField component for rendering a text input field with validation using react-hook-form
// * It uses Material-UI's TextField component for styling and layout
const InputField = ({ name, label, form, disabled = false, type = 'text' }) => {

  // control: Passed to the Controller to manage input data.
  const {control,formState: { errors }} = form;

  // Check if the current field has errors
  const hasError = !!errors[name];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          variant="outlined"
          margin="normal"
          disabled={disabled}
          type={type}
          error={hasError}
          helperText={hasError ? errors[name]?.message : ''}
        />
      )}
    />
  );
};

//
InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  form: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

export default InputField;
