import Image from 'next/image';
import React from 'react';
import ContactImg from '../../../../public/assets/images/contact/contact-01.png';
import ContactShape from '../../../../public/assets/images/shape/contact-shape-01.png';
import ContactShapeTwo from '../../../../public/assets/images/shape/contact-shape-02.png';
import Link from 'next/link';
import FormStyleEight from '@/elements/form/FormStyleEight';

const ContactAreaOne = () => {
    return (
        <>
            <div id="homecontact" className="bd-contact__area theme-bg-secondary section-space p-relative fix">
                <div className="contact__shape">
                    <Image className="contact__shape-one" src={ContactShape} width={469} height={59} alt="image not found" />
                    <Image className="contact__shape-two" src={ContactShapeTwo} width={145} height={99} alt="image not found" />
                </div>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6 order-md-0 order-1 wow fadeInLeft" data-wow-delay=".3s">
                            <div className="section__title-wrapper section__title-space">
                                <span className="section__subtitle mb-15">GET IN TOUCH</span>
                                <h2 className="section__title">Feel Free Contact Me</h2>
                            </div>
                            <FormStyleEight />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 order-md-1 order-0 wow fadeInRight" data-wow-delay=".3s">
                            <div className="contact__info-wrapper">
                                <div className="contact__thumb">
                                    <Image src={ContactImg} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                </div>
                                <div className="contact__info-item">
                                    <ul>
                                        <li>
                                            <div className="contact__info">
                                                <div className="contact__info-icon">
                                                    <span>
                                                        <i className="icon-location"></i>
                                                    </span>
                                                </div>
                                                <div className="contact__info-content">
                                                    <h6><Link target="_blank" href="https://www.google.com/maps">672
                                                        Tallahassee Florida</Link></h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact__info">
                                                <div className="contact__info-icon">
                                                    <span>
                                                        <i className="icon-phone"></i>
                                                    </span>
                                                </div>
                                                <div className="contact__info-content">
                                                    <h6><Link href="tel:+13322078097">+13322078097</Link></h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact__info">
                                                <div className="contact__info-icon">
                                                    <span>
                                                        <i className="icon-envelope"></i>
                                                    </span>
                                                </div>
                                                <div className="contact__info-content">
                                                    <h6><Link href="mailto:me@portlu.com">me@portlu.com</Link></h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactAreaOne;