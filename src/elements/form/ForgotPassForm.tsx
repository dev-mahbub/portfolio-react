"use client"
import { forgotten_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import ErrorMsg from './FormErrorMsg/ErrorMsg';

const ForgotPassForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                email: "",
            },
            validationSchema: forgotten_schema,
            onSubmit: (values, { resetForm }) => {
                toast.success("A password reset link has been sent to your email. Please check your inbox.");
                resetForm();
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form__input-box">
                    <div className="form__input style-two">
                        <input type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="Enter your email" />
                        <div className="form__icon"><span><i className="fa-light fa-envelope"></i></span>
                        </div>
                        {touched.email && <ErrorMsg error={errors.email} />}
                    </div>
                </div>
                <div className="login__btn">
                    <button className="bd-btn w-100" type="submit">Send Request</button>
                </div>
            </form>
        </>
    );
};

export default ForgotPassForm;