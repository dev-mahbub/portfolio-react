import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CtaShapeOne from '../../../public/assets/images/shape/cta-shape-01.png';
import CtaShapeTwo from '../../../public/assets/images/shape/cta-shape-02.png';

const CtaStyleThree = () => {
    return (
        <>
            <div id="homecontact" className="cta__area p-relative style-tow z-index-1">
                <div className="container">
                    <div className="cta__wrapper cta__item is-sec-space theme-bg-quaternary p-relative fix">
                        <div className="cta__shape-wrapper">
                            <div className="cta__shape-six">
                                <Image src={CtaShapeOne} style={{ width: "100%", height: "auto" }} alt="image not found" />
                            </div>
                            <div className="cta__shape-seven">
                                <Image src={CtaShapeTwo} style={{ width: "100%", height: "auto" }} alt="image not found" />
                            </div>
                        </div>
                        <div className="row g-5 align-items-center justify-content-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="cta__content-wrap">
                                    <div className="cta__content">
                                        <div className="section__title-wrapper">
                                            <div className="section__title-wrapper">
                                                <span className="section__subtitle bg-solid-field">SUBSCRIBE NOW</span>
                                                <h2 className="section__title mb-20">Get Started Now</h2>
                                                <p className="section__paragraph">Understanding the client,s condition and
                                                    situation in our best way. we support and appropriate all time</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="cta__form">
                                    <form action="#">
                                        <div className="cta__input">
                                            <input type="text" placeholder="Enter email" />
                                            <Link href="/contact" className="bd-btn is-bg-gradient">Submit Now</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaStyleThree;