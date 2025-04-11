import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



// name used in react-hook-form to identify input - lable   
const PasswordField = ({ name, label, form, disabled = false }) => {
  const {control,formState: { errors } } = form;

  const hasError = !!errors[name];

  // opens and closes the password field
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <FormControl
      fullWidth
      margin="normal"
      variant="outlined"
      error={hasError}
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller name={name}  control={control} render={({ field }) => (
          <OutlinedInput
            {...field}
            id={name}
            type={showPassword ? 'text' : 'password'}
            label={label}
            disabled={disabled}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end" type="button">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        )}
      />
      {
          hasError && (<FormHelperText>{errors[name]?.message}</FormHelperText>)
      }
    </FormControl>
  );
};


PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  disabled: PropTypes.bool
};

export default PasswordField;
