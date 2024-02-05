import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { initialValues, schemas } from './FormInitialHelper.js';
import  Input  from '../Input/Input.jsx'
import Button from '../Button/Button.jsx';
import './FeedbackForm.css'
import '../Button/Button.css'

const FeedbackForm = () => {

    const [buttonStyles, setButtonStyles] = useState('button');

    return (
        <Formik initialValues={initialValues}
            validationSchema={schemas.custom}
            onSubmit={() =>  {setButtonStyles(buttonStyles + ' success') }}

        >
            <Form className='form'>
                <Input
                name = 'userName'
                id='userName'
                placeholder = 'Имя'
                />
                 <Input
                name = 'email'
                id='email'
                placeholder = 'E-mail'
                />
                 <Input
                name = 'text'
                id='ext'
                placeholder = 'Текст'
                />
                <Button style={buttonStyles}>Отправить</Button>
            </Form>
        </Formik>
    );
};

export default FeedbackForm;