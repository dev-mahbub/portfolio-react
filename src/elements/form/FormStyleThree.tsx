"use client"
import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { form_style_three_schema } from '@/utils/validation-schema';
import ErrorMsg from './FormErrorMsg/ErrorMsg';

const FormStyleThree = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                fname: "",
                lname: "",
                phone: "",
                password: "",
                massage: ""
            },
            validationSchema: form_style_three_schema,
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
                        <div className="row g-5 align-items-center justify-content-center">
                            <div className="col-lg-12">
                                <div className="from__input-box from-flex">
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
                                            placeholder=""
                                            required
                                        />
                                        {touched.fname && <ErrorMsg error={errors.fname} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="from__input-box from-flex">
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
                                            placeholder=""
                                            required
                                        />
                                        {touched.lname && <ErrorMsg error={errors.lname} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="from__input-box from-flex">
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
                                            placeholder=""
                                            required
                                        />
                                        {touched.phone && <ErrorMsg error={errors.phone} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="from__input-box from-flex">
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
                                            placeholder=""
                                        />
                                        {touched.password && <ErrorMsg error={errors.password} />}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 text-center">

                                <div className="from__input-box from-flex">
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
                                        {touched.massage && <ErrorMsg error={errors.massage} />}
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

export default FormStyleThree;