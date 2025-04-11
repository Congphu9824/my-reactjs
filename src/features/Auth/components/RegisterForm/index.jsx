import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Avatar, Typography } from '@mui/material';
import LockOutlined from '@mui/icons-material/LockOutlined';
import './style.scss';
import PasswordField from '../../../../components/form-controls/PasswordField';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

const schema = yup.object({
    FullName: yup
        .string()
        .required('Full name is required')
        .min(3, 'Full name must be at least 3 characters')
        .test('Full name must be at least 3 characters', (value) => {
           console.log(value);
            return value.split(' ').length >= 2; 
        }),
    Email: yup
        .string()
        .required('Email is required')
        .email('Invalid email format'),

    Password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),

    RetypePassword: yup
        .string()
        .required('Please confirm your password')
        .oneOf([yup.ref('Password')], 'Passwords must match'),
});

function RegisterForm({ onSubmit }) {
    const form = useForm({
        defaultValues: {
            FullName: '',
            Email: '',
            Password: '',
            RetypePassword: '',
        },
        resolver: yupResolver(schema),
        mode: "onTouched" // onTouched ✅ Show error after user touches input / all
    });

    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };

    return (
        <div className='register'>
            <Avatar className='register__avatar' sx={{ backgroundColor: 'red' }}>
                <LockOutlined className='register__lock' />
            </Avatar>

            <Typography className='register__title' component="h3" variant="h5">
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="FullName" label="Full Name" form={form} />
                <InputField name="Email" label="Email" form={form} />
                <PasswordField name="Password" label="Password" form={form}  />
                <PasswordField name="RetypePassword" label="Retype Password" form={form}  />

                <button type="submit" className='register__create' disabled={!form.formState.isValid} >
                         Create An Account
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;
