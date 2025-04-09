import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form'; // connect input and  form control

// custom input connect with react-hook-form
InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    form: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { name, label, form, disabled } = props;

    // Lấy control và errors từ form show error
    const { control, formState: { errors } } = form;

    // 
    const hasError = !!errors[name];

    return (
        // bind input to form state
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
                    error={hasError}
                    helperText={hasError ? errors[name]?.message : ''}
                />
            )}
        />
    );
}

export default InputField;