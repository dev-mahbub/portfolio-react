"use client"
import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { form_style_one_schema } from '@/utils/validation-schema';
import ErrorMsgTwo from './FormErrorMsg/ErrorMsgTwo';

const FormStyleTwo = () => {
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                fname: "",
                lname: "",
                phone: "",
                password: "",
                massage: ""
            },
            validationSchema: form_style_one_schema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Success! Your submission is now complete. Well done!");
                resetForm();
            },
        });
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-4 align-items-center justify-content-center">
                            <div className="col-lg-6">
                                <div className="from__input-box">
                                    <div className="form__input-title">
                                        <label>first Name<span>*</span></label>
                                    </div>
                                    <div className="form__input">
                                        <input
                                            type="text"
                                            name="fname"
                                            value={values.fname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {touched.fname && <ErrorMsgTwo error={errors.fname} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box">
                                    <div className="form__input-title">
                                        <label>Last name<span>*</span></label>
                                    </div>
                                    <div className="form__input">
                                        <input
                                            name="lname"
                                            id="lname"
                                            type="text"
                                            value={values.lname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {touched.lname && <ErrorMsgTwo error={errors.lname} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box">
                                    <div className="form__input-title">
                                        <label>Phone Number<span>*</span></label>
                                    </div>
                                    <div className="form__input">
                                        <input
                                            type="text"
                                            name='phone'
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                            placeholder="" />
                                        {touched.phone && <ErrorMsgTwo error={errors.phone} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box">
                                    <div className="form__input-title">
                                        <label>Password<span>*</span></label>
                                    </div>
                                    <div className="form__input">
                                        <input
                                            type="password"
                                            name='password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                            placeholder="" />
                                        {touched.password && <ErrorMsgTwo error={errors.password} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="from__input-box">
                                    <div className="form__input-title">
                                        <label>Your Message<span>*</span></label>
                                    </div>
                                    <div className="form__input">
                                        <textarea cols={30} rows={10}
                                            name="massage"
                                            value={values.massage}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="massage"
                                            placeholder="">
                                        </textarea>
                                        {touched.massage && <ErrorMsgTwo error={errors.massage} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormStyleTwo;