import RegisterForm from '@/elements/form/RegisterForm';
import Link from 'next/link';
import React from 'react';
import googleImg from '../../../public/assets/images/icons/google.png';
import facebookImg from '../../../public/assets/images/icons/facebook.png';
import twiterImg from '../../../public/assets/images/icons/twiter.png';
import Image from 'next/image';

const RegisterMain = () => {
    return (
        <>
            <section className="bd-login__area section-space">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="login__wrapper">
                            <div className="login__top mb-30 text-center">
                                <h3 className="login__title">Register Now!</h3>
                                <p>You can signup with you social account below</p>
                            </div>
                            <div className="login__form">
                              <RegisterForm/>
                                <div className="login__social text-center">
                                    <h6 className="login__social-header">Or Sign in with</h6>
                                    <div className="login__social-item d-flex flex-wrap justify-content-sm-center">
                                        <Link href="#">
                                            <span className="login__social-icon">
                                            <Image src={googleImg} style={{ width: "100%", height: "auto" }} alt="image" />
                                            </span>
                                            <span>Google</span>
                                        </Link>
                                        <Link href="#">
                                            <span className="login__social-icon">
                                            <Image src={facebookImg} style={{ width: "100%", height: "auto" }} alt="image" />
                                            </span>
                                            <span>Facebook</span>
                                        </Link>
                                        <Link href="#">
                                            <span className="login__social-icon">
                                            <Image src={twiterImg} style={{ width: "100%", height: "auto" }} alt="image" />
                                            </span>
                                            <span>Twitter</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="login__register-now">
                                    <p>Already have an account? <Link href="login">Login</Link></p>
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

export default RegisterMain;