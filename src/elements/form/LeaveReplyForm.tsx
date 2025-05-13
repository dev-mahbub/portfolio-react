"use client"
import ErrorMsgTwo from '@/elements/form/FormErrorMsg/ErrorMsgTwo';
import { leave_reply } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';

const LeaveReplyForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                website: "",
                comment: ""
            },
            validationSchema: leave_reply,
            onSubmit: (values, { resetForm }) => {
                console.log(values);
                toast.success("Success! Your contact successfully!");
                resetForm();
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="postbox__comment-input">
                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Name*"
                            />
                        {touched.name && <ErrorMsgTwo error={errors.name} />}
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="postbox__comment-input">
                        <input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="Email"
                                />
                        {touched.email && <ErrorMsgTwo error={errors.email} />}
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-12">
                        <div className="postbox__comment-input">
                        <input
                                    type="text"
                                    name="website"
                                    value={values.website}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Website"
                                    required
                                />
                        {touched.website && <ErrorMsgTwo error={errors.website} />}
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="postbox__comment-input">
                        <textarea cols={30} rows={10}
                                        className="textareaText"
                                        name="comment"
                                        value={values.comment}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Your Comment Here...'
                                        required
                                    >
                                    </textarea>
                                    {touched.comment && <ErrorMsgTwo error={errors.comment} />}
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="postbox__comment-agree d-flex align-items-start mb-25">
                            <input className="e-check-input" type="checkbox" id="e-agree" />
                            <label className="e-check-label" htmlFor="e-agree">Save my name, email, and website
                                in this browser for the next time I comment.</label>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="postbox__comment-form-btn">
                            <button type='submit' className="bd-btn is-btn-anim" >
                                <span className="bd-btn-inner">
                                    <span className="bd-btn-normal">Submit now</span>
                                    <span className="bd-btn-hover">Submit now</span>
                                    <i className="contentHidden"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default LeaveReplyForm;