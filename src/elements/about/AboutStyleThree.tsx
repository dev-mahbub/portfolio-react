"use client"
import Image from 'next/image';
import React from 'react';
import AboutImg from '../../../public/assets/images/about/about-03.png';
import { imageLoader } from '@/hooks/ImageLoader';
import CountUpContent from '../counter/CountUpContent';
import Link from 'next/link';

const AboutStyleThree = () => {
    return (
        <>
            <div className="row g-5 align-items-lg-center">
                <div className="col-xl-6 col-lg-7 col-md-6 order-md-0 order-1">
                    <div className="about__content style-three  wow fadeInLeft" data-wow-delay=".3s">
                        <div className="section__title-wrapper mb-25">
                            <div className="section__title-wrapper">
                                <span className="section__subtitle sec-border">Who I Am</span>
                                <h2 className="section__title">Fostering Creativity in Everyday Life</h2>
                            </div>
                        </div>
                        <p>Our agency thrives on collaboration, where each member of our team brings unique perspective expertise to the table. We are believe in the power creativity transform brands businesses and experiences.{`we're`} storytellers We are believe in the power creativity transform brands businesses and experiences.{`we're`} storytellers </p>
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
                                    <li>
                                        <i className="fa-regular fa-check"></i>
                                        Pioneering the Design {`World's`} First Authentic Generator
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="about__btn">
                            <Link className="bd-btn is-bg-gradient" href="/about"><span className="">Know more<i
                                className="contentHidden"></i></span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-5 col-md-6 order-md-1 order-0">
                    <div className="about__thumb-wrapper style-three wow fadeInRight" data-wow-delay=".3s">
                        <div className="about__thumb">
                            <Image loader={imageLoader} loading='lazy' placeholder='blur' src={AboutImg} style={{ width: "100%", height: "auto" }} alt="image not found" />
                        </div>
                        <div className="counter__wrap">
                            <h2 className="counter__title"><span className="counter"><CountUpContent number={10} /></span></h2>
                            <div className="counter__details">
                                <p>Year <br /> Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyleThree;