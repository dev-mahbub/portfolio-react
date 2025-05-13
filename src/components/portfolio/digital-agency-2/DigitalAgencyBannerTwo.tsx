import Link from 'next/link';
import React from 'react';
import BannerBg from '../../../../public/assets/images/banner/banner-06.png';
import BannerDotArrow from '../../../../public/assets/images/shape/dot-arrow.png';
import Image from 'next/image';
import DigitalAgencyBrandSlider from './DigitalAgencyBrandSlider';

const DigitalAgencyBannerTwo = () => {
    return (
        <>
            {/* -- Banner area start -- */}
            <section className="banner__area banner-height style-six p-relative  theme-bg-primary fix">
                {/* -- when slide active remove this class -- */}
                <div className="swiper banner__active overflow-visible">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide banner_more_item">
                            <div className="container">
                                <div className="row align-items-center g-5">
                                    <div className="col-xl-7 col-lg-6 wow fadeInUp" data-wow-delay=".3s"
                                        data-wow-duration=".7s">
                                        <div className="banner__content p-relative">
                                            <span className="section__subtitle bg-field wow fadeInUp" data-wow-delay=".3s"
                                                data-wow-duration=".7s">DIGITAL EXPERIENCE</span>
                                            <h1 className="banner__title xlarge wow fadeInUp" data-wow-delay=".5s"
                                                data-wow-duration=".9s">We Are Digital <span
                                                    className="gradient-text-2">Agency.</span></h1>
                                            <p className="wow fadeInUp" data-wow-delay=".6s" data-wow-duration="1.1s">A digital
                                                agency we are specialize in designing, building and scaling beautiful by
                                                design and work </p>
                                            <div className="banner__btn-wrap wow fadeInUp" data-wow-delay=".8s"
                                                data-wow-duration="1.3s">
                                                <div className="banner__btn">
                                                    <Link className="bd-btn is-bg-gradient" href="/portfolio"><span
                                                        className="">Get my works<i className="contentHidden"></i></span></Link>
                                                </div>
                                                <div className="banner__btn">
                                                    <Link className="bd-btn is-border-gradient is-bg-none" href="/about"><span
                                                        className="">Know more<i className="contentHidden"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* -- brand style -- */}
                                        <div className="brand__area">
                                            <DigitalAgencyBrandSlider />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner__thumb bg__thumb-position include-bg" style={{ backgroundImage: `url(${BannerBg.src})` }}>
                </div>
                <div className="banner-bg"></div>
                <div className="banner__thumb-shape">
                    <Image src={BannerDotArrow} style={{ width: "100%", height: "auto" }} alt="image not found" />
                </div>
            </section>
            {/* -- Banner area end -- */}
        </>
    );
};

export default DigitalAgencyBannerTwo;