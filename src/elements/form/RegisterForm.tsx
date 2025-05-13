"use client"
import { register_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ErrorMsg from './FormErrorMsg/ErrorMsg';

const RegisterForm = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConPass, setShowConPass] = useState(false);
    const router = useRouter()
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                password: "",
                passwordConfirmation: ""
            },
            validationSchema: register_schema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Registration Successfully");
                resetForm();
                router.push('/login')
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form__input-box">
                    <div className="form__input style-two">
                        <input
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Enter Your Name"
                            required
                        />
                        <div className="form__icon"><span><i className="fa-light fa-user"></i></span></div>
                    </div>
                    {touched.name && <ErrorMsg error={errors.name} />}
                </div>
                <div className="form__input-box">
                    <div className="form__input style-two">
                        <input
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"
                            placeholder="Enter your email"
                            id="email"
                            required
                        />
                        <div className="form__icon"><span><i className="fa-light fa-envelope"></i></span>
                        </div>
                        {touched.email && <ErrorMsg error={errors.email} />}
                    </div>
                </div>
                <div className="form__input-box">
                    <div className="form__input style-two">
                        <input
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            id="password"
                            required
                        />
                        <span
                            className="login-input-eye"
                            onClick={() => setShowPass(!showPass)}
                        >
                            {showPass ? <i className="fa fa-eye pass-icon"></i> : <i className="fa-solid fa-eye-slash pass-icon"></i>}
                        </span>
                        <div className="form__icon"><span><i className="fa-light fa-lock"></i>
                        </span>
                        </div>
                        {touched.password && <ErrorMsg error={errors.password} />}
                    </div>
                </div>
                <div className="form__input-box">
                    <div className="form__input style-two">
                        <input
                            name="passwordConfirmation"
                            value={values.passwordConfirmation}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type={showConPass ? "text" : "password"}
                            placeholder="Confirm Password"
                            id="passwordConfirmation"
                            required
                        />
                        <span
                            className="login-input-eye"
                            onClick={() => setShowConPass(!showConPass)}
                        >
                            {showPass ? <i className="fa fa-eye pass-icon"></i> : <i className="fa-solid fa-eye-slash pass-icon"></i>}
                        </span>
                        <div className="form__icon"><span><i className="fa-light fa-lock"></i>
                        </span>
                        </div>
                        {touched.passwordConfirmation && (
                            <ErrorMsg error={errors.passwordConfirmation} />
                        )}
                    </div>
                </div>
                <div className="login__option mb-30 d-sm-flex justify-content-between">
                    <div className="login__remember">
                        <input type="checkbox"
                         id="bd-remember" />
                        <label htmlFor="bd-remember">Remember me</label>
                    </div>
                </div>
                <div className="login__btn">
                    <button className="bd-btn w-100" type="submit">Sign up</button>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;