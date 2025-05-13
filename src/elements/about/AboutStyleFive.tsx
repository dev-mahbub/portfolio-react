"use client"
import Link from 'next/link';
import React from 'react';
import aboutImg from '../../../public/assets/images/about/about-05.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/ImageLoader';
import CountUpContent from '../counter/CountUpContent';

const AboutStyleFive = () => {
    return (
        <>
            <div className="row align-items-xl-center g-5">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about__thumb-wrapper style-five wow fadeInLeft" data-wow-delay=".3s">
                        <div className="about__thumb">
                            <Image loader={imageLoader} placeholder='blur' loading='lazy' src={aboutImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        </div>
                        <div className="counter__wrap">
                            <h2 className="counter__title"><span className="counter"><CountUpContent number={10} /></span></h2>
                            <div className="counter__details">
                                <p>Year <br /> Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about__content style-five  wow fadeInRight" data-wow-delay=".3s">
                        <div className="section__title-wrapper mb-25">
                            <div className="section__title-wrapper">
                                <span className="section__subtitle bg-field">Who I Am</span>
                                <h2 className="section__title">Top Digital Agency for Your Business Solutions</h2>
                            </div>
                        </div>
                        <p>Our agency thrives on collaboration, where each member of our team brings unique
                            perspective
                            expertise to the table. We are believe in the power creativity transform brands .</p>
                        <div className="about__info-list">
                            <div className="info__list">
                                <ul>
                                    <li>
                                        <i className="fa-regular fa-check"></i>
                                        Reinvent Your Business to Better Support Our Needs
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-check"></i>
                                        Pioneering the {`Internet's`} First Authentic Generator
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bd-progress__wrap">
                            <div className="bd__progress-bar style-two">
                                <div className="bd__progress">
                                    <div className="bd__progress-wrapper">
                                        <div className="bd__progress-head">
                                            <h6 className="bd__progress-title">UX/UI Design</h6>
                                            <p className="bd__progress-percentage">90%</p>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar wow slideInLeft" role="progressbar"
                                                style={{ width: "90%" }} aria-valuenow={90} aria-valuemin={0}
                                                aria-valuemax={100}>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bd__progress-wrapper">
                                        <div className="bd__progress-head">
                                            <h6 className="bd__progress-title">Development</h6>
                                            <p className="bd__progress-percentage">80%</p>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar wow slideInLeft" role="progressbar"
                                                style={{ width: "80%" }} aria-valuenow={80} aria-valuemin={0}
                                                aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="about__btn">
                            <Link className="bd-btn is-btn-anim" href="/about">
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
        </>
    );
};

export default AboutStyleFive;