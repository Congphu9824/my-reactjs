import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux'; 
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

Register.propTypes = {
    closeDialog: PropTypes.func,  // Nhận prop closeDialog
};

function Register(props) { // Nhận props trực tiếp
    const { closeDialog } = props;  // Destructuring closeDialog từ props
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            const resultAction = await dispatch(register(values));
            const user = unwrapResult(resultAction);
            
            console.log("Register successfully", user);
            enqueueSnackbar('Register successfully', { 
                variant: 'success',
                autoHideDuration: 2000
            });
            
        } catch (error) {
            console.log("Failed to register", error);
            enqueueSnackbar(error.message || 'Register failed', {
                variant: 'error',
                autoHideDuration: 2000
            });
        } finally {
            // Đóng dialog trong cả trường hợp thành công và thất bại
            if (closeDialog) {
                closeDialog(); // Gọi closeDialog từ props
            }
        }
    };

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;
