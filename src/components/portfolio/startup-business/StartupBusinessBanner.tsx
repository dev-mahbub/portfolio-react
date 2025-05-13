"use client"
import React, { useState } from 'react';
import bannerBgImg from '../../../../public/assets/images/bg/banner-bg-02.png';
import bannerImg from '../../../../public/assets/images/banner/banner-07.png';
import Link from 'next/link';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';

const StartupBusinessBanner = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openVideoModal = () => setIsOpen(!isOpen)
    return (
        <>
            <section className="banner__area banner-height d-flex justify-content-center align-items-center style-eight p-relative fix">
                <div className="bg__thumb-position include-bg is-overlay" style={{ backgroundImage: `url(${bannerBgImg.src})` }}>
                </div>
                {/* -- when slide active remove this class -- */}

                <div className="swiper banner__active overflow-visible">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide banner_more_item">
                            <div className="container">
                                <div className="row align-items-center gy-5">
                                    <div className="col-xxl-7 col-xl-7 col-lg-7">
                                        <div className="banner__content p-relative">
                                            <h1 className="banner__title xlarge wow fadeInUp" data-wow-delay=".3s"
                                                data-wow-duration=".7s">Human Cantered <span className="bd-text-primary">Design
                                                    Research</span></h1>
                                            <p className="wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".9s">Researchers
                                                create
                                                user personas or archetypes that represent different user groups. These
                                                personas help
                                                designers and developers to better understand and design for the target
                                                audience</p>
                                        </div>
                                        <div className="banner__btn-wrap wow fadeInUp" data-wow-delay=".6s"
                                            data-wow-duration="1.1s">
                                            <Link className="bd-btn is-btn-anim" href="/portfolio">
                                                <span className="bd-btn-inner">
                                                    <span className="bd-btn-normal">Get my work</span>
                                                    <span className="bd-btn-hover">Get my work</span>
                                                    <i className="contentHidden"></i>
                                                </span>
                                            </Link>
                                            <button onClick={() => { openVideoModal() }} className="play__btn popup-video animate-play"><span><i
                                                className="icon-play"></i></span></button>
                                        </div>
                                    </div>
                                    <div className="col-xxl-5 col-xl-5 col-lg-5">
                                        <div className="banner__thumb-wrapper wow fadeInRight" data-wow-delay=".8s"
                                            data-wow-duration="1.2s">
                                            <div className="banner__thumb">
                                                <Image src={bannerImg} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="vWLcyFtni6U" onClose={() => setIsOpen(false)} />
        </>
    );
};

export default StartupBusinessBanner;