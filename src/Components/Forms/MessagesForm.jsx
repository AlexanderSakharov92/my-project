import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";

const MessagesForm = (props) => {
    return (
        <Formik initialValues = {{message: ''}}
                onSubmit={(values, actions) => {
                    props.addPost(values.message);
                    actions.resetForm()
                }}
                validate={values => {
                    const errors = {}
                    if (values.message.length > 30) {
                        errors.message = 'max 30 symbols'
                    }
                    return errors
                }}
        >
            {({values}) => (
                <Form>
                    <Field name='message' type='message' as='textarea' placeholder='Пиши сюда'/>
                    <button type="submit" disabled={values.message === ''}>Send</button>
                    <ErrorMessage name="message" component="div"/>

                </Form>)}
        </Formik>
    )
}
export default MessagesForm;