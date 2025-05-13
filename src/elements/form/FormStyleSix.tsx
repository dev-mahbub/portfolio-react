"use client"
import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { form_style_five_schema } from '@/utils/validation-schema';
import ErrorMsgTwo from './FormErrorMsg/ErrorMsgTwo';

const FormStyleSix = () => {
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
                                <div className="floating__form-input floating-bg">
                                    <input
                                        className="inputText"
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        placeholder=""
                                    />
                                    <span className="floating-label">Name</span>
                                </div>
                                {touched.name && <ErrorMsgTwo error={errors.name} />}
                            </div>
                            <div className="col-lg-6">
                                <div className="floating__form-input floating-bg">
                                    <input
                                        className="inputText"
                                        type="text"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        placeholder=""
                                    />
                                    <span className="floating-label">Your Email</span>
                                </div>
                                {touched.email && <ErrorMsgTwo error={errors.email} />}
                            </div>
                            <div className="col-lg-6">
                                <div className="floating__form-input floating-bg">
                                    <input className="inputText"
                                        type="number"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        placeholder="" />
                                    <span className="floating-label">Phone Number</span>
                                </div>
                                {touched.phone && <ErrorMsgTwo error={errors.phone} />}
                            </div>
                            <div className="col-lg-6">
                                <div className="floating__form-input floating-bg">
                                    <input className="inputText"
                                        type="text"
                                        name="subject"
                                        value={values.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <span className="floating-label">Subject</span>
                                </div>
                                {touched.subject && <ErrorMsgTwo error={errors.subject} />}
                            </div>
                            <div className="col-lg-12 text-center">
                                <div className="from__input-box">
                                    <div className="floating__form-input floating-bg">
                                        <textarea cols={30} rows={10}
                                            className="textareaText"
                                            name="massage"
                                            value={values.massage}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        >
                                        </textarea>
                                        <span className="floating-label-two">Your Message</span>
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

export default FormStyleSix;