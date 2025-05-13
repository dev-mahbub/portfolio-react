import React from 'react';
import landignAward from '../../../public/assets/images/shape/landing-award.png';
import laptopBannerImg from '../../../public/assets/images/landing/banner/landing-laptop.png';
import mobileImg from '../../../public/assets/images/landing/banner/landing-mobile.png';
import Image from 'next/image';

const BannerAreaOne = () => {
    return (
        <>
            <div className="bd-demo-banner-area theme-bg-secondary fix">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="bd-demo-banner-content">
                                <div className="demo-banner-top-inner wow fadeInUp" data-wow-delay=".3s">
                                    <div className="demo-banner-top">
                                        <div className="demo-icon mb-5">
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                        </div>
                                        <div className="content">
                                            <span className="subtitle">8500+ Trust Customer</span>
                                        </div>
                                    </div>
                                    <div className="demo-banner-top">
                                        <div className="icon mb-5">
                                            <Image src={landignAward} width={17} height={19} alt="image not found" />
                                        </div>
                                        <div className="content">
                                            <span className="subtitle">#1 Top New theme</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content wow fadeInUp" data-wow-delay=".4s">
                                    <h1 className="demo-banner-title mb-20">Portlu - Personal <span
                                        className="bd-text-primary">Portfolio</span> & <span className="bd-text-primary">Agency
                                        </span> {" "}Next js Template</h1>
                                    <p>We are a personal portfolio and creative agency website that is a specializes in
                                        providing
                                        high-quality design and branding solutions to businesses and individuals.</p>
                                </div>
                                <div className="demo-banner-btn mt-30 wow fadeInUp" data-wow-delay=".6s">
                                    <a className="bd-btn is-btn-anim" href="#homesDemos">
                                        <span className="bd-btn-inner">
                                            <span className="bd-btn-normal">See live demos</span>
                                            <span className="bd-btn-hover">See live demos</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="demo-banner-thumb-wrapper position-relative">
                                <div className="thumbnail wow fadeInRight" data-wow-delay=".3s">
                                    <Image src={laptopBannerImg} style={{ width: '100%', height: "auto" }} alt="Education Banner" />
                                </div>
                                <div className="mobile-thumb wow fadeInUp" data-wow-delay=".5s">
                                    <Image src={mobileImg} style={{ width: '100%', height: "auto" }} alt="image not found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerAreaOne;