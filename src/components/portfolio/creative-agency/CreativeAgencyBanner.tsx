import Link from 'next/link';
import React from 'react';

import bannerBg from '../../../../public/assets/images/banner/banner-03.png';
import SocialIcon from '@/components/common/social-icon/SocialIcon';

const CreativeAgencyBanner = () => {
    return (
        <>
            {/* -- Banner area start -- */}
            <section className="banner__area banner-height d-flex align-items-center style-three p-relative fix">
                <div className="banner__bg-shape">
                </div>
                <div className="bg__thumb-position include-bg is-overlay" style={{ backgroundImage: `url(${bannerBg.src})` }}>
                </div>
                {/* -- social -- */}
                <div className="theme__social banner-social style-three d-none d-sm-block">
                    <SocialIcon />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* -- when slide active remove this class -- */}
                            <div className="swiper banner__active overflow-visible">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide banner_more_item">
                                        <div className="banner__content text-center p-relative">
                                            <h1 className="banner__title xlarge wow fadeInUp" data-wow-delay=".3s"
                                                data-wow-duration=".7s">The Best <br /><span className="gradient-text-1">Creative
                                                    Agency</span> </h1>
                                            <p className="wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">Our agency
                                                is dedicated to crafting compelling narratives that not only engage your
                                                audience but also drive results. </p>
                                            <div className="banner__btn-wrap justify-content-center wow fadeInUp"
                                                data-wow-delay=".6s" data-wow-duration="1.1s">
                                                <Link className="bd-btn is-bg-gradient" href="/portfolio"><span className="">Get my
                                                    works<i className="contentHidden"></i></span></Link>
                                                <div className="banner__btn">
                                                    <Link href="/contact" className="underline-btn">
                                                        Contact me
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- Banner area end -- */}
        </>
    );
};

export default CreativeAgencyBanner;