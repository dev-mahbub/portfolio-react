"use client"
import { login_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ErrorMsg from './FormErrorMsg/ErrorMsg';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const [showPass, setShowPass] = useState(false);
    const router = useRouter()
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                email: "",
                password: ""
            },
            validationSchema: login_schema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Login Success");
                resetForm();
                router.push('/')
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form__input-box">
                    <div className="form__input style-two">
                        <input
                            className="inputText"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="Email or Username"
                        />
                        <div className="form__icon"><span><i className="fa-light fa-user"></i></span></div>
                    </div>
                    {touched.email && <ErrorMsg error={errors.email} />}
                </div>
                <div className="form__input-box">
                    <div className="form__input style-two">
                        <input
                            className="inputText"
                            type={showPass ? "text" : "password"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="Password"
                        />
                        <span
                            className="login-input-eye"
                            onClick={() => setShowPass(!showPass)}
                        >
                            {showPass ? <i className="fa fa-eye pass-icon"></i> :<i className="fa-solid fa-eye-slash pass-icon"></i>}
                        </span>
                        <div className="form__icon"><span><i className="fa-light fa-lock"></i>
                        </span>
                        </div>
                        {touched.password && <ErrorMsg error={errors.password} />}
                    </div>
                </div>
                <div className="login__option mb-30 d-sm-flex justify-content-between">
                    <div className="login__remember">
                        <input type="checkbox" id="bd-remember" />
                        <label htmlFor="bd-remember">Remember me</label>
                    </div>
                    <div className="login__forgot">
                        <Link href="/forgot">Forgot Password?</Link>
                    </div>
                </div>
                <div className="login__btn">
                    <button className="bd-btn w-100" type="submit">Sign in</button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;