"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bannerCircleShape from '../../../../public/assets/images/shape/circle-shape.png';
import bannerLineShape from '../../../../public/assets/images/shape/four-line-shape-1.png';
import bannerImage from '../../../../public/assets/images/banner/banner-05.png';
import bannerDotLongShape from '../../../../public/assets/images/shape/dot-long-shape.png';
import { imageLoader } from '@/hooks/ImageLoader';

const DigitalAgencyBannerArea = () => {
    return (
        <>
            {/* -- Banner area start -- */}
            <section
                className="banner__area banner-height d-flex justify-content-center align-items-center style-five p-relative fix theme-bg-primary">
                <div className="mouse__scroll">
                    <Link href="#homeabout" className="mouse__scroll-btn"></Link>
                </div>
                <div className="banner__shape-wrap">
                    <Image className="banner__shape-one" src={bannerCircleShape} width={22} height={22} alt="image not found" />
                    <Image className="banner__shape-two" src={bannerLineShape} width={84} height={84} alt="image not found" />
                    <Image className="banner__shape-three" src={bannerCircleShape} width={22} height={22} alt="image not found" />
                    <Image className="banner__shape-four" src={bannerCircleShape} width={22} height={22} alt="image not found" />
                </div>
                {/* -- when slide active remove this class -- */}
                <div className="swiper banner__active overflow-visible">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide banner_more_item">
                            <div className="container">
                                <div className="row align-items-center g-5">
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="banner__content p-relative">
                                            <h1 className="banner__title xlarge wow fadeInUp" data-wow-delay=".3s"
                                                data-wow-duration=".7s">Get Our <span className="bd-text-primary">Service</span>{" "}
                                                with Exceptional</h1>
                                            <p className="wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">At digital
                                                agency we specialize in designing, building, shipping and scaling beautiful
                                                by design and work </p>
                                            <div className="banner__btn-wrap wow fadeInUp" data-wow-delay=".6s"
                                                data-wow-duration="1.1s">
                                                <Link className="bd-btn is-btn-anim" href="/portfolio">
                                                    <span className="bd-btn-inner">
                                                        <span className="bd-btn-normal">Get my work</span>
                                                        <span className="bd-btn-hover">Get my work</span>
                                                        <i className="contentHidden"></i>
                                                    </span>
                                                </Link>
                                                <div className="banner__btn">
                                                    <Link className="bd-btn is-btn-anim bordered-blue" href="/about">
                                                        <span className="bd-btn-inner">
                                                            <span className="bd-btn-normal">Know more</span>
                                                            <span className="bd-btn-hover">Know more</span>
                                                            <i className="contentHidden"></i>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5">
                                        <div className="banner__thumb wow fadeInRight" data-wow-delay=".8s"
                                            data-wow-duration="1.2s">
                                            <Image className="banner__border-anim" src={bannerImage} loader={imageLoader} placeholder='blur' loading='lazy'
                                                style={{ width: "100%", height: "auto" }} alt="image not found" />
                                            <div className="banner__thumb-shape">
                                                <Image
                                                    src={bannerDotLongShape} style={{ width: "auto", height: "auto" }} alt="image not found" />
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

export default DigitalAgencyBannerArea;