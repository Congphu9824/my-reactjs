import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// user nhập data vào form

TodoForm.propTypes = {
    onSubmit: PropTypes.func, // Corrected prop name
};

function TodoForm(props) {
    const schema = yup.object({
    title: yup.string().required('Please enter your todo title').min(5, 'Title must be at least 5 characters long'),
  })
  .required()
    const form = useForm({
        defaultValues: {
            title: '',
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
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form} /> {/* Corrected 'lable' to 'label' */}
        </form>
    );
}

export default TodoForm;