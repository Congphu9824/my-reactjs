import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { register } from '../../userSlice';
import { useDispatch } from 'react-redux'; // ✅ Thêm dòng này

Register.propTypes = {
    
};

function Register(props) {
    const dispatch = useDispatch(); // ✅ Khởi tạo dispatch

    const handleSubmit = async (values) => {
        try{
            values.FullName = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            
        }catch(error){
            console.log("Failed to register", error);
        }
    }
    return (
        <div>
            <RegisterForm  onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;