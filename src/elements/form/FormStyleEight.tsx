"use client"
import { form_style_eight_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import ErrorMsgTwo from './FormErrorMsg/ErrorMsgTwo';

const FormStyleEight = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                subject: "",
                massage: ""
            },
            validationSchema: form_style_eight_schema,
            onSubmit: (values, { resetForm }) => {
                console.log(values);
                toast.success("Success! Your contact successfully!");
                resetForm();
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="floating__form-content">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="floating__form-input">
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
                                <span className="floating-label">Name*</span>
                            </div>
                            {touched.name && <ErrorMsgTwo error={errors.name} />}
                        </div>
                        <div className="col-12">
                            <div className="floating__form-input">
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
                                <span className="floating-label">Email*</span>
                            </div>
                            {touched.email && <ErrorMsgTwo error={errors.email} />}
                        </div>
                        <div className="col-lg-12">
                            <div className="floating__form-input">
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
                        <div className="col-12 text-center">
                            <div className="from__input-box">
                                <div className="floating__form-input">
                                    <textarea cols={30} rows={10}
                                        className="textareaText"
                                        name="massage"
                                        value={values.massage}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    >
                                    </textarea>
                                    <span className="floating-label-two">Message*</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact__btn">
                        <button type='submit' className="bd-btn w-100">Submit now</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormStyleEight;