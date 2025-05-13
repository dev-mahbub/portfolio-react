import ForgotPassForm from '@/elements/form/ForgotPassForm';
import Link from 'next/link';
import React from 'react';

const ForgotPassMain = () => {

    return (
        <>
            <section className="bd-login__area section-space">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="login__wrapper">
                            <div className="login__top mb-30 text-center">
                                <h3 className="login__title">Forgot Password?</h3>
                                <p>Enter your email address to request password reset.</p>
                            </div>
                            <div className="login__form">
                              <ForgotPassForm/>
                                <div className="login__register-now">
                                    <p>Remember your password? <Link href="/login">Login</Link></p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ForgotPassMain;