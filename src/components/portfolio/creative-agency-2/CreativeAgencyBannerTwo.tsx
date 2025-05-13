import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bannerShapeOne from '../../../../public/assets/images/shape/curve-shape.png';
import bannerShapeTwo from '../../../../public/assets/images/shape/line-shape.png';
import bannerShapeThree from '../../../../public/assets/images/shape/curve-shape-02.png';
import bannerBgImg from '../../../../public/assets/images/banner/banner-04.png';

const CreativeAgencyBannerTwo = () => {
    return (
        <>
            {/* -- Banner area start -- */}
            <section className="banner__area banner-height d-flex align-items-center style-four p-relative fix">
                <div className="line__wrap d-none d-lg-block">
                    <div className="line__item"></div>
                </div>
                <div className="bg__thumb-position include-bg is-overlay"
                    style={{ backgroundImage: `url(${bannerBgImg.src})` }}>
                </div>
                <div className="banner__shape">
                    <Image className="banner__shape-one" src={bannerShapeOne} style={{ width: "auto", height: 'auto' }} alt="image not found" />
                    <Image className="banner__shape-two" src={bannerShapeTwo} style={{ width: "auto", height: 'auto' }} alt="image not found" />
                    <Image className="banner__shape-three" src={bannerShapeThree} style={{ width: "auto", height: 'auto' }} alt="image not found" />
                </div>
                {/* -- when slide active remove this class -- */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 col-md-10 col-sm-10">
                            <div className="swiper banner__active overflow-visible">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide banner_more_item">
                                        <div className="banner__content p-relative">
                                            <h1 className="banner__title xlarge wow fadeInUp" data-wow-delay=".3s"
                                                data-wow-duration=".7s">We Create Solid Startup Initiatives</h1>
                                            <p className="wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">Our agency
                                                is dedicated to crafting compelling narratives that not only engage your
                                                audience but also drive results. </p>
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
                                                    <Link className="bd-btn is-btn-anim is-transparent-btn" href="/contact">
                                                        <span className="bd-btn-inner">
                                                            <span className="bd-btn-normal">Contact me</span>
                                                            <span className="bd-btn-hover">Contact me</span>
                                                            <i className="contentHidden"></i>
                                                        </span>
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

export default CreativeAgencyBannerTwo;