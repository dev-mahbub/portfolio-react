"use client"
import { service_contact } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import ErrorMsgTwo from "./FormErrorMsg/ErrorMsgTwo";

const ContactServiceForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                name: "",
                email: "",
                massage: ""
            },
            validationSchema: service_contact,
            onSubmit: (values, { resetForm }) => {
                toast.success("Success! Your submission is now complete. Well done!");
                resetForm();
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="from__input-box">
                    <div className="form__input style-two">
                        <input type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="First Name" />
                    </div>
                </div>
                <div className="from__input-box">
                    <div className="form__input style-two">
                        <input type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="Email" />
                    </div>
                </div>

                <div className="from__input-box">
                    <div className="form__input style-two">
                        <textarea cols={30} rows={10}
                            name="massage"
                            value={values.massage}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="massage"
                            placeholder="Your Massage">
                        </textarea>
                        {touched.massage && <ErrorMsgTwo error={errors.massage} />}
                    </div>
                </div>
                <div className="contact__btn">
                    <button className="bd-btn w-100" type="submit">Submit now</button>
                </div>
            </form>
        </>
    );
};

export default ContactServiceForm;
