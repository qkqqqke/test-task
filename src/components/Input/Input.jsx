import React from 'react';
import { Field, ErrorMessage as Error } from 'formik';
import './input.css'

const Input = ({id, label, name, placeholder}) => {
    return (
        <div className="inputContainer">
            <label htmlFor="id">{label}</label>
            <Field name={name} id={id} placeholder={placeholder}/>
            <Error name={name}>{ (error)=><span>{error}</span> }</Error>
        </div>
    );
};

export default Input;