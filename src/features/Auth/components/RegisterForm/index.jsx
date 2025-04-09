import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Avatar, Typography } from '@mui/material';
import LockOutlined from '@mui/icons-material/LockOutlined';

// user nhập data vào form

RegisterForm.propTypes = {
    onSubmit: PropTypes.func, // Corrected prop name
};

function RegisterForm(props) {
    const schema = yup.object({
    title: yup.string().required('Please enter your todo title').min(5, 'Title must be at least 5 characters long'),
  })
  .required()
    const form = useForm({
        defaultValues: {
            FullName: '',
            Email: '',
            Password: '',
            RetypePassword: '',

        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = (values) => {
        console.log('Form submit', values);
        const { onSubmit } = props; 
        if (onSubmit) {
            onSubmit(values); // Call the onSubmit function passed from the parent component
        }
        form.reset(); // Reset the form after submission
    };

    return (
        <div>
            <Avatar>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography component="h3" variant="h5">
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="FullName" label="Full Name" form={form} />
                <InputField name="Email" label="Email" form={form} />
                <InputField name="Password" label="Password" form={form} />
                <InputField name="RetypePassword" label="Retype Password" form={form} />
            </form>
        </div>
      
    );
}

export default RegisterForm;