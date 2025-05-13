import React from 'react';
import bannerImg from '../../../../public/assets/images/banner/banner-02.png';
import bannerBg from '../../../../public/assets/images/bg/banner-bg-01.png';
import Image from 'next/image';
import Link from 'next/link';
import SocialIcon from '@/components/common/social-icon/SocialIcon';

const MinimalPortfolioBanner = () => {
    return (
        <>
            {/* -- Banner area start -- */}
            <section className="banner__area banner-height d-flex justify-content-center align-items-center style-two p-relative fix">
                <div className="bg__thumb-position include-bg" style={{ backgroundImage: `url(${bannerBg.src})` }}></div>
                {/* -- social -- */}
                <div className="theme__social banner-social style-two">
                    <SocialIcon />
                </div>
                {/* -- when slide active remove this class -- */}
                <div className="swiper banner__active overflow-visible">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide banner_more_item">
                            <div className="container">
                                <div className="row align-items-center gy-5">
                                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                                        <div className="banner__content p-relative">
                                            <h1 className="banner__title large wow fadeInUp" data-wow-delay=".3s"
                                                data-wow-duration=".7s"><span className="bd-text-primary">Hello, I’m Jhone <br />
                                                </span> A Portfolio Agency Based in Florida </h1>
                                            <p className="wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">We are a
                                                minimal portfolio agency that specializes in providing quality website and
                                                branding solutions to design and coding.</p>
                                            <div className="banner__btn wow fadeInUp" data-wow-delay=".6s"
                                                data-wow-duration="1.1s">
                                                <Link className="bd-btn is-btn-anim" href="/portfolio">
                                                    <span className="bd-btn-inner">
                                                        <span className="bd-btn-normal">Get my work</span>
                                                        <span className="bd-btn-hover">Get my work</span>
                                                        <i className="contentHidden"></i>
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                                        <div className="banner__thumb-wrapper wow fadeInRight" data-wow-delay=".8s"
                                            data-wow-duration="1.2s">
                                            <div className="banner__bg"></div>
                                            <div className="banner__thumb">
                                                <Image src={bannerImg} style={{ width: "100%", height: "auto" }}
                                                    alt="image not found" />
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

export default MinimalPortfolioBanner;