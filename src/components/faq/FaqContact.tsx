import Link from 'next/link';
import React from 'react';

const FaqContact = () => {
    return (
        <>
                  <div className="contact__area section-space theme-bg-secondary">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact__item-wrapper style-two wow fadeIn" data-wow-delay=".3s">
                            <div className="contact__item-icon">
                                <span>
                                    <i className="icon-location"></i>
                                </span>
                            </div>
                            <div className="contact__item-content">
                                <span className="contact-item-subtitle">Location</span>
                                <h5><Link target="_blank" href="https://www.google.com/maps">672
                                        Tallahassee, USA</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact__item-wrapper style-two wow fadeIn" data-wow-delay=".5s">
                            <div className="contact__item-icon">
                                <span>
                                    <i className="icon-envelope"></i>
                                </span>
                            </div>
                            <div className="contact__item-content">
                                <span className="contact-item-subtitle">Email Address</span>
                                <h5><Link href="mailto:support@portlu.com">support@portlu.com</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact__item-wrapper style-two wow fadeIn" data-wow-delay=".7s">
                            <div className="contact__item-icon">
                                <span>
                                    <i className="icon-phone"></i>
                                </span>
                            </div>
                            <div className="contact__item-content">
                                <span className="contact-item-subtitle">Contact Number</span>
                                <h5><Link href="tel:+13322078097">+13322078097</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default FaqContact;