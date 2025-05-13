"use client"
import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { form_style_five_schema } from '@/utils/validation-schema';
import ErrorMsg from './FormErrorMsg/ErrorMsg';

const FormStyleFive = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                phone: "",
                subject: "",
                massage: ""
            },
            validationSchema: form_style_five_schema,
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
                            <div className="col-lg-6">
                                <div className="from__input-box has-icon icon-right">
                                    <div className="form__input">
                                        <input
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                            placeholder="Your Name"
                                        />
                                        <div className=""><span><i className="fa-solid fa-user"></i></span></div>
                                    </div>
                                    {touched.name && <ErrorMsg error={errors.name} />}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box has-icon icon-right">
                                    <div className="form__input">
                                        <input
                                            type="text"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                            placeholder="Your Email" />
                                        <div className=""><span><i className="fa-solid fa-envelope"></i></span></div>
                                    </div>
                                    {touched.email && <ErrorMsg error={errors.email} />}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box has-icon icon-right">
                                    <div className="form__input">
                                        <input
                                            type="text"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                            placeholder="Your Phone" />
                                        <div className=""><span><i className="fa-solid fa-phone"></i></span></div>
                                    </div>
                                    {touched.phone && <ErrorMsg error={errors.phone} />}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="from__input-box has-icon icon-right">
                                    <div className="form__input">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={values.subject}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                            placeholder="Subject" />
                                        <div className=""><span><i className="fa-solid fa-book"></i></span></div>
                                    </div>
                                    {touched.subject && <ErrorMsg error={errors.subject} />}
                                </div>
                            </div>
                            <div className="col-lg-12 text-center">

                                <div className="from__input-box has-icon icon-right">
                                    <div className="form__input">
                                        <textarea cols={30} rows={10}
                                            name="massage"
                                            value={values.massage}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="massage"
                                            placeholder="Your Massage">
                                        </textarea>
                                        <div className=""><span><i className="fa-solid fa-pen"></i></span></div>
                                    </div>
                                    {touched.massage && <ErrorMsg error={errors.massage} />}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormStyleFive;