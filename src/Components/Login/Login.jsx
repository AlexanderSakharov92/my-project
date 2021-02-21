import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

let Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: '', rememberMe: false }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                   props.setLoginThunkCreator(values.email, values.password, values.rememberMe);
                        setSubmitting(false);


                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                        <Field type="email" name="email" placeholder={'email'} />
                        <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                        <Field type="password" name="password" placeholder={'password'} />
                        <ErrorMessage name="password" component="div" />
                        </div>
                        <div>
                            <Field type='checkbox' name='rememberMe'/> remember me
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default Login;