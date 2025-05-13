"use client"
import Image from 'next/image';
import React from 'react';
import aboutImg from '../../../public/assets/images/about/about-04.png';
import aboutShape from '../../../public/assets/images/shape/dot-small.png';
import { imageLoader } from '@/hooks/ImageLoader';
import CountUpContent from '../counter/CountUpContent';
import Link from 'next/link';

const AboutStyleFour = () => {
    return (
        <>
            <div className="row g-5">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about__thumb-wrapper style-four wow fadeInLeft" data-wow-delay=".3s">
                        <div className="about__thumb">
                            <Image loader={imageLoader} placeholder='blur' loading='lazy' src={aboutImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                            <div className="about__shape">
                                <Image className="about__shape-one" src={aboutShape} width={127} height={130}
                                    alt="image not found" />
                            </div>
                            <div className="about__counter-wrapper">
                                <div className="about__counter-info">
                                    <div className="about__counter-count">
                                        <h2><span className="counter"><CountUpContent number={20} text='+' /></span></h2>
                                    </div>
                                    <p>Years of Experience</p>
                                </div>
                                <div className="about__counter-info">
                                    <div className="about__counter-count">
                                        <h2><span className="counter"><CountUpContent number={500} text='+' /></span></h2>
                                    </div>
                                    <p>Stratified Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about__content style-four  wow fadeInRight" data-wow-delay=".3s">
                        <div className="section__title-wrapper mb-25">
                            <div className="section__title-wrapper">
                                <span className="section__subtitle sec-border">Who I Am</span>
                                <h2 className="section__title">Fostering Creativity in Everyday Life</h2>
                            </div>
                        </div>
                        <p>Our agency thrives on collaboration, where each member of our team brings unique
                            perspective expertise
                            to the table. We are believe in the power creativity transform</p>
                        <div className="about__info-list">
                            <div className="about__info-item">
                                <div className="about__info-icon">
                                    <span><i className="icon-partner"></i></span>
                                </div>
                                <div className="about__info-content">
                                    <h5>Trustworthy</h5>
                                    <p>Candid heading and confrontation</p>
                                </div>
                            </div>
                            <div className="about__info-item">
                                <div className="about__info-icon">
                                    <span><i className="icon-grow"></i></span>
                                </div>
                                <div className="about__info-content">
                                    <h5>Improvement</h5>
                                    <p>Progress title and debate</p>
                                </div>
                            </div>
                            <div className="about__info-item">
                                <div className="about__info-icon">
                                    <span><i className="icon-strategy"></i></span>
                                </div>
                                <div className="about__info-content">
                                    <h5>Strategy</h5>
                                    <p>Approach heading and dispute</p>
                                </div>
                            </div>
                        </div>
                        <div className="about__btn">
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
        </>
    );
};

export default AboutStyleFour;