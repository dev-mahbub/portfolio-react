"use client"
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aboutImg from '../../../public/assets/images/about/about-06.png';
import CountUpContent from '../counter/CountUpContent';

const AboutStyleSix = () => {
    return (
        <>
            <div className="row g-5">
                <div className="col-xl-6 col-lg-6">
                    <div className="about__thumb-wrapper style-six wow fadeInLeft" data-wow-delay=".3s">
                        <div className="about__thumb">
                            <Image loader={imageLoader} placeholder='blur' loading='lazy' src={aboutImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        </div>
                        <div className="counter__wrap">
                            <h2 className="counter__title"><span className="counter"><CountUpContent number={10} text='+' /></span></h2>
                            <div className="counter__details">
                                <p>Year <br /> Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="about__content style-six  wow fadeInRight" data-wow-delay=".3s">
                        <div className="section__title-wrapper mb-25">
                            <div className="section__title-wrapper">
                                <span className="section__subtitle bg-field">Who I Am</span>
                                <h2 className="section__title">Top Digital Agency for Your Business Solutions</h2>
                            </div>
                        </div>
                        <p>Our journey continues as we set our sights on the future. We are excited to explore new
                            horizons, innovate, and expand our offerings in upcoming initiatives. We are confident
                            that with the same passion and dedication that guided us from the beginning</p>
                        <div className="about__info-list">
                            <div className="info__list">
                                <ul>
                                    <li>
                                        <i className="icon-grow"></i>
                                        <h6>Grow Business</h6>
                                    </li>
                                    <li>
                                        <i className="icon-partner"></i>
                                        <h6>Trusted Partner</h6>
                                    </li>
                                    <li>
                                        <i className="icon-time"></i>
                                        <h6>Preserve time</h6>
                                    </li>
                                    <li>
                                        <i className="icon-support"></i>
                                        <h6>Support</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="about__btn">
                            <Link className="bd-btn is-border-gradient is-bg-none" href="/about"><span className="">Know
                                more<i className="contentHidden"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyleSix;